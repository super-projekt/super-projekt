import EventBus from '../EventBus'

export function button (title, event) {
  const buttonHTMLElement = document.createElement('button')
  buttonHTMLElement.textContent = title
  buttonHTMLElement.onclick = EventBus.emit(event)
  return buttonHTMLElement
}
