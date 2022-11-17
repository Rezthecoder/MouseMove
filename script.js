let mouseXstart = 300;
let mouseXend = window.innerWidth;
let mouseCurrent =0;
let range = mouseXend - mouseXstart;






const mousemove = (e)=> {
//    console.log(`x is 
//     +${e.clientX}`)
    mouseCurrent = e.clientX -300;
    fraction = mouseCurrent / range;
    console.log(fraction);
    console.log(mouseXend);
    console.log(mouseCurrent);


    }
document.addEventListener('mousemove', mousemove)