const fs = require('fs');
const path = require('path')
function treeFn(dirpath)
{   
    // console.log("im inside treefn")
    if(dirpath == undefined)
    {
        // console.log('Please Enter a Valid Path ')
        treeHelper(process.cwd(), ' ')
        return ;
    }
    else
    { 
        let doesExist = fs.existsSync(dirpath)
        if(doesExist == true)
        {
            treeHelper(dirpath, ' ') 
        }
    }
}


function treeHelper(targetPath , indent)
{ 
    // console.log("im inside treehelpre")

    let isFile = fs.lstatSync(targetPath).isFile();
    // console.log(isFile)


    if(isFile == true)
    {
        let filename = path.basename(targetPath)
        // console.log(filename)
        console.log(indent + " ├── " + filename)

    }
    else
    { 
        let dirname = path.basename(targetPath)
        console.log(indent + " └── " + dirname)
        let children = fs.readdirSync(targetPath)
        // console.log(children)
        let i = 0;
        while(i <children.length )
        {
            let ans = path.join(targetPath , children[i]);
            treeHelper(ans , indent + '\t');
            i++;

        }
    }

}
module.exports= {
    treemodule : treeFn
}