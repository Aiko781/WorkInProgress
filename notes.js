// "Notes tab management."
const notes = document.querySelector(".notes");

const notesWindow = document.createElement("div");
const notesNavBar = document.createElement("div");
const notesBotBar = document.createElement("div");
   
const notesClose = document.createElement("div");
const notesReduce = document.createElement("div");
//div englobante img + texte
const notesName = document.createElement("div");
//div texte
const notesTitle = document.createElement("div");

const crossNotes = document.createElement("img");
const reduceNotes = document.createElement("img");
const notesImg = document.createElement("img");

const notesContent = document.createElement("textarea");

// Open the window on icon click.
notes.addEventListener("click", function() {
    
    if (document.querySelector(".notes-window")) {
        // Récupère le contenu de la fenêtre "Notes"
        const notesContent = document.querySelector(".notes-content").value;
        // Enregistre le contenu dans le stockage local
        sessionStorage.setItem("notesContent", notesContent);
        // Ferme la fenêtre
        notesWindow.remove();
    }
    else {
        // Ouvre une fenêtre de notes
        notesWindow.classList.add('notes-window');
        notesWindow.setAttribute('id','notes-window');
        document.querySelector(".blue-screen").appendChild(notesWindow);

        notesNavBar.classList.add('notes-nav-bar');
        notesNavBar.setAttribute('id','notes-window-header');
        document.querySelector(".notes-window").appendChild(notesNavBar);

        notesName.classList.add('notes-name');
        document.querySelector(".notes-nav-bar").appendChild(notesName);
        notesImg.src = "images/notes.png";
        document.querySelector(".notes-name").appendChild(notesImg);
        notesTitle.classList.add('notes-title');
        document.querySelector(".notes-name").appendChild(notesTitle);
        notesTitle.textContent = "Notes.txt";

        notesReduce.classList.add('notes-reduce');
        document.querySelector(".notes-nav-bar").appendChild(notesReduce);
        reduceNotes.src = "images/reduce.png";
        document.querySelector(".notes-reduce").appendChild(reduceNotes);

        notesClose.classList.add('notes-close');
        document.querySelector(".notes-nav-bar").appendChild(notesClose);
        crossNotes.src = "images/cross-close.png";
        document.querySelector(".notes-close").appendChild(crossNotes);

        notesContent.classList.add('notes-content');
        document.querySelector(".notes-window").appendChild(notesContent);

        // Make the DIV element draggable:
        dragElement(document.getElementById("notes-window"));

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

        var iconRight = document.querySelector(".icon-right");
        var iconRightRect = iconRight.getBoundingClientRect();

        notesWindow.style.top = (iconRightRect.top + 10) + "px";
        notesWindow.style.left = (iconRightRect.left - 400) + "px";

        // Charge le contenu précédemment enregistré dans les notes
        const savedNotesContent = sessionStorage.getItem("notesContent");
        if (savedNotesContent) {
            notesContent.value = savedNotesContent;
        }
    }
    }
});

notesClose.addEventListener("click", function() {
    // Récupére le contenu de la fenêtre "Notes"
    const notesContent = document.querySelector(".notes-content").value;

    // Enregistre le contenu dans le stockage local
    sessionStorage.setItem("notesContent", notesContent);

    notesWindow.remove();
});

// Efface le contenu du stockage local lorsque la page se recharge
window.addEventListener("beforeunload", function () {
    sessionStorage.removeItem("notesContent");
});

        