//getting input from command line;

const fs=require('fs');

const input=process.argv //process gives many functions and argv is argument vector.

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid command");
}