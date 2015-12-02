var express  = require('express'); 

var app = express();
app.set('view engine', 'jade'); // templating software

app.use(express.static(process.cwd() + '/public')); //middle ware like a stylesheet
var data =[
  {foo :'bar'},
  {biz :'buz'}
];

var products =[
  {id :1, name :'ipad'},
  {id :2, name :'TV' },
  {id :3, name : 'pool table'}
];

//define endpoints
//request and response
app.get('/', function(req, res){
  //res.send('Hello, World');
  //res.send(data);
  // res.send('<h1> hello </h1>');
  res.render('index');
});

app.get('/products/:id', function(req, res){
  var id = Number(req.params.id);

  var product = products.filter(function(prod){
    return prod.id === id
  })[0];

  if(product){
    res.render('product', product);
  } else {
    //res.status(404).send('page not found');
    res.status(404).render('404');
  }

});
app.listen(8025);
console.log('app is running');