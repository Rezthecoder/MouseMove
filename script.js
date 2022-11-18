//mouse X position
let mouseXstart = 300;
let mouseXend = window.innerWidth -300;
let mouseCurrentX =0;
let rangeX = mouseXend - mouseXstart;
let fractionXvalue = 0;

//mouse Y position
let mouseYstart = 300;
let mouseYend = window.innerHeight;
let mouseCurrentY =0;
let rangeY = mouseXend - mouseXstart;
let fractionYvalue = 0;




const mousemove = (e)=> {
//    console.log(`x is 
//     +${e.clientX}`)
    mouseCurrentX = e.clientX-  mouseXstart;
    fraction = mouseCurrentX / rangeX;
    console.log(fraction);
    //  


    }
document.addEventListener('mousemove', mousemove)