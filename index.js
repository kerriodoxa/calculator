
let displayText = document.querySelector("#display-text");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case "AC":
                displayText.innerText = "";
                break;
            case "↵":
                displayText.innerText = displayText.innerText.slice(0, -1);
                break;
            case "=":
                try {
                    displayText.innerText = eval(displayText.innerText);
                    if (displayText.innerText === undefined) {
                        throw new SyntaxError("Invalid expression");
                    }
                } catch (error) {
                    displayText.innerText = "Error: " + error.message;
                }
                break;
            default:
                displayText.innerText += e.target.innerText;
        };
    })
})

