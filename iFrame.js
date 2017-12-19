function submitMessage(){
/*For key or mouse events, the event.key read-only property returns the value of a key or keys pressed by the user. If the pressed key has a printed representation, the returned value is a non-empty Unicode character string containing the printable representation of the key.
In this instance, we want to listen for a user clicking left on his/her mouse or pressing
*/
    if (event.key===13 || event.key===1){//accepts enter key (charCode 13) or left-clicking the submit button (charCode 1)

      if (document.getElementById("inputText").length){
          //using .length to ensure that the message field isn't blank by checking to see if the length is greater than 0. If it's empty, length is 0, meaning it is falsy and the following code will not execute
       let message = `[${window.name}] - ${document.getElementById("inputText").value} <br>`// formats text message as [name] - text
        document.getElementById("inputText").value = ""// resets text field 
        parent.postMessage(message, "*")
        // postMessage takes two arguments, a "message" representing a string or object sent to the receiving window, and the targetOrigin, in this case * or "all" since we can accomplish the goal of this project by broadcasting the message to any listeners in lieue of a specific URL. Specifying "*" will match any URL but this is typically discouraged for security reasons
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
      }
    }
  }
  
  window.addEventListener('message', postMessage)// adds event listener for user message 
  
  function postMessage(){
    let element = document.getElementById("chatField")
    element.innerHTML = element.innerHTML + event.data 
    //adds new text to field. The event has a property called data that can be used to access the string or object that was sent by postMessage(). The data property is set to the value of the first argument provided to window.postMessage(), or in this case parent.postMessage() in line 11
    element.scrollTop = element.scrollTop + element.scrollHeight 
    /*The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically. In this case, it is set to scrollTop + scrollHeight.
    
    The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar. It includes the element's padding, but not its border or margin.
    */
  }
  