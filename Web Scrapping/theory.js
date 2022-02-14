// // callbacks in javascrpit -> any function function passed to another function knwon as callbacks
// // ayncs behaviour

// // Normal function calling

// function add(a,b)
// {
//     // console.log(a +b);
//     let sum = a+ b;
//     return sum;
// }
// // add(3,2);

// // callbacks executes a sync behaviour

// // function fname(fname , cb)
// // {
// //     console.log(fname)
// //     cb(4,5);
// // }
// // fname('saurabh' , add);





// function sub(a,b)
// {
//     let x = a- b;
//     return x ;
//     // console.log(a-b);
// }
// function madeforcb( fname ,  cb , cb1) //  made first
// {
//     // console.log(fname);
//     let ans1 =cb(3,2);
//     let ans2 = cb1(3,2);
//     console.log(fname + ans1 +" " + ans2);
    
// }
// madeforcb('This is My subtraction ' , sub , add);

// // for making callbacks function first we have to make callback fun then its functionalities


