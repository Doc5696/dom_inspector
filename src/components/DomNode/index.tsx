import { Stack, Typography } from '@mui/material'

import { DomNodeProps } from './types'
import { captionTextStyle } from './style'
import useDomNode from './hook'

const DomNode = ({
  isSelected,
  setSelectedNode,
  domNode,
  nestedLvl,
}: DomNodeProps) => {
  const { handleSelect, computedStyle, isInvisible } = useDomNode({
    domNode,
    setSelectedNode,
    isSelected,
  })
  return (
    <Stack sx={{ p: 0, m: 0 }}>
      <Stack
        onClick={handleSelect}
        direction="row"
        alignItems="center"
        sx={{
          p: 0.5,
          ml: nestedLvl,
          mb: 0.1,
          bgcolor: `rgba(0, 100, 255, ${isSelected ? '0.4' : '0.2'})`,
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>
          {domNode.tagName.toLocaleLowerCase()}
        </Typography>
        &nbsp;
        {domNode.id && (
          <Typography
            variant="caption"
            sx={{ ...captionTextStyle, color: 'blue' }}
          >{`#${domNode.id}`}</Typography>
        )}
        &nbsp;
        {domNode.classList && (
          <Typography
            variant="caption"
            sx={{
              ...captionTextStyle,
              color: 'red',
            }}
          >{`.${domNode.classList}`}</Typography>
        )}
      </Stack>
      {isSelected && (
        <>
          {isInvisible ? (
            <Typography sx={{ p: 2 }}>
              This tag is invisible, probably it runs some code
            </Typography>
          ) : (
            <>
              <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                <Stack>
                  <Typography>Id:</Typography>
                  <Typography variant="caption">{`${domNode.id || '-'}`}</Typography>
                </Stack>
                <Stack>
                  <Typography>CSS Classes:</Typography>
                  {domNode.className?.length
                    ? domNode.className
                        .split(' ')
                        .map((CSSClass: string, idx: number) => (
                          <Typography
                            key={`${CSSClass}-${idx++}`}
                            variant="caption"
                          >{`.${CSSClass}`}</Typography>
                        ))
                    : '-'}
                </Stack>
                <Stack>
                  <Typography>Width:</Typography>
                  <Typography variant="caption">{`${(domNode as HTMLElement).offsetWidth ? `${(domNode as HTMLElement).offsetWidth}px` : '-'}`}</Typography>
                </Stack>
                <Stack>
                  <Typography>Height:</Typography>
                  <Typography variant="caption">{`${(domNode as HTMLElement).offsetHeight ? `${(domNode as HTMLElement).offsetHeight}px` : '-'}`}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                <Stack>
                  <Typography>Paddings:</Typography>
                  <Typography variant="caption">{`Top: ${computedStyle?.paddingTop || '-'}`}</Typography>
                  <Typography variant="caption">{`Right: ${computedStyle?.paddingRight || '-'}`}</Typography>
                  <Typography variant="caption">{`Bottom: ${computedStyle?.paddingBottom || '-'}`}</Typography>
                  <Typography variant="caption">{`Left: ${computedStyle?.paddingLeft || '-'}`}</Typography>
                </Stack>
                <Stack>
                  <Typography>Margins:</Typography>
                  <Typography variant="caption">{`Top: ${computedStyle?.marginTop || '-'}`}</Typography>
                  <Typography variant="caption">{`Right: ${computedStyle?.marginRight || '-'}`}</Typography>
                  <Typography variant="caption">{`Bottom: ${computedStyle?.marginBottom || '-'}`}</Typography>
                  <Typography variant="caption">{`Left: ${computedStyle?.marginLeft || '-'}`}</Typography>
                </Stack>
                <Stack>
                  <Typography>Border:</Typography>
                  <Typography variant="caption">{`Width: ${computedStyle?.borderWidth}`}</Typography>
                  <Typography variant="caption">{`Style: ${computedStyle?.borderStyle}`}</Typography>
                  <Typography variant="caption">{`Color: ${computedStyle?.borderColor}`}</Typography>
                </Stack>
              </Stack>
            </>
          )}
        </>
      )}
    </Stack>
  )
}

export default DomNode
