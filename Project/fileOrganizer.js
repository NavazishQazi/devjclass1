let fs = require("fs");
let path = require("path");
const { pathToFileURL } = require("url");

let folderPath = process.argv[2];

// console.log(folderPath); 

let folderExists = fs.existsSync(folderPath);

let extensions ={
    Audio :[".mp3"],
    Video :[".mp4",".mkv"],
    Document :[".doc",".xlsx",".txt",".pdf"],
    Image :[".jpeg",".jpg",".png",".gif"],
    Software :[".exe"]
}

if(folderExists){
    // console.log("path is valid!!")
    let files = fs.readdirSync(folderPath);
    for(let i =0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameofFolder = givenFolderName(ext);
        // console.log('Ext--',ext,"Folder--",nameofFolder); 
        let pathofFolder = path.join(folderPath,nameofFolder)
        let exist = fs.existsSync(pathofFolder);
        if(exist){
            moveFile(folderPath,pathofFolder,files[i]);
        }else{
            fs.mkdirSync(pathofFolder);
            moveFile(folderPath,pathofFolder,files[i]);
        }
    }
  
}
else{
    console.log("Please Enter a valid Path !!!!!!");
}


function givenFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] ==ext){
                return key;
            }
        }
    }
    return 'others'
}

function moveFile(folderPath,pathofFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathofFolder,fileName);
    fs.renameSync(sourcePath,destinationPath);
}