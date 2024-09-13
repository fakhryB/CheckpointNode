const fs = require("fs")

fs.writeFileSync('welcome.txt','Hello Node', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('file "welcome.txt" created successfully')
})

fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('le contenu du fichier est',data)
    }
})