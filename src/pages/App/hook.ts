import {
  useCallback,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
} from 'react'

import { removeHighlight } from '../../utils/highlight'

const useApp = () => {
  const ref = useRef(null)

  const [nodesArray, setNodesArray] = useState<Element[]>([])
  const [selectedNode, setSelectedNode] = useState<Element | null>(null)

  const rootElement = document.body

  const flattenElements = useCallback((rootElement: Element) => {
    const nodeList = Array.from(rootElement.children)
    const array: Element[] = []
    nodeList.forEach(node => {
      array.push(node)
      if (node.children.length > 0) {
        const childrenArray = flattenElements(node)
        array.push(...childrenArray)
      }
    })
    return array
  }, [])

  const getNestedLvl = useCallback(
    (node: Element): number => {
      if (!node || !rootElement || node === rootElement) return 0
      const nodeCount = rootElement.childNodes.length
      let result = 0
      let currentNode = node
      for (let i = 0; i < nodeCount; i++) {
        if (currentNode === rootElement) break
        if (currentNode.parentElement) {
          currentNode = currentNode.parentElement
          result += 1
        }
      }

      return result
    },
    [rootElement],
  )

  const handleClickOutside = (event: Event) => {
    if (
      ref.current &&
      !(ref.current as HTMLElement).contains(event.target as HTMLElement)
    ) {
      removeHighlight()
      setSelectedNode(null)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  useLayoutEffect(() => {
    setNodesArray(flattenElements(rootElement))
  }, [setNodesArray, flattenElements, rootElement])

  return {
    ref,
    rootElement,
    nodesArray,
    selectedNode,
    setSelectedNode,
    getNestedLvl,
  }
}

export default useApp
