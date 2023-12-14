// "Crypted Img tab management."
const cryptedImgWindow = document.createElement("div");
const cryptedImgNavBar = document.createElement("div");
const cryptedImgText = document.createElement("div");
const cryptedImgClose = document.createElement("div");
const cryptedImgReduce = document.createElement("div");

const crossCrypted = document.createElement("img");
const reduceCrypted = document.createElement("img");
const cryptedImg = document.createElement("img");

// Open the window on icon click.
downloadedCard.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".crypted-window")) {
        cryptedImgWindow.remove();
    }
    // Open the window
    else {
        cryptedImgWindow.classList.add('crypted-window');
        cryptedImgWindow.setAttribute('id','crypted-window');
        document.querySelector(".blue-screen").appendChild(cryptedImgWindow);

        cryptedImgNavBar.classList.add('crypted-nav-bar');
        cryptedImgNavBar.setAttribute('id','crypted-window-header');
        document.querySelector(".crypted-window").appendChild(cryptedImgNavBar);

        cryptedImgText.classList.add('crypted-text');
        document.querySelector(".crypted-nav-bar").appendChild(cryptedImgText);
        cryptedImgText.textContent = "invitation-card.png";

        cryptedImgReduce.classList.add('crypted-reduce');
        document.querySelector(".crypted-nav-bar").appendChild(cryptedImgReduce);
        reduceCrypted.src = "images/reduce.png";
        document.querySelector(".crypted-reduce").appendChild(reduceCrypted);

        cryptedImgClose.classList.add('crypted-close');
        document.querySelector(".crypted-nav-bar").appendChild(cryptedImgClose);
        crossCrypted.src = "images/cross-close.png";
        document.querySelector(".crypted-close").appendChild(crossCrypted);

        cryptedImg.classList.add('crypted-img');
        cryptedImg.src = "images/the-almighty.png";
        document.querySelector(".crypted-window").appendChild(cryptedImg);

        // Make the DIV element draggable:
        dragElement(document.getElementById("crypted-window"));

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

        cryptedImgWindow.style.top = (iconLeftRect.top + 10) + "px";
        cryptedImgWindow.style.left = (iconLeftRect.right + 10) + "px";
    }
    }
});

// Close the window
cryptedImgClose.addEventListener("click", function() {
    cryptedImgWindow.remove();
});