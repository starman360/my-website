/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()

require("./public/js/config.js");
var galleryJSON = require("./public/js/gallery.json").images;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/public/views') 
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.get('/gallery', function (req, res) {
  items = gallery.img;
  res.render('gallery',
  { title : 'Gallery',
   imgList : items}
  );
})

app.get('/gallery/:imageID', function(req, res){
  var imageID = req.params.imageID;
  items = gallery.img;
  res.render('fullscreen',
  { title: 'Gallery',
    imageID : imageID,
    imgList : items,
    imageContent: galleryJSON}
  );
})

app.listen(80)

