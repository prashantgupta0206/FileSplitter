const fs = require('fs'); 

let newArr; 
let readData = [];
let splitCount = 200000;

fs.readFile('input.txt', function(err, data) {
    if (err) {
        throw err; 
    }else {
         newArr = data.toString().split('\n'); 
         var count = 1; 
        for (let i = 0; i <= newArr.length-1; i++ ) {
            readData.push(newArr[i]); 
            if (readData.length == splitCount || newArr.length-1 == i) {
                writeData(readData, count); 
                readData = [];
                count++;
            }
            
        }
    }
})

function writeData(readData, count) {
    let file = fs.createWriteStream('output_'+count+'.txt'); 
    for (let j = 0; j <= readData.length-1; j++ ) {
           file.write(readData[j] + '\n'); 
    }
    file.end(); 
}



    

