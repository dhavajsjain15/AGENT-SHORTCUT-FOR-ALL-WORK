import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

let actionListener: ((action: any) => void) | null = null

if (!window.electronAPI) {
  window.electronAPI = {
    updateContentDimensions: async () => {},
    getScreenshots: async () => [],
    setWindowClickThrough: async () => {},
    onUnauthorized: () => () => {},
    onScreenshotTaken: () => () => {},
    onProcessingNoScreenshots: () => () => {},
    onResetView: () => () => {},
    takeScreenshot: async () => {},
    deleteScreenshot: async () => ({ success: true }),
    onSolutionStart: () => () => {},
    onSolutionError: () => () => {},
    onSolutionSuccess: () => () => {},
    onProblemExtracted: () => () => {},
    onDebugSuccess: () => () => {},
    onDebugStart: () => () => {},
    onDebugError: () => () => {},
    moveWindowLeft: async () => {},
    moveWindowRight: async () => {},
    moveWindowUp: async () => {},
    moveWindowDown: async () => {},
    quitApp: async () => {},
    sendChatPrompt: async (prompt: string) => {
      setTimeout(() => {
        if (actionListener) {
          actionListener({
            original: `Executing command: "${prompt}"`,
            text_summary: `[AGENT ACTION] Processing user command: "${prompt}"...`,
            voice_summary: `Processing ${prompt}`
          })
        }
      }, 1200)

      setTimeout(() => {
        if (actionListener) {
          actionListener({
            original: `Completed: "${prompt}"`,
            text_summary: `✓ SUCCESS: Executed "${prompt}". System action triggered!`,
            voice_summary: `Completed ${prompt}`
          })
        }
      }, 3000)

      return { success: true }
    },
    pauseAgent: async () => ({}),
    resumeAgent: async () => ({}),
    stopAgent: async () => ({}),
    onCurrentActionUpdate: (callback: any) => {
      actionListener = callback
      return () => {
        actionListener = null
      }
    },
    invoke: async () => ({}),
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
