<template>
  <div class="code-block-wrapper">
    <div class="code-block-header" :style="headerStyle">
      <template v-if="url">
        <a :href="url" target="_blank" rel="noopener noreferrer" class="filename-link">
          {{ title || "源代码" }}
        </a>
      </template>

      <template v-else>
        <span class="filename">{{ title || "源代码" }}</span>
      </template>

      <button @click="copyToClipboard" class="copy-button" :style="buttonStyle">
        {{ copyButtonText }}
      </button>
    </div>

    <div class="code-block-content">
      <div v-if="isLoading" class="state-overlay">
        <p>正在拉取内容...</p>
      </div>

      <div v-else-if="error" class="state-overlay error">
        <p>加载失败: {{ error }}</p>
        <button @click="fetchContent" class="retry-button">重试</button>
      </div>

      <pre v-else :style="maxHeight ? { maxHeight, overflowY: 'auto' } : {}">
        <code :class="`language-${language}`">{{ content }}</code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useAppStore } from "valaxy";
import hljs from "highlight.js";

const app = useAppStore(); // Valaxy application/theme store

/**
 * Component properties definition.
 */
const props = defineProps({
  url: { type: String, required: true }, // URL of the remote code file
  language: { type: String, default: "text" }, // Language for syntax highlighting
  title: { type: String, default: "" }, // Title of the code block
  maxHeight: { type: String, default: "" }, // Maximum height for scrolling
});

// --- Reactive State ---
const content = ref(""); // Stores the fetched code content
const isLoading = ref(true); // Loading status flag
const error = ref(null); // Stores any fetch error message
const copyButtonText = ref("复制"); // Text for the copy button

/**
 * Fetches content from the remote URL.
 */
const fetchContent = async () => {
  isLoading.value = true;
  error.value = null;
  copyButtonText.value = "复制";
  try {
    const res = await fetch(props.url);
    if (!res.ok) throw new Error(`网络错误: ${res.status} ${res.statusText}`);
    content.value = await res.text();
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

/**
 * Copies the code content to the clipboard.
 */
const copyToClipboard = async () => {
  if (!content.value) return;
  try {
    await navigator.clipboard.writeText(content.value);
    copyButtonText.value = "已复制!";
    setTimeout(() => (copyButtonText.value = "复制"), 2000); // Reset text after 2 seconds
  } catch {
    copyButtonText.value = "复制失败";
    setTimeout(() => (copyButtonText.value = "复制"), 2000); // Reset text after 2 seconds
  }
};

// Dynamic style objects for theme switching
const headerStyle = ref({});
const buttonStyle = ref({});

/**
 * Updates header styles based on the current theme (dark/light).
 * @param {boolean} isDark - Whether the dark theme is active.
 */
const updateHeaderStyle = (isDark) => {
  headerStyle.value = {
    backgroundColor: isDark ? "#161b22" : "#f0f0f0",
    color: isDark ? "#8b949e" : "#24292f",
    borderBottom: `1px solid ${isDark ? "#30363d" : "#d1d5da"}`,
  };
};

/**
 * Updates button styles based on the current theme (dark/light).
 * @param {boolean} isDark - Whether the dark theme is active.
 */
const updateButtonStyle = (isDark) => {
  buttonStyle.value = {
    backgroundColor: isDark ? "#21262d" : "#e1e4e8",
    color: isDark ? "#c9d1d9" : "#24292f",
    borderColor: isDark ? "#30363d" : "#d1d5da",
  };
};

// --- Highlighting Logic ---

/**
 * Applies syntax highlighting to the code block.
 */
const applyHighlight = () => {
  // Ensure DOM is updated before applying highlight
  nextTick(() => {
    // Highlight all 'pre code' elements
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  });
};

/**
 * Dynamically loads the highlight.js theme CSS based on the dark mode setting.
 * @param {boolean} isDark - Whether the dark theme is active.
 */
const loadHighlightTheme = (isDark) => {
  // Remove old stylesheet link
  const oldLink = document.getElementById("hljs-theme");
  if (oldLink) oldLink.remove(); // Create and append new stylesheet link (using CDN)

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.id = "hljs-theme";
  link.href = isDark
    ? "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css" // Dark theme
    : "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css"; // Light theme

  document.head.appendChild(link);
};

// --- Lifecycle Hooks ---

onMounted(async () => {
  loadHighlightTheme(app.isDark); // Load initial theme
  await fetchContent(); // Fetch remote content
  applyHighlight(); // Apply syntax highlighting
  updateHeaderStyle(app.isDark); // Initialize header style
  updateButtonStyle(app.isDark); // Initialize button style
});

// Watch for theme changes (app.isDark) to update styles and highlighting
watch(
  () => app.isDark,
  (isDark) => {
    // Switch highlight.js theme
    loadHighlightTheme(isDark); // Re-apply highlighting (needed for the new theme to take effect)

    applyHighlight(); // Update header styles

    updateHeaderStyle(isDark); // Update button styles

    updateButtonStyle(isDark);
  }
);
</script>

<style scoped>
.code-block-wrapper {
  /* Base container styles for the code block */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  margin: 25px 0;
  border-radius: 8px;
  overflow: hidden;
}

.code-block-header {
  /* Header styles (filename and button) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161b22; /* Default dark background */
  padding: 8px 16px;
  font-size: 13px;
  color: #8b949e; /* Default dark text color */
  border-bottom: 1px solid #30363d;
}

.filename {
  font-weight: 500;
}

.copy-button {
  /* Default copy button style (dark theme) */
  background-color: #21262d;
  color: #c9d1d9;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s, border-color 0.2s;
}

.copy-button:hover {
  background-color: #30363d;
  border-color: #8b949e;
}

.code-block-content {
  /* Code content area */
  position: relative;
  min-height: 100px; /* Provides initial height for loading/error states */
}

pre {
  /* Override highlight.js default padding/display */
  padding: 1;
  display: flex;
  flex-direction: column;
}

pre code {
  /* Ensure code content block fills the pre container */
  display: block;
  flex: 1;
  line-height: inherit;
}

.state-overlay {
  /* Styles for loading and error overlays */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  min-height: 100px;
}

.state-overlay.error {
  color: #f85149;
}

.retry-button {
  /* Retry button styles */
  background-color: #238636;
  color: white;
  border: 1px solid #2ea043;
  border-radius: 6px;
  padding: 5px 12px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.retry-button:hover {
  background-color: #2ea043;
}
</style>
