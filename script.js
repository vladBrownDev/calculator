"use strict"
function pasteNum () {
    document.querySelector("#calcInp").innerText += elem.innerText
}
// function count(str, ch) {
//     let counter = 0
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === ch) counter++;
//     }
//     return counter
//   }
let counter = 0

function mathAction (action, num1, num2) {
    if(action == "*") {
        counter++
        return num1*num2
        
    }
    if(action == "/") {
        counter = counter + 1
        return num1/num2
    }
    if(action == "+") {
        counter++
        return num1+num2
    }
    if(action == "-") {
        counter++
        return num1-num2
    }
}

for (let elem of document.querySelectorAll("button")) {
    elem.addEventListener( "click" , () => {
        let pasteStr = document.querySelector("#calcInp").innerText.split("")
        let pasteStrLenght = pasteStr.lenght - 1
        console.log(pasteStrLenght)
        if(pasteStr[pasteStrLenght] == "*" || pasteStr[pasteStrLenght] == "/" || pasteStr[pasteStrLenght] == "+" || pasteStr[pasteStrLenght] == "-") {
            // for (let elemButton of document.querySelectorAll(".oper") {
                
            // }

        }
        if(elem.innerText == "C") {
            document.querySelector("#calcInp").innerText = ""
            return
        }
        if(elem.innerText == "=" || counter > 1) {
            if(pasteStr[0] + pasteStr[1] !== "undefined") {
                let twoNum = pasteStr[0].toString() + pasteStr[1].toString()
                console.log(twoNum)
                document.querySelector("#calcInp").innerText = mathAction(pasteStr[2], +twoNum, +pasteStr[3])
            }
            if(pasteStr[0] + pasteStr[1] !== "undefined") {
                let twoNum = pasteStr[0].toString() + pasteStr[1].toString()
                console.log(twoNum)
                document.querySelector("#calcInp").innerText = mathAction(pasteStr[2], +twoNum, +pasteStr[3])
            }
            else {
                document.querySelector("#calcInp").innerText = mathAction(+pasteStr[1], +pasteStr[0], +pasteStr[2])
                counter = 0
            }
            
            // if()
            return
        }
        document.querySelector("#calcInp").innerText += elem.innerText
    })
    console.log(elem)
}
