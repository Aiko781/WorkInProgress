// "Internet tab management."
const internet = document.querySelector(".internet");

const internetWindow = document.createElement("div");
const internetNavBar = document.createElement("div");
const internetText = document.createElement("div");
const internetClose = document.createElement("div");
const internetReduce = document.createElement("div");
const internetLogo = document.createElement("div");

const crossInternet = document.createElement("img");
const reduceInternet = document.createElement("img");
const logoInternet = document.createElement("img");
const searchInput = document.createElement("input");

const internetNavGroup = document.createElement("div");
const internetLeft = document.createElement("div");
const internetRight = document.createElement("div");
const arrowLeft = document.createElement("img");
const arrowRight = document.createElement("img");

const siteGroup = document.createElement("div");
const imgSite = document.createElement("img");
const ritualButton = document.createElement("div");

// Open the window on icon click.
internet.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".internet-window")) {
        internetWindow.remove();
        internetLogo.style.display = "block";

        internetRight.remove();
        internetLeft.remove();
        siteGroup.remove();
    }
    // Open the window
    else {
        internetWindow.classList.add('internet-window');
        internetWindow.setAttribute('id','internet-window');
        document.querySelector(".blue-screen").appendChild(internetWindow);
        // Modifie la taille de la page
        internetWindow.style.height = "350px";
        internetWindow.style.width = "600px";
        searchInput.style.width = "350px";

        internetNavBar.classList.add('internet-nav-bar');
        internetNavBar.setAttribute('id','internet-window-header');
        document.querySelector(".internet-window").appendChild(internetNavBar);

        internetText.classList.add('internet-text');
        document.querySelector(".internet-nav-bar").appendChild(internetText);
        internetText.textContent = "Internet";

        internetReduce.classList.add('internet-reduce');
        document.querySelector(".internet-nav-bar").appendChild(internetReduce);
        reduceInternet.src = "images/reduce.png";
        document.querySelector(".internet-reduce").appendChild(reduceInternet);

        internetClose.classList.add('internet-close');
        document.querySelector(".internet-nav-bar").appendChild(internetClose);
        crossInternet.src = "images/cross-close.png";
        document.querySelector(".internet-close").appendChild(crossInternet);

        internetLogo.classList.add('internet-logo');
        document.querySelector(".internet-window").appendChild(internetLogo);
        logoInternet.src = "images/Goggles.png";
        document.querySelector(".internet-logo").appendChild(logoInternet);

        internetNavGroup.classList.add("internet-nav-group");
        searchInput.classList.add("search-input");
        searchInput.placeholder = "www.goggles.com";
        document.querySelector(".internet-window").appendChild(internetNavGroup);
        document.querySelector(".internet-nav-group").appendChild(searchInput);

        // Make the DIV element draggable:
        dragElement(document.getElementById("internet-window"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        if (document.getElementById(elmnt.id + "-header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
        } else {
            
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

        internetWindow.style.top = (iconLeftRect.top + 10) + "px";
        internetWindow.style.left = (iconLeftRect.right + 10) + "px";
    }

    }
});

// Close the window
internetClose.addEventListener("click", function() {
    internetWindow.remove();
    internetLogo.style.display = "block";

    internetRight.remove();
    internetLeft.remove();
    siteGroup.remove();
});


// Écoute l'événement de pression d'une touche dans l'input
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne dans l'élément d'entrée
        const searchTerm = searchInput.value;
        
        if (searchTerm === "www.other-hand.com") {
            // Si le terme de recherche est "www.other-hand.com", cela effectue les modifications
            internetLogo.style.display = "none";
            document.querySelector(".search-input").value = ""; // Efface l'input de recherche

            // Modifie la taille de la page
            internetWindow.style.height = (570) + "px";
            internetWindow.style.width = (900) + "px";

            searchInput.style.width = "90%";
            searchInput.value = "www.other-hand.com";

            internetLeft.classList.add('internet-left');
            document.querySelector(".internet-nav-group").appendChild(internetLeft);
            arrowLeft.src = "images/arrow-left.png";
            document.querySelector(".internet-left").appendChild(arrowLeft);

            internetRight.classList.add('internet-right');
            document.querySelector(".internet-nav-group").appendChild(internetRight);
            arrowRight.src = "images/arrow-right.png";
            document.querySelector(".internet-right").appendChild(arrowRight);

            siteGroup.classList.add('site-group');
            document.querySelector(".internet-window").appendChild(siteGroup);

            imgSite.classList.add('img-site');
            imgSite.src = "images/other-hand-site-section.png";
            document.querySelector(".site-group").appendChild(imgSite);

            ritualButton.classList.add('ritual-button');
            ritualButton.textContent = "Install Plugin";
            document.querySelector(".site-group").appendChild(ritualButton);

            
        } else if (searchTerm === "www.goggles.com") {
            // Modifie la taille de la page
            internetWindow.style.height = "350px";
            internetWindow.style.width = "600px";
            searchInput.style.width = "350px";
            
            internetLogo.style.display = "block";

            internetRight.remove();
            internetLeft.remove();
            siteGroup.remove();
            // Remove tout les contenus !
        }
    }
});