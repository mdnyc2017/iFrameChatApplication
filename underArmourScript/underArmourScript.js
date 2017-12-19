
  let tileCollection = document.getElementsByClassName('tile')
  let tileArray = Array.prototype.slice.call(tileCollection)
  for(let i =0; i<tileArray.length; i++){
    if(Number(tileArray[i].children[5].innerText.slice(1))>100){
      tileArray[i].style.display="none"
    }
  }
