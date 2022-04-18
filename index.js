console.log("hey eee");

let arr=[2,3,4,5];
console.log(arr);

// how to export and import from other file.
// import {x} from './oth'; this type of import is only possible in JS not in NODE;

let other=require('./oth'); //used in node
console.log(other);
console.log(other.z());

// filter function;
//it just filter out the element from the array according to our condition returns an new array;
 let arr1=[2,4,7,2,5,68,9,8,0,34,3];

 arr1.filter((it)=>{
     console.log(it)
 })
 let res=arr1.filter((it)=>{
   return it==2;
 });
 console.log(res);

 // module in node; in layman terms its the by default function of programming lang;
 //Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders.
//there are core modules,global moduleand non global module.
//global modules are those which we don't need to import;(like console.log etc);
//modules which we need to be import are non global;
//fs,buffer,HTTP all these are modules;

const fs=require('fs');
const { dirname } = require('path');
const { Http2ServerRequest } = require('http2');
fs.writeFileSync("hello.txt","hey this is non global type module is created"); //aotomatically a text file is created (whis is module);
console.log("in which directory we are =>",__dirname); // __dirname gives the directory name;

// //creating server;

const http=require('http');   //http module handle request and response data from server end;
http.createServer((req,resp)=>{
   resp.write("<h1>hola this is server created</h1>");
   resp.end();
}).listen(4500);

//what is package.json file in node.js; it keeps the detail related to coding part;
//just type:' npm init ' in terminal;
let color=require('colors');
console.log("hellow".red);

import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.bold('Hello world!'));