window.addEventListener("load", false);

function newGame() {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]
  for (var i = nums.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var k = nums[i];
        nums[i] = nums[j];
        nums[j] = k;
    }

  for (var p=0; p < nums.length; p++) {
    currentElement = document.getElementById((p + 1).toString());
    currentElement.innerHTML = nums[p]
    if (currentElement.innerHTML === "") {
      currentElement.className = "unfilled"
    } else {
      currentElement.className = "filled"
    }
  }

  var won = false

}

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

  if (blockOnBottom != null && blockOnBottom.innerHTML === "") {
    blockOnBottom.innerHTML = block.innerHTML
    blockOnBottom.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockOnTop != null && blockOnTop.innerHTML === "") {
    blockOnTop.innerHTML = block.innerHTML
    blockOnTop.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockToTheLeft != null && blockToTheLeft.innerHTML === "") {
    blockToTheLeft.innerHTML = block.innerHTML
    blockToTheLeft.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  } else if (blockToTheRight != null && blockToTheRight.innerHTML === "") {
    blockToTheRight.innerHTML = block.innerHTML
    blockToTheRight.className = "filled"
    block.innerHTML = ""
    block.className = "unfilled"
  }

  var ordered = []
  for (var i=1; i < 16; i++) {
    var el = document.getElementById(i.toString())
    if (el.id === el.innerHTML) {
      ordered.push(true)
    } else {
      ordered.push(false)
    }
  }

  if (ordered.indexOf(false) < 0) {
    won = true
  }

  if (won === true) {
    wonDiv = document.getElementById("won")
    wonDiv.innerHTML = "You won!"
  }
}
