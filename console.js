// "Command console tab management."
const console = document.querySelector(".console");

const consoleWindow = document.createElement("div");
const consoleNavBar = document.createElement("div");
const consoleClose = document.createElement("div");
const consoleReduce = document.createElement("div");

const crossConsole = document.createElement("img");
const reduceConsole = document.createElement("img");

// Open the window on icon click.
console.addEventListener("click", function() {
    // Close the window
    if (document.querySelector(".console-window")) {
        const consoleContainer = document.querySelector(".console-container");
        if (consoleContainer) {
            consoleContainer.remove();
        }
        consoleWindow.remove();
    }
    // Open the window
    else {
        consoleWindow.classList.add('console-window');
        consoleWindow.setAttribute('id','console-window');
        document.querySelector(".blue-screen").appendChild(consoleWindow);

        consoleNavBar.classList.add('console-nav-bar');
        consoleNavBar.setAttribute('id','console-window-header');
        document.querySelector(".console-window").appendChild(consoleNavBar);

        consoleReduce.classList.add('console-reduce');
        document.querySelector(".console-nav-bar").appendChild(consoleReduce);
        reduceConsole.src = "images/reduce.png";
        document.querySelector(".console-reduce").appendChild(reduceConsole);

        consoleClose.classList.add('console-close');
        document.querySelector(".console-nav-bar").appendChild(consoleClose);
        crossConsole.src = "images/cross-close.png";
        document.querySelector(".console-close").appendChild(crossConsole);

        // Make the DIV element draggable:
        dragElement(document.getElementById("console-window"));

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

        consoleWindow.style.top = (iconLeftRect.top + 10) + "px";
        consoleWindow.style.left = (iconLeftRect.right + 10) + "px";
        }

        // Ajoute un conteneur pour l'entrée et la sortie de la console
        const consoleContainer = document.createElement("div");
        consoleContainer.classList.add("console-container");
        document.querySelector(".console-window").appendChild(consoleContainer);

        // Ajoute d'abord la sortie de la console
        const consoleOutput = document.createElement("div");
        consoleOutput.classList.add("console-output");
        consoleContainer.appendChild(consoleOutput);

        // Ensuite, ajoute l'entrée de la console
        const consoleInput = document.createElement("input");
        consoleInput.classList.add("console-input");
        consoleContainer.appendChild(consoleInput);

        //clic sur toute la zone
        consoleWindow.addEventListener("click", function() {
            consoleInput.focus();
        });

        // Résultat de commandes
        consoleInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Empêche le saut de ligne dans l'élément d'entrée
                const command = consoleInput.value;
                const outputLine = document.createElement("div");
                outputLine.textContent = "> " + command;
                outputLine.classList.add("console-code");
                consoleOutput.appendChild(outputLine);
     
                if (command.toLowerCase() === "help") {
                    // Si la commande est "help", affiche le résultat de la commande et les commandes disponibles.
                    outputLine.style.color = "green"; // Texte en vert pour la commande "help"
                    consoleOutput.appendChild(outputLine);
                            
                    // Affiche des exemples de commandes dans la console.
                    const fakeCommands = [
                        // "list-files - Affiche la liste des fichiers",
                        // "open-folder <nom-du-dossier> - Ouvre un dossier spécifique",
                        // "run-program <nom-du-programme> - Exécute un programme",
                        "update *** - To update the computer with the corresponding code",
                        "exit - Close the console",
                    ];
                            
                    fakeCommands.forEach(function(fakeCommand) {
                        const fakeOutputLine = document.createElement("div");
                        fakeOutputLine.textContent = fakeCommand;
                        fakeOutputLine.style.color = "green"; // Texte en vert pour les commandes
                        consoleOutput.appendChild(fakeOutputLine);
                    });
                } else if (command.toLowerCase() === "exit") {
                    // Si la commande est "exit", ferme la console.
                    outputLine.style.color = "green";
                    const consoleContainer = document.querySelector(".console-container");
                    if (consoleContainer) {
                        consoleContainer.remove();
                    }
                    consoleWindow.remove();
                } else if (command.toLowerCase() === "update 0969963") {
                    // Si la commande est "update 0969963", execute la mise à jour.
                    outputLine.style.color = "green";
                    const updateCommand = document.createElement("div");
                    updateCommand.classList.add("console-update");
                    consoleOutput.appendChild(updateCommand);
                        
                    const loadingText = `▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯`;
                    const updatedText = `❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚`;
                    let index = 0;
                        
                    // Initialise le pourcentage à 0%
                    let percentageText = `0%`;
                        
                    const interval = setInterval(() => {
                        if (index < updatedText.length) {
                            const currentText = updatedText.substring(0, index) + loadingText.substring(index);
                            updateCommand.textContent = `${currentText} ${percentageText}`;
                            index++;
                            // Met à jour le pourcentage à l'intérieur de la boucle
                            percentageText = `${Math.round((index / updatedText.length) * 100)}%`;
                        } else if (percentageText === "100%") {
                            // Texte à 100% ici
                            percentageText = "100%";
                            const currentText = updatedText.substring(0, index) + loadingText.substring(index);
                            updateCommand.textContent = `${currentText} ${percentageText}`;
                            // Attendre 1 seconde à 100% avant de passer au message suivant
                            setTimeout(() => {
                                clearInterval(interval);
                                updateCommand.textContent = "Update completed";
                                document.querySelector(".internet-segment").style.display = "flex";
                                // Vous pouvez ajouter la logique pour la suite ici
                            }, 1500);
                        }
                    }, 300);
                }                    
                else {
                    if (command.toLowerCase() === "") {
                    // Si la commande n'est pas "help", traitement normal.
                    outputLine.style.color = "white"; // Texte en blanc pour les autres commandes
                    consoleOutput.appendChild(outputLine);
                    }
                    else {
                    const notCommand = document.createElement("div");
                    notCommand.classList.add("console-advice");
                    notCommand.textContent = outputLine.textContent + " : does not exist, use \"help\" for further information about commands.";
                    consoleOutput.appendChild(notCommand);
                    }
                }
                        
                consoleInput.value = ""; // Efface l'entrée après l'exécution.
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
            }
        });
    }
});

// Close the window
consoleClose.addEventListener("click", function() {
    const consoleContainer = document.querySelector(".console-container");
    if (consoleContainer) {
        consoleContainer.remove();
    }
    consoleWindow.remove();
});