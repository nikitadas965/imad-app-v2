var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    
    title:'article one|nikita das',
    date:'march 14',
    heading:'article',
    content:` <p>
            qwerty
        </p>
        <p>
            qwerty  qwerty
        </p> `
};
function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    

var htmlTemp = `
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
  
  app.get('/article-one.html' , function (req,res) {
      res.send(createTemplate(ArticleOne));
  });
      
  app.get('/article-two.html' , function (req,res) {
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
      
  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
