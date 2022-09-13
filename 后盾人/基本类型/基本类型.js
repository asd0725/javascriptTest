//模版字面量
// 使用 ` ...` 符号包裹的字符串中可以写入引入变量与表达式
let hd = 'houdunren.com'
// console.log(`后盾人网址是：${hd}`);

// 支持换行操作不会产生错误
// console.log(`后盾人网址是：${hd}
// 欢迎访问
// `)

// 使用表达式
function show(title){
    return 'houdunren'
}
// console.log(`${show()}`);

// 移除空白
//使用trim移除字符串空白
let str = '   houdunren.com  ';
// console.log(str.length);
// console.log(str.trim().length);
//使用trimLeft删除左边空白，使用trimRight删除右边空白


//根据索引获取单个字符
// console.log(hd[3]);
//根据从 0 开始的位置获取字符
// console.log(hd.charAt(3));


//合并数组
//使用展开语法合并数组
let arr1 = [1,2,3];
let arr2 = ['a','b',...arr1]
// console.log(arr2);

//函数参数
//使用展开语法可以替代arguments接受任意数量的参数
function fun1(...args){
    console.log(args[0]);
}

// fun1('a','b',1,2,3)

//解构赋值
// let [a,b] = [1,2];
// console.log(b);

//使用展开语法和解构赋值
let [m,...n] = ['a','b',1,2];
// console.log(m);
// console.log(n);

//test
let arr3 = [1,2,3,4,5];
let arr4 = [...arr3]
// console.log(arr4);


//数组元素位置调整函数
function move(array, before, to) {
    if (before < 0 || to >= array.length) {
      console.error("指定位置错误");
      return;
    }
    const newArray = [...array];
    const elem = newArray.splice(before, 1);
    newArray.splice(to, 0, ...elem);
    return newArray;
  }
  const array = [1, 2, 3, 4];
  console.table(move(array, 0, 3));