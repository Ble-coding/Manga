document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');
    let cursorBefore = document.querySelector('.custom-cursor-before');

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.pageX + 'px';  // Inversé e.clientY et e.pageX
        cursor.style.top = e.clientY + 'px';  // Inversé e.clientY et e.pageX
        cursorBefore.style.left = e.pageX + 'px';
        cursorBefore.style.top = e.clientY + 'px';
    });
});

// const mouse = document.querySelector(`#mouse`);
// window.addEventListener(`mousemove`, (e) => {
//   mouse.style.top = e.pageY + `px`;
//   mouse.style.left = e.pageX + `px`;
// });



// document.addEventListener('DOMContentLoaded', function(){
//     let cursor = document.querySelector('.custom-cursor')
//     let cursorBefore = document.querySelector('.custom-cursor-before')

//     document.addEventListener('mousemove', function(e){
//         cursor.style.left = e.clientY + `px`;
//         cursor.style.top = e.pageX + `px`;
//         cursorBefore.style.left = e.clientY + `px`;
//         cursorBefore.style.top = e.pageX + `px`;
//     })
// })