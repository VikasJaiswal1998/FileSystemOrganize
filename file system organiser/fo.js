// terminal se input lene ke liye array mei input lete hai process.argv mein
const fs = require('fs')
const path = require('path')
let input = process.argv.slice(2) // 1 index par value dega 
let command = input[0]
// console.log(input)
// let ans = input[0] - '0' ; ->gives ascii value;
// console.log(command);



switch(command){
    case 'tree' :
        console.log('tree implemented')
        break;
    case 'organise':
        // console.log('organise implemeted')
        organisefn(input[1])
        break;
    case 'help' :
        // console.log('hey!!');
        helpfn();
        break;
    default:
        console.log('please enter a valid command');
        break;
}
function helpfn(){
    console.log(`list of all commands ->
                        1- tree - node fo.js tree <dirpath >
                        2- organise - node fo.js organise <dirpath >
                        3- help - node fo.js help`
    )
}

// we cann't get inside folder directory first we check for the inside path is  exist or not ;

function organisefn(dirpath){
    let destpath
    if(dirpath==undefined){ // if doesn't pass any path 
       console.log('please enter a valid directory path') ;
       return;
    }
   let check = fs.existsSync(dirpath)  
    if(check== true){
        destpath = path.join(dirpath, 'organize_files') // make a folder inside a extension folder .. ->organize_files . 
        let descheck = fs.existsSync(destpath); // if this file ia alreduy exist .
        if(descheck == true) // already  exist ;
        {
            console.log("this file is already exist")
        }
        else{
            fs.mkdirSync(destpath); // make directory of that file if doesn't exist ..
        }
    }
  else{
    console.log("Please enter a valid path which is exist in your computer");
  }
}