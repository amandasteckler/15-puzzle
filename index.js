window.addEventListener("load", false);

function clicked(block) {
  blockId = parseInt(block.id)

  blockOnTopId = blockId - 4
  blockOnTop = document.getElementById(blockOnTopId.toString())

  blockOnBottomId = blockId + 4
  blockOnBottom = document.getElementById(blockOnBottomId.toString())

  blockToTheLeftId = blockId - 1
  blockToTheLeft = document.getElementById(blockToTheLeftId.toString())

  blockToTheRightId = blockId + 1
  blockToTheRight = document.getElementById(blockToTheRightId.toString())

  // come back to the issue where 5-1 = 4 for example

  if (blockOnBottom.innerHTML === "") {
    blockOnBottom.innerHTML = block.innerHTML
    blockOnBottom.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockOnTop.innerHTML === "") {
    blockOnTop.innerHTML = block.innerHTML
    blockOnTop.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockToTheLeft.innerHTML === "") {
    blockToTheLeft.innerHTML = block.innerHTML
    blockToTheLeft.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockToTheRight.innerHTML === "") {
    blockToTheRight.innerHTML = block.innerHTML
    blockToTheRight.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  }
}
