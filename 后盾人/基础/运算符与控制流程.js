let hd = [
    { title: "第一章 走进JAVASCRIPT黑洞", lesson: 3 },
    { title: "ubuntu19.10 配置好用的编程工作站", lesson: 5 },
    { title: "媒体查询响应式布局", lesson: 8 }
  ]

  //forin主要用了遍历对象
  for (const key in hd) {
    // console.log(hd[key].title);
    // console.log(hd[key].lesson);
  }

  let info = {
    name: "后盾人",
    url: "houdunren.com"
  };
  for (const key in info) {
    if(info.hasOwnProperty(key)){
        // console.log(info[key]);
    }
  }

  //使用forin遍历window属性
//   for (const name in window) {
    // console.log(window[name]);
//   }

const hd2 = ["hdcms", "houdunren"];

for (const [key, value] of hd2.entries()) {
  console.log(key, value); //这样就可以遍历了
}