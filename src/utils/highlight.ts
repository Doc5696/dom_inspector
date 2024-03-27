import {
  HIGHLIGHT_ID,
  SELECTED_NODE_DATA_ATTRIBUTE,
} from '../components/DomNode/constants'

export const highlightElement = (domNode: HTMLElement) => {
  const top = window.scrollY + domNode.getBoundingClientRect().top
  const left = window.scrollX + domNode.getBoundingClientRect().left
  const width = domNode.offsetWidth
  const height = domNode.offsetHeight

  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.zIndex = '9999'
  div.style.content = ''
  div.style.height = `${height}px`
  div.style.width = `${width}px`
  div.style.top = `${top}px`
  div.style.left = `${left}px`
  div.style.background = 'yellow'
  div.style.outline = '1px solid #FF6611'
  div.style.opacity = '0.20'
  div.setAttribute('id', HIGHLIGHT_ID)
  document.body.appendChild(div)
}

export const removeHighlight = () => {
  const highlightElement = document.getElementById(HIGHLIGHT_ID)
  highlightElement?.remove()
  document
    .querySelectorAll(`[${SELECTED_NODE_DATA_ATTRIBUTE}="true"]`)
    .forEach(el => {
      el.removeAttribute('data-dom-inspector-selected-node')
      ;(el as HTMLElement).style.removeProperty('outline')
    })
}
