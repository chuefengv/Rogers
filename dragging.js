
// var dragItem = document.querySelector("#character");

// var active = false;
// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var xOffset = 0;
// var yOffset = 0;


// document.body.addEventListener("touchstart", dragStart, false);
// document.body.addEventListener("touchend", dragEnd, false);
// document.body.addEventListener("touchmove", drag, false);

// document.body.addEventListener("mousedown", dragStart, false);
// document.body.addEventListener("mouseup", dragEnd, false);
// document.body.addEventListener("mousemove", drag, false);

// function dragStart(e) {
//     if (e.type === "touchstart") {
//     initialX = e.touches[0].clientX - xOffset;
//     initialY = e.touches[0].clientY - yOffset;
//     } else {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//     }

//     if (e.target === dragItem) {
//     active = true;
//     }
// }

// function dragEnd(e) {
//     initialX = currentX;
//     initialY = currentY;

//     console.log("currentY: "+currentY);
//     dragItem.style.bottom=Math.abs(currentY)+'px';
//     console.log(window.getComputedStyle(dragItem).bottom);

//     active = false;

// }

// function drag(e) {
//     if (active) {
    
//     e.preventDefault();
    
//     if (e.type === "touchmove") {
//         currentX = e.touches[0].clientX - initialX;
//         currentY = e.touches[0].clientY - initialY;
//     } else {
//         currentX = e.clientX - initialX;
//         currentY = e.clientY - initialY;
//     }

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, dragItem);
//     }
// }

// function setTranslate(xPos, yPos, el) {
//     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }