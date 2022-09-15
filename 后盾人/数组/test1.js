//includes
let arr1 = [1,2,3,4,5]
// console.log(arr1.includes(2))

//实现一个includes函数
function include(arr,item){
    for (const value of arr) {
        if(value == item) return true;
        return false
    }
}
// console.log(include([2,3,4,5],2));


//indexOf
let arr2 = [1,2,3,4,5]
// console.log(arr2.indexOf(3));
//该方法会返回数组的下标，第一个参数必传，是要查找的值，第二个参数可选，是要开始查找的位置


//find
//MDN find使用方法
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
let arr3 = ['jack','tom','jerry'];
let fins = arr3.find(function(item){
    return item == 'tom'
})
