const cardElement = document.querySelectorAll('.panel');
cardElement.forEach(item=>{
    item.addEventListener('click',()=>{
        [].filter.call(item.parentElement.children,el=>el!==item).forEach(el=>el.classList.remove('active'));
        item.classList.add('active')
    })
})


// const panelItems = document.querySelectorAll(".panel");
// panelItems.forEach(item => {
//     item.addEventListener('click',() => {
//         [].filter.call(item.parentElement.children,el => el !== item).forEach(el => el.classList.remove('active'));
//         //call将当前this指向列表，filter筛选出返回结果为true的元素
//         item.classList.add('active')
//     });
// });






