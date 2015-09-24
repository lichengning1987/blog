var result = 0;
console.log(process.argv)
process.argv.forEach(function(el,index){
    console.log(el);
    console.log(index)
    if (index>1) {
        result += +el;
    }
});
console.log(result);
