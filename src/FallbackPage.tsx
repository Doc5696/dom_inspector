import { Stack, Typography } from '@mui/material'
import { useCallback, useLayoutEffect, useState } from 'react'

import DomNode from './components/DomNode'

const FallbackPage = () => {
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

  useLayoutEffect(() => {
    setNodesArray(flattenElements(rootElement))
  }, [setNodesArray, flattenElements, rootElement])

  return (
    <Stack>
      <Typography variant="h1">
        Ooops, seems like you are trying to use widget with no parent page
        <span id="hhh1">ffe</span>
      </Typography>
      <Stack>
        <DomNode
          isSelected={selectedNode === rootElement}
          setSelectedNode={setSelectedNode}
          domNode={rootElement}
          nestedLvl={0}
        />
        <Stack>
          {nodesArray.map((node: Element, idx: number) => (
            <DomNode
              key={`dom-node-item-${idx++}`}
              domNode={node}
              nestedLvl={getNestedLvl(node)}
              isSelected={selectedNode === node}
              setSelectedNode={setSelectedNode}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FallbackPage
