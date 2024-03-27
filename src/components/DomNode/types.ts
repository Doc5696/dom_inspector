export type DomNodeProps = {
  domNode: Element
  nestedLvl: number
  isSelected?: boolean
  setSelectedNode?: (el: Element | null) => void
}
