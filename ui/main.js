//counter code

var button = document.getElementById('counter');

button.onclick= function()
 {
     
 
// create request object
 var request = new XMLHttpRequest();
 
//capture the response and store in a  variable 
request.onreadystatechange = function () {
     if(request.readystate === XMLHttpRequest.DONE)  {
       //take some action
        if(request.status === 200) {
           var counter = request.responseText;
           var span = document.getElementById('count'); //selecting the span
            span.innerHTML= counter.toString();
       }
    }
    
    // not sure yet
    
};

 // make the request
   request.open('GET', 'http://nikitadas965.imad.hasura-app.io/counter' , true);
   request.send(null);
     
     
 };