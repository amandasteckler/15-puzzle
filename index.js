window.addEventListener("load", false);

// declare variable to set up winning status
var won = false

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

  // use shuffled array to shuffle the board
  assignInnerHTMLToIds(nums)
}

function assignInnerHTMLToIds(numsArray) {
  // iterate through table rows, set contents equal to shuffled nums
  // set class for "" element to "unfilled", otherwise to "filled"
  for (var p=0; p < numsArray.length; p++) {
    currentElement = document.getElementById((p + 1).toString());
    currentElement.innerHTML = numsArray[p];
    if (currentElement.innerHTML === "") {
      currentElement.className = "unfilled"
    } else {
      currentElement.className = "filled"
    }
  }
}

function clicked(block) {
  // get clicked block id
  blockId = parseInt(block.id)

  // calculate neighbor blocks
  blockOnTopId = blockId - 4
  blockOnTop = document.getElementById(blockOnTopId.toString())

  blockOnBottomId = blockId + 4
  blockOnBottom = document.getElementById(blockOnBottomId.toString())

  // make sure to set edge block's left or right block = null if they don't exist
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

  var currentRow = document.getElementById(block.id).parentElement.children
  var currentRowArray = []
  for (var i=0; i < currentRow.length; i++) {
    currentRowArray.push(currentRow[i])
  }

  var blockIndex = currentRowArray.indexOf(block);
  var indexDifference

  for (var i=0; i < currentRowArray.length; i++) {
    if (currentRowArray[i].className === "unfilled") {
      var unfilledBlock = currentRowArray[i]
      var unfilledBlockIndex = i
      var unfilledBlockId = unfilledBlock.id
      if (blockIndex - unfilledBlockIndex > 1) {
        indexDifference = blockIndex - unfilledBlockIndex
        for (var j=unfilledBlockIndex; j < indexDifference+1; j++) {
          if (currentRowArray[j+1]) {
            document.getElementById(currentRowArray[j].id).innerHTML = currentRowArray[j+1].innerHTML
            document.getElementById(currentRowArray[j].id).className = "filled"
          }
        }
        block.innerHTML = ""
        block.className = "unfilled"
      }

      // else if (unfilledBlockIndex - blockIndex > 1) {
      //   indexDifference = unfilledBlockIndex - blockIndex
      //   for (var j=unfilledBlockIndex; j > blockIndex-1; j--) {
      //     if (currentRowArray[j-1]){
      //       document.getElementById(currentRowArray[j]).innerHTML = currentRowArray[j-1].innerHTML
      //       document.getElementById(currentRowArray[j]).className = "filled"
      //     }
      //   }
      // }
      // block.innerHTML = ""
      // block.className = "unfilled"
    }
  }

  // switch the blocks
  switchBlocks(block, blockOnTop, blockOnBottom, blockToTheLeft, blockToTheRight)
}

function switchBlocks(current, top, bottom, left, right) {
  var neighborBlocks = [bottom, top, left, right]

  // when the neighboring block is not null and innerHTML is "", switch
  // blocks' class names & content
  for (let blockElement of neighborBlocks) {
    if (blockElement != null && blockElement.innerHTML === "") {
      blockElement.innerHTML = current.innerHTML
      blockElement.className = "filled"
      current.innerHTML = ""
      current.className = "unfilled"
      break
    }
  }

  // see if all the table's rows' ids and content match
  matching()
}

function matching() {
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

  // check to see if user won
  userWon(matchingIdAndContent)
}

function userWon(arr) {
  // if a false exists in the array, user hasn't won yet
  if (arr.indexOf(false) < 0) {
    won = true
  }

  // if user won, add winning message to <div id="won"></div>
  if (won === true) {
    wonDiv = document.getElementById("won")
    wonDiv.innerHTML = "You won!"
  }
}
