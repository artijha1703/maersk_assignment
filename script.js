let sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sorted = true;

// generate random number
function suffleNumber() {
  return Math.floor(Math.random() * (9 - 1 + 1) + 1);
}

// this function will accept the array as paramter
// return shuffled array
function shuffle(list) {
  let suffledArray = [];
  // numberpresent will hold all the numbers which has been pushed to shuffle array
  // if genertaed random number is already present in the list
  // again will call generate random number
  // till the generated number is not in the list
  // will push the number if it is not in numberpresent obj and will also add it to numberpresent to compare next time
  // will make sorted false , so that when user will call sort
  // wil not endup sorting the sorted array
  let numberPresent = {};

  for (let i = 0; i < 9; i++) {
    let sNum = suffleNumber();
    if (!numberPresent[sNum]) {
      suffledArray.push(sNum);
      numberPresent[sNum] = true;
    } else {
      while (numberPresent[sNum]) {
        sNum = suffleNumber();
      }
      suffledArray.push(sNum);
      numberPresent[sNum] = true;
    }
  }
  sortedList = suffledArray;
  sorted = false;
  return displayList();
}

// this will generate the html element
function displayList() {
  let elem = document.getElementById("list");
  for (let i = 0; i < sortedList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = sortedList[i];
    if (elem.childNodes[i]) {
      elem.replaceChild(li, elem.childNodes[i]);
    } else elem.appendChild(li);
  }
}

// function to sort array
function sortList() {
  //not to run the sorting logic for already sorted data
  if (sorted) {
    return;
  } else {
    // bubble sort
    for (let i = 0; i < sortedList.length; i++) {
      for (let j = 0; j < sortedList.length - 1 - i; j++) {
        if (sortedList[j] > sortedList[j + 1]) {
          let temp = sortedList[j + 1];
          sortedList[j + 1] = sortedList[j];
          sortedList[j] = temp;
        }
      }
    }
  }
  // arrange the display
  displayList();
  return sortList;
}

// invoking it for the initial load of sorted array
displayList();
