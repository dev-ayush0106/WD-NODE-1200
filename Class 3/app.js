// async & await

// await can handle the promises but await is only used when their is use of async

// const fs = require("fs").promises // then & catch , await

// async function fileHandling() {
//     try {
//         let data1 = await fs.readFile("file1.txt", "utf-8")
//         let data2 = await fs.readFile("file2.txt", "utf-8")
//         fs.writeFile("combine.txt", data1 + data2)
//         console.log("Combined File Created")
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// fileHandling()

// custom modules
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

module.exports={add,sub}