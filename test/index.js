var exif = require('..').ExifImage;

new exif( {image: './testfile/sanyo-vpcg250.jpg'}, function (error, image) {
    if (error) { 
        console.error('error occurred:' + error);
        }
    else {
        console.log('no errors: ' + image);
        }
    });
