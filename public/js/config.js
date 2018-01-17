var fs = require('fs');
var images = [];
gallery = {};
function readImages(callback){
    fs.readdir("./public/images/gallery/", function(err, items) {
        images = items;
        callback();
    });
}
function someCallback(){
    gallery = {img: images};
    console.log(gallery.img);
    console.log("Done!");
}

readImages(someCallback);
// console.log("after");