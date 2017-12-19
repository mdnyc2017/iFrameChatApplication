
window.onload=prepareFrame()//The onload property is an event handler for the load event of, in this case, the Window. Once loaded, it invokes prepareFrame



function prepareFrame(createUser) {
  let userCount = 1
    let user = prompt("Enter your userName")// when invoked, createUser() will grab the user's name for use in the createFrame function below

    if (user){//code only runs if user is truthy, ie, if it exists and is not null or empty        
        let iframe = document.createElement("iframe") //creating an iFrame
        iframe.setAttribute("src", "frame.html")
        iframe.setAttribute("name", `${user}`)
        iframe.setAttribute("id", `${user}`)
        iframe.setAttribute("style", "width: 250px; height: 500px;")
        iframe.setAttribute("class", "movable")
        document.body.appendChild(iframe)
        $(`#${user}`).draggable()// draggable(), from the jQuery UI, makes the specified element  draggable. In this case, any iFrame with the userName id (essentially, any iFrame the user creates) is draggable
        broadcastMessage(`${user}`)
    }
    else{
      iframe.setAttribute("name", `iFrame${userCount}`)
      userCount++
    }
  
}

window.addEventListener('message', receiveMessage)// event listener for messages received from postMessage and calls receiveMessage()


function receiveMessage(){
    let iframeCollection = document.getElementsByTagName("iframe")//gets an HTML Collection of "iframes" to loop through
    let iFrameArray = Array.prototype.slice.call(iframeCollection) //this converts the HTML collection of iFrames into an array, giving us access to array methods

    iFrameArray.forEach(iFrame=>{
        let receiver = iFrame.contentWindow
        receiver.postMessage(event.data, '*') //broadcasts message to all children 
    })
  }

  function broadcastMessage(user){//sends message to each frame from a new iFrame
    let iframeCollection = document.getElementsByTagName("iframe")//gets an HTML Collection of "iframes" to loop through
    let iFrameArray = Array.prototype.slice.call(iframeCollection) //this converts the HTML collection of iFrames into an array, giving us access to array methods

    iFrameArray.forEach(iFrame=>{
        iFrame.contentWindow.postMessage(`[system] - ${user} joined the conversation<br>`, '*')
    })
  }