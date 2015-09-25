//1编写一个简单的程序，使其能接收一个或者多个命令行参数，并且在终端（标准输出 stdout）中打印出这些参数的总和。
/*var result = 0;
console.log(process.argv)
process.argv.forEach(function(el,index){
    console.log(el);
    console.log(index)
    if (index>1) {
        result += +el;
    }
});
console.log(result);*/

/*2编写一个程序，执行一个同步的文件系统操作，读取一个文件，并且在终端（标准输出 std
out）打印出这个文件中的内容的行数。类似于执行 cat file | wc -l 这个命令。
所要读取的文件的完整路径会在命令行第一个参数提供。*/
/*var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
var str = data.toString();
var array = str.split('\n');
console.log(process.argv)
process.argv.forEach(function(el,index){
    console.log(el)
})
console.log(array.length-1);*/


/*3编写一个程序，执行一个异步的对文件系统的操作：读取一个文件，并且在终端（标准输出
stdout）打印出这个文件中的内容的行数。类似于执行 cat file | wc -l 这个命令。
所要读取的文件的完整路径会在命令行第一个参数提供。*/
/*var fs = require('fs');
var data = fs.readFile(process.argv[2],function(err,data){
    if(err){
        throw console.error(err);
    }
    var list = data.toString().split('\n');
    console.log(list.length-1);
});*/

/*4编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这个列表
。这次会有两个参数提供给你，第一个是所给的文件目录路径（如：path/to/dir），第二
个参数则是需要过滤出来的文件的扩展名。
举个例子：如果第二个参数是 txt，那么你需要过滤出那些扩展名为 .txt的文件。
注意，第二个参数将不会带有开头的 .。
你需要在终端中打印出这个被过滤出来的列表，每一行一个文件。另外，你必须使用异步的
I/O 操作。*/
/*
var fs = require('fs');
var path = process.argv[2];
var extname = process.argv[3];

fs.readdir(path,function(err,list){
    if(err){
        throw err;
    }else{
        list.forEach(function(file){
            if(file.split('.')[1] === extname){
                console.log(file);
            }
        });
    }
});*/

/*5MAKE IT MODULAR(模块化问题和上题一样以特定扩展名过滤目录文件中的文件)这个问题和前面一个一样，但是这次会介绍模块的概念。你将需要创建两个文件来解决这个
问题。
编写一个程序来打印出所给文件目录的所含文件的列表，并且以特定的文件名后缀来过滤这
个列表。这次将会提供两个参数，第一个参数是要列举的目录，第二个参数是要过滤的文件
扩展名。你需要在终端中打印出过滤出来的文件列表（一个文件一行）。此外，你必须使用
异步 I/O。
你得编写一个模块 文件去做大部分的事情。这个模块必须导出（export）一个函数，这个
函数将接收三个参数：目录名、文件扩展名、回调函数，并按此顺序传递。文件扩展名必须
和传递给你的程序的扩展名字符串一模一样。也就是说，请不要把它转成正则表达式或者加
上 “.” 前缀或者做其他的处理，而是直接传到你的模块中去，在模块中，你可以做一些处
理来使你的过滤器能正常工作。
这个回调函数必须以 Node 编程中惯用的约定形式（err, data）去调用。这个约定指明了
，除非发生了错误，否则所传进去给回调函数的第一个参数将会是 null，第二个参数才会
是你的数据。在本题中，这个数据将会是你过滤出来的文件列表，并且是以数组的形式。如
果你接收到了一个错误，如：来自 fs.readdir() 的错误，则必须将这个错误作为第一个，
也是唯一的参数传递给回调函数，并执行回调函数。
你绝对不能直接在你的模块文件中把结果打印到终端中，你只能在你的原始程序文件中编写
打印结果的代码。
当你的程序接收到一些错误的时候，请简单的捕获它们，并且在终端中打印出相关的信息
这里有四则规定，你的模块必须遵守：
导出一个函数，这个函数能准确接收上述的参数。
当有错误发生，或者有数据的时候，准确调用回调函数。
不要改变其他的任何东西，比如全局变量或者 stdout。
处理所有可能发生的错误，并把它们传递给回调函数。
遵循一些约定的好处是，你的模块可以被任何其他也遵守这些约定的人所使用。因此，这里
你新建的模块可以被其他 learnyounode 的学习者使用，或者拿去验证，都会工作得很好。*/
/*var mymodule = require('./program-require');
var path = process.argv[2];
var extname = process.argv[3];

mymodule(path,extname,function(err,files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});*/

/*6编写一个程序来发起一个 HTTP GET 请求，所请求的 URL 为命令行参数的第一个。然后将 每一个 “data” 事件所得的数据，以字符串形式在终端（标准输出 stdout）的新的一行打印出来。*/
/*var http = require('http');
http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on("data",function(data){
        console.log(data);
    });
    response.on("error",function(err){
        throw err;
    });
    response.on("end",function(){
        // console.log(date);
    });
});*/

/*7编写一个程序，发起一个 HTTP GET 请求，请求的 URL 为所提供给你的命令行参数的第一
个。收集所有服务器所返回的数据（不仅仅包括 “data” 事件）然后在终端（标准输出 std
out）用两行打印出来。
你所打印的内容，第一行应该是一个整数，用来表示你所收到的字符串内容长度，第二行则
是服务器返回给你的完整的字符串结果。*/
/*
var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
    var list = [];
    // response.setEncoding('utf8');
    response.on("data",function(data){
        list.push(data.toString());
    });
    response.on("error",function(err){
        throw err;
    });
    response.on("end",function(){
        var str = '';
        list.forEach(function(s){
            str += s;
        });
        console.log(str.length);
        console.log(str);
    });
});*/


/*
8这次的问题和之前的问题（HTTP 收集器）很像，也是需要使用到 http.get() 方法。然而
，这一次，将有三个 URL 作为前三个命令行参数提供给你。
你需要收集每一个 URL 所返回的完整内容，然后将它们在终端（标准输出 stdout）打印出
来。这次你不需要打印出这些内容的长度，仅仅是内容本身即可（字符串形式）；每个 URL
对应的内容为一行。重点是你必须按照这些 URL 在参数列表中的顺序将相应的内容排列打
印出来才算完成。*/
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)