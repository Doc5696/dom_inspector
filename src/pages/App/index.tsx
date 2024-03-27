import { Stack } from '@mui/material'

import DomNode from '../../components/DomNode'
import useApp from './hook'

const App = () => {
  const {
    ref,
    rootElement,
    nodesArray,
    selectedNode,
    setSelectedNode,
    getNestedLvl,
  } = useApp()

  return (
    <Stack ref={ref} sx={{ maxHeight: '100%', overflow: 'auto' }}>
      <DomNode
        isSelected={selectedNode === rootElement}
        setSelectedNode={setSelectedNode}
        domNode={rootElement}
        nestedLvl={0}
      />
      <Stack sx={{ maxHeight: '100%' }}>
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
  )
}

export default App
