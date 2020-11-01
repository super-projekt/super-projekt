import EventBus from '../EventBus';

function SButton (eventBus, title, event) {
  const buttonHTMLElement = document.createElement('button');
  buttonHTMLElement.textContent = title;
  buttonHTMLElement.onclick = eventBus.emit(event);
  return buttonHTMLElement;
}

export default SButton;
