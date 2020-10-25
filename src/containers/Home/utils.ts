export const selectTextRange = (element: HTMLElement, start: number, stop: number): void => {
  if (!element.firstChild) {
    return
  }

  const startNode = element.firstChild
  const endNode = element.firstChild

  const range = document.createRange()
  range.setStart(startNode, start)
  range.setEnd(endNode, stop + 1)

  const selection = window.getSelection()
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
