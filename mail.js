// "Mail tab management."
const mail = document.querySelector(".mail");

const mailWindow = document.createElement("div");
const mailNavBar = document.createElement("div");
const mailText = document.createElement("div");
const mailClose = document.createElement("div");
const mailReduce = document.createElement("div");

const crossMail = document.createElement("img");
const reduceMail = document.createElement("img");

const mailContent = document.createElement("div");
const mailContent1 = document.createElement("div");
const mailContent2 = document.createElement("div");
const mailContent3 = document.createElement("div");

const cardFile = document.createElement("img");
const downloadedCard = document.createElement("div");
const cardText = document.createElement("div");

// Open the window on icon click.
mail.addEventListener("click", function() {
    
    if (document.querySelector(".mail-window")) {
        //si mail est ouvert
        if (document.querySelector(".intro-text")){
            // Supprimer le texte de présentation et le bouton "Retour"
            document.querySelector(".mail-window").removeChild(document.querySelector(".back-button"));
            document.querySelector(".mail-window").removeChild(document.querySelector(".intro-text"));
            if (document.querySelector(".dl-button")){
                document.querySelector(".mail-window").removeChild(document.querySelector(".dl-button"));
            }
            // Réafficher les contenus de mail
            const mailContents = document.querySelectorAll(".mail-content");
            mailContents.forEach(function(content) {
                content.style.display = "flex";
            });
        }

        //fermer la fenêtre
        mailWindow.remove();
    }
    // Open the window
    else {
        mailWindow.classList.add('mail-window');
        mailWindow.setAttribute('id','mail-window');
        document.querySelector(".blue-screen").appendChild(mailWindow);

        mailNavBar.classList.add('mail-nav-bar');
        mailNavBar.setAttribute('id','mail-window-header');
        document.querySelector(".mail-window").appendChild(mailNavBar);

        mailText.classList.add('mail-text');
        document.querySelector(".mail-nav-bar").appendChild(mailText);
        mailText.textContent = "Mail";

        mailReduce.classList.add('mail-reduce');
        document.querySelector(".mail-nav-bar").appendChild(mailReduce);
        reduceMail.src = "images/reduce.png";
        document.querySelector(".mail-reduce").appendChild(reduceMail);

        mailClose.classList.add('mail-close');
        document.querySelector(".mail-nav-bar").appendChild(mailClose);
        crossMail.src = "images/cross-close.png";
        document.querySelector(".mail-close").appendChild(crossMail);

        mailContent.classList.add('mail-content');
        mailContent.textContent = "Hello, discover my new impossible to see virus - Click o...";
        document.querySelector(".mail-window").appendChild(mailContent);

        mailContent1.classList.add('mail-content');
        mailContent1.textContent = "Addle - Discover our new tool to simplify your life, try...";
        document.querySelector(".mail-window").appendChild(mailContent1);

        mailContent2.classList.add('mail-content');
        mailContent2.textContent = "David - Subject: A friendly reminder";
        document.querySelector(".mail-window").appendChild(mailContent2);

        mailContent3.classList.add('mail-content');
        mailContent3.textContent = "Charly - Subject: Important Update Regarding Goggles Acc...";
        document.querySelector(".mail-window").appendChild(mailContent3);


        // Make the DIV element draggable:
        dragElement(document.getElementById("mail-window"));

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

        mailWindow.style.top = (iconLeftRect.top + 10) + "px";
        mailWindow.style.left = (iconLeftRect.right + 10) + "px";
    }

    }
});

mailClose.addEventListener("click", function() {
    //si mail est ouvert
    if (document.querySelector(".intro-text")){
        // Supprimer le texte de présentation et le bouton "Retour"
        document.querySelector(".mail-window").removeChild(document.querySelector(".back-button"));
        document.querySelector(".mail-window").removeChild(document.querySelector(".intro-text"));
        if (document.querySelector(".dl-button")){
        document.querySelector(".mail-window").removeChild(document.querySelector(".dl-button"));
        }
        // Réafficher les contenus de mail
        const mailContents = document.querySelectorAll(".mail-content");
        mailContents.forEach(function(content) {
            content.style.display = "flex";
        });
    }

    //ferme la fenêtre
    mailWindow.remove();
});


let typingInProgress = false; // Variable de contrôle
let currentTimeout; // Variable pour stocker les ID de `setTimeout`

mailContent.addEventListener("click", function () {
    // Augmente le z-index pour placer cette fenêtre au premier plan
    const textContainer = document.querySelector(".narrators-text");
    const textContent = "I think that I don't want to open that.";

    let index = 0;
    const speed = 30; // Delay between letters in milliseconds

    // Si une écriture est déjà en cours, on la stoppe
    if (typingInProgress) {
        clearTimeout(currentTimeout); // Annule les appels `setTimeout` en attente
        textContainer.textContent = ""; // Réinitialise le texte affiché
        typingInProgress = false; // Réinitialise la variable de contrôle
    }

    typingInProgress = true; // Indique qu'une nouvelle écriture commence

    function typeText() {
        if (!typingInProgress) return; // Si l'écriture a été arrêtée, on sort

        if (index < textContent.length) {
            textContainer.textContent += textContent.charAt(index);
            index++;
            currentTimeout = setTimeout(typeText, speed); // Stocke l'ID de `setTimeout`
        } else {
            currentTimeout = setTimeout(textRemove, 3000); // Efface le texte après 3 secondes
            typingInProgress = setTimeout(false, 3000) // Écriture terminée
        }
    }

    function textRemove() {
        textContainer.textContent = "";
    }

    typeText(); // Lancer l'écriture
});



mailContent1.addEventListener("click", function() {
    // Masque tous les contenus de mail
    const mailContents = document.querySelectorAll(".mail-content");
    mailContents.forEach(function(content) {
        content.style.display = "none";
    });

    // Bouton "Retour"
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("back-button");
    document.querySelector(".mail-window").appendChild(backButton);

    // Ajoute le texte de présentation
    const introText = document.createElement("div");
    introText.classList.add("intro-text");
    introText.innerHTML = `
    Addle 
    <br> 
    Discover our new tool to simplify your life, try the \"EffortlessClean Pro\" !
    <br><br>
    At Addle, we are passionate about streamlining your daily routine. Our latest revolutionary vacuum is designed to offer unparalleled cleanliness with minimal effort. Forget the hassles of cleaning, as our Addle vacuum does all the work for you. We are so confident in the quality of our product that we invite you to try it with no commitment. You will be amazed by its performance, ease of use, and durability.
    <br><br>
    Don\'t miss this opportunity! Reply to this message to schedule a free in-home trial and see for yourself how Addle can make your life easier.
    <br><br>
    Simplify your everyday life with Addle - the ideal partner for spotless interiors.
    <br><br>
    Best regards,<br>
    The Addle Team<br>
    [Company Contact Information : ********]
    `;
    document.querySelector(".mail-window").appendChild(introText);
    
    // Ajoute un gestionnaire d'événements au bouton "Retour" pour restaurer le contenu d'origine
    backButton.addEventListener("click", function() {
        // Supprime le texte de présentation et le bouton "Retour"
        document.querySelector(".mail-window").removeChild(introText);
        document.querySelector(".mail-window").removeChild(backButton);
        // Réafficher les contenus de mail
        mailContents.forEach(function(content) {
            content.style.display = "flex";
        });
    });
    
});

mailContent3.addEventListener("click", function() {
    // Masque tous les contenus de mail
    const mailContents = document.querySelectorAll(".mail-content");
    mailContents.forEach(function(content) {
        content.style.display = "none";
    });

    // Bouton "Retour"
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("back-button");
    document.querySelector(".mail-window").appendChild(backButton);

    // Ajoute le texte de présentation
    const introText = document.createElement("div");
    introText.classList.add("intro-text");
    introText.innerHTML = `
    Charly
    <br> 
    Subject: Important Update Regarding Goggles Access
    <br><br>
    Hi Mary,
    <br>
    I hope you're doing well. I wanted to discuss a crucial matter regarding the recent company update.
    <br><br>
    Unfortunately, there was a significant oversight, resulting in the removal of Goggles access for all of us. To regain access, you'll need to reinstall the latest update, which includes the necessary fixes:
    <br><br>
    1. Open your console<br>
    2. Enter the company update code: 0969963
    <br><br>
    This code will guide you through the reinstallation, and you should have Goggles access back once the update is complete.
    <br><br>
    Thanks for your understanding, and we appreciate your prompt action in resolving this matter.
    <br><br>
    Best,
    <br>
    Charly
    `;
    document.querySelector(".mail-window").appendChild(introText);
    
    // Ajoute un gestionnaire d'événements au bouton "Retour" pour restaurer le contenu d'origine
    backButton.addEventListener("click", function() {
        // Supprime le texte de présentation et le bouton "Retour"
        document.querySelector(".mail-window").removeChild(introText);
        document.querySelector(".mail-window").removeChild(backButton);
        // Réafficher les contenus de mail
        mailContents.forEach(function(content) {
            content.style.display = "flex";
        });
    });
    
});

mailContent2.addEventListener("click", function() {
    // Masque tous les contenus de mail
    const mailContents = document.querySelectorAll(".mail-content");
    mailContents.forEach(function(content) {
        content.style.display = "none";
    });

    // Bouton "Retour"
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("back-button");
    document.querySelector(".mail-window").appendChild(backButton);

    // Ajoute le texte de présentation
    const introText = document.createElement("div");
    introText.classList.add("intro-text");
    introText.innerHTML = `
    David<br>
    Subject: A friendly reminder 
    <br><br>
    Hi Mary,
    <br><br>
    I hope this message finds you well. I've recently come across something truly enlightening, and I couldn't resist sharing it with you. There's a place, a sort of sanctuary, where we've been exploring unconventional ideas and expanding our horizons. It's unlike anything you've ever encountered before, and I believe you have the potential to see the world in a completely new light.
    <br><br>
    I can't say much here, but if you're curious, there's a special image that holds the key to this knowledge. You'll know it when you see it. Open your mind, Mary, and let's embrace the journey together.
    <br><br>
    Looking forward to your response,
    <br>
    David
    `;
    document.querySelector(".mail-window").appendChild(introText);

    
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "attached file(s)↓";
    downloadButton.classList.add("dl-button");
    document.querySelector(".mail-window").appendChild(downloadButton);
    
    // Ajoute un gestionnaire d'événements au bouton "Retour" pour restaurer le contenu d'origine
    backButton.addEventListener("click", function() {
        // Supprime le texte de présentation et le bouton "Retour"
        document.querySelector(".mail-window").removeChild(backButton);
        document.querySelector(".mail-window").removeChild(introText);
        document.querySelector(".mail-window").removeChild(downloadButton);
        // Réafficher les contenus de mail
        mailContents.forEach(function(content) {
            content.style.display = "flex";
        });
    });

    // faire pop le fichier joint sur le bureau
    downloadButton.addEventListener("click", function() {

        downloadedCard.classList.add('downloaded-card');
        document.querySelector(".icon-left").appendChild(downloadedCard);
        cardFile.src = "images/file.png";
        document.querySelector(".downloaded-card").appendChild(cardFile);
        cardText.classList.add('card-text');
        cardText.textContent = "invitation-card.png";
        document.querySelector(".downloaded-card").appendChild(cardText);
        
    });
    
});

// Petit drag and drop du fichier "téléchargé" depuis la boite mail
downloadedCard.draggable = true;
downloadedCard.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", "draggedCard");
});

const blueScreen = document.querySelector('.blue-screen');

blueScreen.addEventListener("dragover", function(e) {
    e.preventDefault();
});

blueScreen.addEventListener("drop", function(e) {
    e.preventDefault();
    const draggedItem = document.querySelector(".downloaded-card");
    
    // Obtenir la position du pointeur de la souris lors du drop
    const x = e.clientX;
    const y = e.clientY;
    
    // Vérifie si le drop est sur une icône existante
    const icons = document.querySelectorAll(".organize-left");

    for (const icon of icons) {
        const iconRect = icon.getBoundingClientRect();
        if (x >= iconRect.left && x <= iconRect.right && y >= iconRect.top && y <= iconRect.bottom) {
            // Ne fait rien si le drop est sur une icône existante
            return;
        }
    }
    
    // Déplace "downloadedCard" à la position du drop
    draggedItem.style.left = (x - blueScreen.getBoundingClientRect().left - 40) + "px"; // 50 est la moitié de la largeur de l'élément
    draggedItem.style.top = (y - blueScreen.getBoundingClientRect().top - 40) + "px"; // 50 est la moitié de la hauteur de l'élément
});


