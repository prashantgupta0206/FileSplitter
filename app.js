const fs = require('fs'); 
var express = require("express");
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

var app = express();
//app.use(express.bodyParser());
app.use(fileUpload());

let newArr; 
let readData = [];
let splitCount = 200000;

app.use(express.bodyParser({uploadDir:'./uploads'}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post('/myForm', readeInput);
app.listen(3000);
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

function readeInput(req, res){
    console.log(req.files.filename.path);
    // fs.readFile('input.txt', function(err, data) {
    //     if (err) {
    //         throw err; 
    //     }else {
    //          newArr = data.toString().split('\n'); 
    //          var count = 1; 
    //         for (let i = 0; i <= newArr.length-1; i++ ) {
    //             readData.push(newArr[i]); 
    //             if (readData.length == splitCount || newArr.length-1 == i) {
    //                 writeData(readData, count); 
    //                 readData = [];
    //                 count++;
    //             }
                
    //         }
    //     }
    // })
}


function writeData(readData, count) {
    let file = fs.createWriteStream('output_'+count+'.txt'); 
    for (let j = 0; j <= readData.length-1; j++ ) {
           file.write(readData[j] + '\n'); 
    }
    file.end(); 
}



    

