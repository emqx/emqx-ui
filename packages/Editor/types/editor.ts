export type Lang = 'json' | 'sql'

export type Switch = 'on' | 'off'

export type renderLineHighlight = 'none' | 'line' | 'gutter' | 'all' | undefined

export type ScrollBarStatus = 'auto' | 'visible' | 'hidden' | undefined

export interface CustomMonacoOption {
  value: string
  lang: Lang
  fontSize: number
  lineNumbers: Switch
  renderLineHighlight: renderLineHighlight
  scrollbarStatus: ScrollBarStatus
  disabled: boolean
  wordWrap: Switch
  lineHeight: number
}

export default {}
