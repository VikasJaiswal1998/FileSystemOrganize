const fs = require('fs')
const path = require('path')
const types = require('../command/type')


function organisefn(dirpath) {
    let destpath
    if (dirpath == undefined) { // if doesn't pass any path 
        destpath = process.cwd();
        console.log('please enter a valid directory path');
        return;
    } //ye wala if yahi khatamn ho jaa rha

    let check = fs.existsSync(dirpath)
    if (check == true) {
        destpath = path.join(dirpath, 'organize_files') // make a folder inside a extension folder .. ->organize_files . 
        let descheck = fs.existsSync(destpath); // if this file ia alreduy exist .
        if (descheck == true) // already  exist ;
        {
            console.log("this file is already exist")
        }
        else {
            fs.mkdirSync(destpath); // make directory of that file if doesn't exist ..
        }
    }
    else {
        console.log("Please enter a valid path which is exist in your computer"); // checks corectness
    }
    organiserHelper(dirpath, destpath)


}


function organiserHelper(src, dest) {
    let childname = fs.readdirSync(src) // read the file inside directory - > src dirctory that is extension
    //  console.log(childname)

    for (let i = 0; i < childname.length; i++) {
        let childAddress = path.join(src, childname[i])
        // console.log(childAddress)    it prints the src file with their extension
        let filename = fs.lstatSync(childAddress).isFile(); // returns treu or false

        if (filename == true) {
            //   console.log(childAddress + ' -->' + filename)  

            let filecategory = getCategory(childname[i]) // we check for paticluar extension
            console.log(childname[i] + '->  '+ filecategory);
            sendfiles(childAddress , dest , filecategory)
        }
        
    }

}

function getCategory(filename) {
 
    let ext = path.extname(filename).slice(1)
    // console.log(ext)
    let array = types.extension ;
    for( let x in  array)
    {
        let newarray = array[x];
        for(let  i =0 ; i< newarray.length ; i++)
        {
            if(newarray[i] ==  ext)
            {
                return x;
            }
        }
    }
    return 'others';

}


// for sending files
function sendfiles(srcFilePath,dest,filecategory)
{

    let catpath = path.join(dest , filecategory)
    {
        if(fs.existsSync(catpath)==false)
        {
            fs.mkdirSync(catpath)
        }
        let filename = path.basename(srcFilePath)
        let destFilePath = path.join(catpath , filename)

        fs.copyFileSync(srcFilePath , destFilePath)
        fs.unlinkSync(srcFilePath)

        console.log('Files Organized')

    }
}


module.exports = {
    organisemodule : organisefn
}