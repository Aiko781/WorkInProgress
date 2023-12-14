// "Key tab management."
const keyImgWindow = document.createElement("div");
const keyImgNavBar = document.createElement("div");
const keyImgText = document.createElement("div");
const keyImgClose = document.createElement("div");
const keyImgReduce = document.createElement("div");

const crossKey = document.createElement("img");
const reduceKey = document.createElement("img");
const keyImg = document.createElement("img");

// Open the window on icon click.
keyRecovered.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".key-window")) {
        keyImgWindow.remove();
    }
    // Open the window
    else {
        keyImgWindow.classList.add('key-window');
        keyImgWindow.setAttribute('id','key-window');
        document.querySelector(".blue-screen").appendChild(keyImgWindow);

        keyImgNavBar.classList.add('key-nav-bar');
        keyImgNavBar.setAttribute('id','key-window-header');
        document.querySelector(".key-window").appendChild(keyImgNavBar);

        keyImgText.classList.add('key-text');
        document.querySelector(".key-nav-bar").appendChild(keyImgText);
        keyImgText.textContent = "keytojoin.png";

        keyImgReduce.classList.add('key-reduce');
        document.querySelector(".key-nav-bar").appendChild(keyImgReduce);
        reduceKey.src = "images/reduce.png";
        document.querySelector(".key-reduce").appendChild(reduceKey);

        keyImgClose.classList.add('key-close');
        document.querySelector(".key-nav-bar").appendChild(keyImgClose);
        crossKey.src = "images/cross-close.png";
        document.querySelector(".key-close").appendChild(crossKey);

        keyImg.classList.add('key-img');
        keyImg.src = "images/learn-to-see.png";
        document.querySelector(".key-window").appendChild(keyImg);

        // Make the DIV element draggable:
        dragElement(document.getElementById("key-window"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                
        if (document.getElementById(elmnt.id + "-header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // Limit the drag within the boundaries of the 'blue-screen'
            var blueScreen = document.querySelector('.blue-screen');
            var minLeft = 0;
            var maxLeft = blueScreen.clientWidth - elmnt.clientWidth;
            var minTop = 0;
            var maxTop = blueScreen.clientHeight - elmnt.clientHeight;

            var newLeft = elmnt.offsetLeft - pos1;
            var newTop = elmnt.offsetTop - pos2;

            newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);
            newTop = Math.min(Math.max(newTop, minTop), maxTop);

            // Set the element's new position:
            elmnt.style.top = newTop + "px";
            elmnt.style.left = newLeft + "px";
        }

        function closeDragElement() {
            // Stop moving when the mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }

        var iconLeft = document.querySelector(".icon-left");
        var iconLeftRect = iconLeft.getBoundingClientRect();

        keyImgWindow.style.top = (iconLeftRect.top + 10) + "px";
        keyImgWindow.style.left = (iconLeftRect.right + 10) + "px";
    }
    }
});

// Close the window
keyImgClose.addEventListener("click", function() {
    keyImgWindow.remove();
});