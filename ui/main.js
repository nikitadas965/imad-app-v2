//counter code

var button=document.getElementById('counter');
var counter=0;

button.onClick= function()
 {
     
 
// make request to the counter variable

//capture the response and store in a  variable 


// render the variable in the correct span

counter= counter+1;
var span= document.getElementById('count'); //selecting the span
span.innerHTML= counter.toString();


     
     
     
 };