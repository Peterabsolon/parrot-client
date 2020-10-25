// function selectTextRange(obj, start, stop) {
//   var endNode,
//     startNode = (endNode = obj.firstChild)

//   startNode.nodeValue = startNode.nodeValue.trim()

//   var range = document.createRange()
//   range.setStart(startNode, start)
//   range.setEnd(endNode, stop + 1)

//   var sel = window.getSelection()
//   sel.removeAllRanges()
//   sel.addRange(range)
// }

export const selectTextRange = (element: HTMLElement, start: number, stop: number): void => {
  console.log('here', element)

  if (!element.firstChild) {
    return
  }

  console.log('element', element)

  const startNode = element.firstChild
  const endNode = element.firstChild

  // startNode.nodeValue = startNode.nodeValue.trim()

  const range = document.createRange()
  range.setStart(startNode, start)
  range.setEnd(endNode, stop + 1)

  const selection = window.getSelection()
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
