window.addEventListener("load", false);

function newGame() {
  // create array of all the table rows' contents
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]

  // shuffle nums
  for (var i = nums.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var k = nums[i];
        nums[i] = nums[j];
        nums[j] = k;
    }

  // iterate through table rows, set contents equal to shuffled nums
  // set class for "" element to "unfilled", otherwise to "filled"
  for (var p=0; p < nums.length; p++) {
    currentElement = document.getElementById((p + 1).toString());
    currentElement.innerHTML = nums[p];
    if (currentElement.innerHTML === "") {
      currentElement.className = "unfilled"
    } else {
      currentElement.className = "filled"
    }
  }

  // declare variable to set up winning status
  var won = false

}

function clicked(block) {
  // get clicked block id
  blockId = parseInt(block.id)

  // calculate neighbor blocks
  blockOnTopId = blockId - 4
  blockOnTop = document.getElementById(blockOnTopId.toString())

  blockOnBottomId = blockId + 4
  blockOnBottom = document.getElementById(blockOnBottomId.toString())

  if ((blockId-1) % 4 === 0) {
    blockToTheLeft = null
  } else {
    blockToTheLeftId = blockId - 1
    blockToTheLeft = document.getElementById(blockToTheLeftId.toString())
  }

  if (blockId % 4 === 0) {
    blockToTheRight = null
  } else {
    blockToTheRightId = blockId + 1
    blockToTheRight = document.getElementById(blockToTheRightId.toString())
  }

  var neighborBlocks = [blockOnBottom, blockOnTop, blockToTheLeft, blockToTheRight]

  // when the neighboring block is not null and innerHTML is "", switch
  // blocks' class names & content
  for (let currentBlock of neighborBlocks) {
    if (currentBlock != null && currentBlock.innerHTML === "") {
      currentBlock.innerHTML = block.innerHTML
      currentBlock.className = "filled"
      block.innerHTML = ""
      block.className = "unfilled"
      break
    }
  }

  // iterate through table rows, if id & content match, push true, otherwise, push false
  var matchingIdAndContent = []
  for (var i=1; i < 16; i++) {
    var el = document.getElementById(i.toString())
    if (el.id === el.innerHTML) {
      matchingIdAndContent.push(true)
    } else {
      matchingIdAndContent.push(false)
    }
  }

  // if a false exists in the matchingIdAndContent array, user hasn't won yet
  if (matchingIdAndContent.indexOf(false) < 0) {
    won = true
  }

  // if user won, add winning message to <div id="won"></div>
  if (won === true) {
    wonDiv = document.getElementById("won")
    wonDiv.innerHTML = "You won!"
  }
}
