let mouseXstart = 0;
let mouseXend = window.innerWidth;
let mouseCurrent =0;





const mousemove = (e)=> {
//    console.log(`x is 
//     +${e.clientX}`)
    mouseCurrent = e.clientX;
    fraction = mouseCurrent / mouseXend;
    console.log(fraction);
    console.log(mouseXend);
    console.log(mouseCurrent);


    }
document.addEventListener('mousemove', mousemove)