function STaskCard (eventBus, clickEventName, task) {

  if (!task) return
  /* jako kontener/wrappe rna naszą kartę musimy użyć 
      elementu <a> czyli linku zamiast zwykłego diva, ponieważ
      <a> jest klikalny, a <div> nie, a my potrzebujemy, żeby
      karta była klikalna */
  const root = document.createElement('a');

  root.onclick = () => {
    eventBus.emit(clickEventName)
  };

  const titleSection = document.createElement('template')
  titleSection.innerHTML = `
  <div class="xyz">
    <span>
      ${task.name}
    </span

    <span>
      ${task.state}
    </span>
  </div>
  `

  // TODO

  return root;
}

export default STaskCard;
