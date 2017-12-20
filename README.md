#iFrame Communication App
+ In general, this is a simple chat client using JavaScript and inter-iframe communication. 

+ There is no server code on this project

+ When a user opens the index.html file, he or she is prompted to enter a userName

+ In the top-right corner, the user will see a "+" button. Every click on the "+" button adds an iframe to the page

+ This iframe is a chat client with the other iframes. Every iframe has a field in which the user can write text  and press "Post Message" to post. This post in shown on all iframes 

+ All iframes communicate with the parent frame using postMessage(). The Parent frame broadcasts the message to the child iframes

+ All iframes are draggable across the window

#BONUS
+ In the underArmourScript folder is a .js file with a simple script to be entered into the browser console that will hide all items greater than $100 in price from the underArmour website
