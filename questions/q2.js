// given an array arr = [audio,video,image,software,documents,applications,other]
// make folder for each element in the given array and inside each folder make 4 files of that type 
 
let path = require("path");
let fs = require("fs");

let arr = ['audio','video','image','software','documents','applications','other']
let nameArr = ['abc','efg','xyz','def'];
let extArr = ['.mp3','.mp4','.png','.exe','.pdf','.apk','.rar'];

let organisePath = path.join(__dirname,"organised")
if(!fs.existsSync(organisePath)){
fs.mkdirSync(organisePath);
}
for(let i=0;i<arr.length;i++){
     let folderKaPath = path.join(organisePath,arr[i]);
     if(!fs.existsSync(folderKaPath)){
        fs.mkdirSync(folderKaPath);
     }
     for(let j=0;j<nmaeArr.length;j++){
        let fileName =nameArr[j]+extArr[i];
        let fileKaPath = path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath," ")
     }
}