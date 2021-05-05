//bowl color changers
$('choosethebowlyoulike.html #yellowbowl').click(function(){
  $('makethepancakesmix.html .bowl').attr('id', 'yellowbowl')
})
$('choosethebowlyoulike.html #pinkbowl').click(function(){
  $('makethepancakesmix.html .bowl').attr('id', 'pinkbowl')
})
$('choosethebowlyoulike.html #greenbowl').click(function(){
  $('makethepancakesmix.html .bowl').attr('id', 'greenbowl')
})
$('choosethebowlyoulike.html #bluebowl').click(function(){
  $('makethepancakesmix.html .bowl').attr('id', 'bluebowl')
})

//draggable measuring cup code: 
dragElement(document.getElementById("cup"))

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0
        if (document.getElementById(elmnt.id)) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id).onmousedown = dragMouseDown
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
          e = e || window.event
          e.preventDefault()
          // get the mouse cursor position at startup:
          pos3 = e.clientX
          pos4 = e.clientY
          document.onmouseup = closeDragElement
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {
          e = e || window.event
          e.preventDefault()
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX
          pos2 = pos4 - e.clientY
          pos3 = e.clientX
          pos4 = e.clientY
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px"
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null
          document.onmousemove = null
        }
      }
// fill measuring cup with ingredients 
$('.flour').hover(function(){
  $('.measuringcup .cls-1').css('opacity', '1')
}) 
$('.milk').hover(function(){
  $('.measuringcup .cls-1').css('opacity', '1')
})
$('#cup').mouseleave(function(){
  $('.measuringcup .cls-1').css('opacity', '0')
})

//draggable table spoon code: 
dragElement(document.getElementById("tbs"))

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0
        if (document.getElementById(elmnt.id)) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id).onmousedown = dragMouseDown
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
          e = e || window.event
          e.preventDefault()
          // get the mouse cursor position at startup:
          pos3 = e.clientX
          pos4 = e.clientY
          document.onmouseup = closeDragElement
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {
          e = e || window.event
          e.preventDefault()
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX
          pos2 = pos4 - e.clientY
          pos3 = e.clientX
          pos4 = e.clientY
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px"
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null
          document.onmousemove = null
        }
      }
// fill table spoon with ingredients 
$('.sugar').hover(function(){
  $('.tablespoon .cls-3').css('opacity', '1', 'fill', 'white')
}) 
$('.butter').hover(function(){
  $('.tablespoon .cls-3').css('opacity', '1', 'fill', '#ffe971')
}) 
$('#tbs').mouseleave(function(){
  $('.tablespoon .cls-3').css('opacity', '1')
})

//draggable tea spoon code: 
dragElement(document.getElementById("teasp"))

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0
        if (document.getElementById(elmnt.id)) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id).onmousedown = dragMouseDown
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
          e = e || window.event
          e.preventDefault()
          // get the mouse cursor position at startup:
          pos3 = e.clientX
          pos4 = e.clientY
          document.onmouseup = closeDragElement
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {
          e = e || window.event
          e.preventDefault()
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX
          pos2 = pos4 - e.clientY
          pos3 = e.clientX
          pos4 = e.clientY
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px"
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null
          document.onmousemove = null
        }
      }
// fill measure spoon with flour 
$('.bakingsoda').hover(function(){
  $('.teaspoon .cls-3').css('opacity', '1')
}) 
$('#teasp').mouseleave(function(){
  $('.teaspoon .cls-3').css('opacity', '1')
})

// drop eggs
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//draggable whisk code: 
dragElement(document.getElementById("whisk"))

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0
        if (document.getElementById(elmnt.id)) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id).onmousedown = dragMouseDown
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
          e = e || window.event
          e.preventDefault()
          // get the mouse cursor position at startup:
          pos3 = e.clientX
          pos4 = e.clientY
          document.onmouseup = closeDragElement
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {
          e = e || window.event
          e.preventDefault()
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX
          pos2 = pos4 - e.clientY
          pos3 = e.clientX
          pos4 = e.clientY
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px"
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null
          document.onmousemove = null
        }
      }
// fill measure spoon with flour 
$('.bowl').hover(function(){
  $('.whisk .handllewhisk').css('rotate', '90deg')
}) 
$('.bowl').hover(function(){
  $('.bowl .pancakesmix .cls-3').css('opacity', '1')
})
$('#whisk').mouseleave(function(){
  $('.whisk .handllewhisk').css('rotate', '0deg')
})



