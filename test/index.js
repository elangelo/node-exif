﻿var exif = require('..').ExifImage;

new exif( {image: './test/testfile/sanyo-vpcg250.jpg'}, function (error, image) {
    if (error) 
    { 
        console.error('error occurred: ' + error);
    }
    else 
    {
        if (image)
        {
            console.log();
            console.log('*** image info of sanyo-vpcg250.jpg ***');

            console.log('---=== ifd0 ===---');
            console.log(image.image);

            console.log('---=== ifd1 ===---');
            console.log(image.thumbnailinfo);

            console.log('---=== exif ifd ===---');
            console.log(image.exif);

            console.log('---=== gps ifd ===---');
            console.log(image.gps);

            console.log('---=== interoperability ===---');
            console.log(image.interoperability);
           
            console.log('---=== makernotes ===---');
            console.log(image.makernote);

            console.log('---=== thumbnail ===---');
            console.log(image.thumbnail);
        }
    }
});

new exif( {image: './test/testfile/fujifilm-finepix40i.jpg'}, function (error, image) {
    if (error) 
    { 
        console.error('error occurred: ' + error);
    }
    else 
    {
        if (image)
        {
            console.log();
            console.log('*** image info of fujifilm-finepix20i.jpg ***');

            console.log('---=== ifd0 ===---');
            console.log(image.image);

            console.log('---=== ifd1 ===---');
            console.log(image.thumbnailinfo);

            console.log('---=== exif ifd ===---');
            console.log(image.exif);

            console.log('---=== gps ifd ===---');
            console.log(image.gps);

            console.log('---=== interoperability ===---');
            console.log(image.interoperability);
           
            console.log('---=== makernotes ===---');
            console.log(image.makernote);

            console.log('---=== thumbnail ===---');
            console.log(image.thumbnail);
        }
    }
});
