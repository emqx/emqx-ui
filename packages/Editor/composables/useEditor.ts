import { onMounted, Ref, ToRefs, ref, onBeforeUnmount, watch } from 'vue'
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { CustomMonacoOption } from '../types/editor'

const getMonacoOptions = (options: ToRefs<CustomMonacoOption>): Monaco.editor.IStandaloneEditorConstructionOptions => {
  const defaultOptions: Monaco.editor.IStandaloneEditorConstructionOptions = {
    value: options.value.value,
    language: options.lang.value,
    readOnly: options.disabled.value,
    wordWrap: options.wordWrap.value,
    lineHeight: options.lineHeight.value,
    fontSize: options.fontSize.value,
    scrollBeyondLastLine: false,
    lineNumbers: options.lineNumbers.value,
    renderLineHighlight: options.renderLineHighlight.value,
    matchBrackets: 'near',
    folding: false,
    lightbulb: {
      enabled: false,
    },
    minimap: {
      enabled: false,
    },
    scrollbar: {
      horizontal: options.scrollbarStatus.value,
      vertical: options.scrollbarStatus.value,
      useShadows: true,
      alwaysConsumeMouseWheel: false,
    },
    smoothScrolling: true,
    // theme: editorTheme || getTheme(),
  }
  return defaultOptions
}

export default function useEditor(id: Ref<string>, refOptions: ToRefs<CustomMonacoOption>) {
  const elementId = `monaco-${id.value}`
  let editor: Monaco.editor.IStandaloneCodeEditor | null = null
  let subscriber: Monaco.IDisposable | null = null
  const value: Ref<string | undefined> = ref('')
  const initEditor = () => {
    const editorElement = document.getElementById(elementId)
    if (editorElement) {
      const defaultOptions = getMonacoOptions(refOptions)
      editor = Monaco.editor.create(editorElement, defaultOptions)
      subscriber = editor.onDidChangeModelContent(() => {
        value.value = editor?.getValue()
      })
    }
  }
  const resetEditor = () => {
    subscriber?.dispose()
    editor?.getModel()?.dispose()
    editor?.dispose()
    editor = null
  }
  window.onresize = () => {
    editor?.layout()
  }
  watch(refOptions.lang, () => {
    resetEditor()
    initEditor()
  })
  onMounted(initEditor)
  onBeforeUnmount(() => {
    resetEditor()
  })
  return {
    value,
  }
}
