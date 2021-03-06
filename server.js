var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
 'article-one': {
    
    title:'article one|nikita das',
    date:'march 14',
    heading:'article',
    content:` <p>
            qwerty
        </p>
        <p>
            qwerty  qwerty
        </p> `

},
 'article-two': {
    title:'article two|nikita das',
    date:'march 15',
    heading:'article',
    content:` <p>
            qwerty
        </p>
        <p>
            qwerty  qwerty
        </p> `}
};
function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    

var htmlTemplate = `
<html>

<head>
    <title>
        ${title}
    
    </title>
    <meta name="viewport" content="width-device-width, inital scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    
</head>
<body>
    <div class="container">
        
    
    <div>
    <a href="/">home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div> 
    ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
    
</body>
</html>


    
    
`;
return htmlTemplate;


}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
// we can only send string as a response
var counter = 0;
app.get('/counter' , function (req, res) {
    counter= counter + 1;
    res.send(counter.toString());
});
var names = [];
app.get('/submit-name/:name', function (req, res) {
    
    //get the name from the request
     var name = req.query.name;
      names.push(name);
     //json  
      res.send(JSON.stringify(names));
      
});

  
  app.get('/:articleNames' , function (req,res) {
      //articleName==article one
      //articles[articleNames]== content object for article one
      var articleNames = req.params.articlenames;
      //to extract the values
      res.send(createTemplate(articles[articleNames]));
  });
  

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
