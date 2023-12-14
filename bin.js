// "Bin tab management."
const bin = document.querySelector(".bin");

const binWindow = document.createElement("div");
const binNavBar = document.createElement("div");
const binText = document.createElement("div");
const binClose = document.createElement("div");
const binReduce = document.createElement("div");

const crossBin = document.createElement("img");
const reduceBin = document.createElement("img");

// avant récupération du fichier depuis la corbeille
const decryptedFileGroup = document.createElement("div");
// après récupération du fichier depuis la corbeille
const keyRecovered = document.createElement("div");

const decryptedFile = document.createElement("img");
const decryptedText = document.createElement("div");

// fenêtre d'archivage
const archiveWindow = document.createElement("div");

const firstOption = document.createElement("div");
const secondOption = document.createElement("div");

// Open the window on icon click.
bin.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".bin-window")) {
        binWindow.remove();
    }
    // Open the window
    else {
        binWindow.classList.add('bin-window');
        binWindow.setAttribute('id','bin-window');
        document.querySelector(".blue-screen").appendChild(binWindow);

        binNavBar.classList.add('bin-nav-bar');
        binNavBar.setAttribute('id','bin-window-header');
        document.querySelector(".bin-window").appendChild(binNavBar);

        binText.classList.add('bin-text');
        document.querySelector(".bin-nav-bar").appendChild(binText);
        binText.textContent = "Bin";

        binReduce.classList.add('bin-reduce');
        document.querySelector(".bin-nav-bar").appendChild(binReduce);
        reduceBin.src = "images/reduce.png";
        document.querySelector(".bin-reduce").appendChild(reduceBin);

        binClose.classList.add('bin-close');
        document.querySelector(".bin-nav-bar").appendChild(binClose);
        crossBin.src = "images/cross-close.png";
        document.querySelector(".bin-close").appendChild(crossBin);

        // if already recovered from the bin, does not appear but stay in "folder"'s window
        if (alreadyRecovered == false) {
        decryptedFileGroup.classList.add('decrypted-img-group');
        document.querySelector(".bin-window").appendChild(decryptedFileGroup);
        decryptedFile.src = "images/file.png";
        document.querySelector(".decrypted-img-group").appendChild(decryptedFile);
        decryptedText.classList.add('decrypted-text');
        decryptedText.textContent = "Keytojoin.png";
        document.querySelector(".decrypted-img-group").appendChild(decryptedText);
        }

        // Make the DIV element draggable:
        dragElement(document.getElementById("bin-window"));

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

        binWindow.style.top = (iconLeftRect.top + 10) + "px";
        binWindow.style.left = (iconLeftRect.right + 10) + "px";
    }

    }
});

// Close the window
binClose.addEventListener("click", function() {
    binWindow.remove();
    archiveWindow.remove();
});


// "Archive tab management."
decryptedFileGroup.addEventListener("click", function() {
    archiveWindow.classList.add('archive-window');
    document.querySelector(".bin-window").appendChild(archiveWindow);

    firstOption.classList.add('option-1');
    firstOption.textContent = "Back";
    document.querySelector(".archive-window").appendChild(firstOption);

    secondOption.classList.add('option-2');
    secondOption.textContent = "Recover";
    document.querySelector(".archive-window").appendChild(secondOption);
});

// Close the archive window
firstOption.addEventListener("click", function () {
    archiveWindow.remove();
});

secondOption.addEventListener("click", function () {
    // remove tout le contenu de la fenêtre "bin"
    archiveWindow.remove();
    decryptedFileGroup.remove();

    // ajoute du contenu dans la fenêtre "folders"
    alreadyRecovered = true;
    
    if (document.querySelector(".window")) {
        keyRecovered.classList.add('key-recovered');
        document.querySelector(".window").appendChild(keyRecovered);
        decryptedFile.src = "images/file.png";
        document.querySelector(".key-recovered").appendChild(decryptedFile);
        decryptedText.classList.add('decrypted-text');
        decryptedText.textContent = "Keytojoin.png";
        document.querySelector(".key-recovered").appendChild(decryptedText);
    }
});