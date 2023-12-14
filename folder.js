// "Folder tab management."
const folder = document.querySelector(".folder");

const folderWindow = document.createElement("div");
const folderNavBar = document.createElement("div");
const folderText = document.createElement("div");
const folderClose = document.createElement("div");
const folderReduce = document.createElement("div");

const crossWindow = document.createElement("img");
const reduceWindow = document.createElement("img");

// Etat du fichier dans la corbeille initialisé à false
alreadyRecovered = false;

// Open the window on icon click.
folder.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".window")) {
        folderWindow.remove();
    }
    // Open the window
    else {
        folderWindow.classList.add('window');
        folderWindow.setAttribute('id','window');
        document.querySelector(".blue-screen").appendChild(folderWindow);

        folderNavBar.classList.add('folder-nav-bar');
        folderNavBar.setAttribute('id','windowheader');
        document.querySelector(".window").appendChild(folderNavBar);

        folderText.classList.add('folder-text');
        document.querySelector(".folder-nav-bar").appendChild(folderText);
        folderText.textContent = "Folders";

        folderReduce.classList.add('folder-reduce');
        document.querySelector(".folder-nav-bar").appendChild(folderReduce);
        reduceWindow.src = "images/reduce.png";
        document.querySelector(".folder-reduce").appendChild(reduceWindow);

        folderClose.classList.add('folder-close');
        document.querySelector(".folder-nav-bar").appendChild(folderClose);
        crossWindow.src = "images/cross-close.png";
        document.querySelector(".folder-close").appendChild(crossWindow);

        // Si le fichier "clé de cryptage" est récupéré de la corbeille alors, on l'affiche dans les dossiers
        if (alreadyRecovered == true) {
            keyRecovered.classList.add('key-recovered');
            document.querySelector(".window").appendChild(keyRecovered);
            decryptedFile.src = "images/file.png";
            document.querySelector(".key-recovered").appendChild(decryptedFile);
            decryptedText.classList.add('decrypted-text');
            decryptedText.textContent = "Keytojoin.png";
            document.querySelector(".key-recovered").appendChild(decryptedText);
        }

        // Make the DIV element draggable:
        dragElement(document.getElementById("window"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
         
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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

        folderWindow.style.top = (iconLeftRect.top + 10) + "px";
        folderWindow.style.left = (iconLeftRect.right + 10) + "px";
    }
    }
});

// Close the window
folderClose.addEventListener("click", function() {
    folderWindow.remove();
});
