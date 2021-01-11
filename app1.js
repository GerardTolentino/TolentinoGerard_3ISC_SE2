const fs= require('fs');

fs.readFile('info.txt', (err,files)=>{
    if(!err){
        console.log(files.toString());
    }else{
        console.log("directory does not exist");
    }
});
