
$.get('/profit/show',function(data){
    console.log(data)
    // let obj=JSON.parse(data)
    let str=''
    data.forEach(item => {
        str+=` <img src="${item.proImg}" alt="">`
    });
    $('#box1').append(str)

})