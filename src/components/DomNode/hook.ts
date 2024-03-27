import { SyntheticEvent } from 'react'

import { DomNodeProps } from './types'
import { highlightElement, removeHighlight } from '../../utils/highlight'
import { SELECTED_NODE_DATA_ATTRIBUTE } from './constants'

const useDomNode = ({
  domNode,
  setSelectedNode,
  isSelected,
}: Partial<DomNodeProps>) => {
  const resetNodesSelection = () => {
    removeHighlight()
    setSelectedNode && setSelectedNode(null)
  }

  const selectNode = () => {
    resetNodesSelection()
    if (isSelected || !setSelectedNode) return
    domNode && setSelectedNode(domNode)
    domNode && highlightElement(domNode as HTMLElement)
    domNode?.setAttribute(SELECTED_NODE_DATA_ATTRIBUTE, 'true')
    domNode?.scrollIntoView()
  }

  const handleSelect = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    selectNode()
  }

  const computedStyle = domNode && getComputedStyle(domNode)

  const isInvisible =
    domNode?.tagName === 'SCRIPT' || domNode?.tagName === 'NOSCRIPT'

  return {
    handleSelect,
    computedStyle,
    isInvisible,
  }
}

export default useDomNode
