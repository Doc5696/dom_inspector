const initWidget = () => {
  let isWidgetOpen = false

  const widgetButtonContainer = document.createElement('div')
  const widgetControlButton = document.createElement('button')
  const inspectIcon = document.createElement('img')
  const widgetContainer = document.createElement('aside')

  widgetButtonContainer.style.position = 'fixed'
  widgetButtonContainer.style.bottom = '10px'
  widgetButtonContainer.style.right = '10px'
  widgetButtonContainer.style.zIndex = '99999'

  widgetControlButton.style.backgroundColor = '#ddd'
  widgetControlButton.style.border = '2px solid #fff'
  widgetControlButton.style.cursor = 'pointer'
  widgetControlButton.style.padding = '5px'
  widgetControlButton.style.width = '40px'
  widgetControlButton.style.height = '40px'
  widgetControlButton.style.borderRadius = '50%'

  inspectIcon.setAttribute(
    'src',
    'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png',
  )
  inspectIcon.style.width = '20px'
  inspectIcon.style.height = '20px'

  widgetContainer.setAttribute('id', 'inspector_widget_iframe')
  widgetContainer.style.display = 'none'
  widgetContainer.style.position = 'fixed'
  widgetContainer.style.top = '20px'
  widgetContainer.style.right = '20px'
  widgetContainer.style.minWidth = '500px'
  widgetContainer.style.width = '25%'
  widgetContainer.style.minHeight = '500px'
  widgetContainer.style.height = 'calc(100vh - 100px)'
  widgetContainer.style.border = '2px solid #fff'
  widgetContainer.style.borderRadius = '5px'
  widgetContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  widgetContainer.style.zIndex = '99999'

  const setIsWidgetOpen = () => {
    if (isWidgetOpen) {
      widgetContainer.style.display = 'none'
      inspectIcon.setAttribute(
        'src',
        'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png',
      )
    } else {
      widgetContainer.style.display = 'block'
      inspectIcon.setAttribute(
        'src',
        'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-line-icon.png',
      )
    }
    isWidgetOpen = !isWidgetOpen
  }

  widgetControlButton.onclick = setIsWidgetOpen

  widgetControlButton.appendChild(inspectIcon)
  widgetButtonContainer.appendChild(widgetControlButton)
  document.querySelector('html').appendChild(widgetButtonContainer)
  document.querySelector('html').appendChild(widgetContainer)
}

initWidget()
