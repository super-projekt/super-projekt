export function task (title, desc) {
  const el = document.createElement('div')
  el.textContent = title + ': ' + desc
  return el
}
