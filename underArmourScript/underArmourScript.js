
  let tileCollection = document.getElementsByClassName('tile')
  let tileArray = Array.prototype.slice.call(tileCollection)
  for(let i =0; i<tileArray.length; i++){
    if(Number(tileArray[i].children[5].innerText.slice(1))>100){
      tileArray[i].style.display="none"
    }
  }
  /*
  1. grab an HTMLcollection of tiles
  2. convert it to an array
  3. loop through
  4. tileArray[i].children[5] is the price div
  5. innerText grabs the price as a string
  6. slice(1) extracts the first index of the string and returns it as a new string. In this case, it 7. slices off the "$" from the" string
  8. wrapping the entire contents of the if-statement in Number() converts that string to a Number
  9. if the number is larger than 100, tileArray[i]'s display is set to none
  */