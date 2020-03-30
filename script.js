"use strict"
function mathAction (action, str) {
    
    if(action == "*") {
        let arr = str.split("*")
        console.log(arr)
        return arr[0]*arr[1]
        
    }
    if(action == "/") {
        let arr = str.split("/")
        console.log(arr)
        return arr[0]/arr[1]
    }
    if(action == "+") {
        let arr = str.split("+")
        console.log(arr)
        return Number(arr[0])+Number(arr[1])
    }
    if(action == "-") {
        let arr = str.split("-")
        console.log(arr)
        return arr[0]-arr[1]
    }

}
let innerMain = document.querySelector("#calcInp").innerText

function secOper (oper) {
    let multiCheck = !!/[*]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
    let splitCheck = !!/["/"]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
    let plusCheck = !!/[+]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
    let minusCheck = !!/[-]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
    if(multiCheck) {
        document.querySelector("#calcInp").innerText = mathAction("*",document.querySelector("#calcInp").innerText)
        document.querySelector("#calcInp").innerText += oper
        return
    }
    if(splitCheck) {
        document.querySelector("#calcInp").innerText = mathAction("/",document.querySelector("#calcInp").innerText)
        document.querySelector("#calcInp").innerText += oper
        return
    }
    if (plusCheck) {
        document.querySelector("#calcInp").innerText = mathAction("+",document.querySelector("#calcInp").innerText)
        document.querySelector("#calcInp").innerText += oper
        return
    }
    if(minusCheck) {
        document.querySelector("#calcInp").innerText = mathAction("-",document.querySelector("#calcInp").innerText)
        document.querySelector("#calcInp").innerText += oper
        return
    }
}


function result () {
        let multiCheck = !!/[*]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let splitCheck = !!/["/"]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let plusCheck = !!/[+]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let minusCheck = !!/[-]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
            if(multiCheck) {
                document.querySelector("#calcInp").innerText = mathAction("*",document.querySelector("#calcInp").innerText)
                return
            }
            if(splitCheck) {
                document.querySelector("#calcInp").innerText = mathAction("/",document.querySelector("#calcInp").innerText)
                return
            }
            if (plusCheck) {
                document.querySelector("#calcInp").innerText = mathAction("+",document.querySelector("#calcInp").innerText)
                return
            }
            if(minusCheck) {
                document.querySelector("#calcInp").innerText = mathAction("-",document.querySelector("#calcInp").innerText)
                return
            }
            
        
    
}
let prevOper = " "
let counter = 0
let isOper = undefined
for (let elem of document.querySelectorAll("button")) {
    elem.addEventListener( "click" , () => {
        debugger
        isOper = false
        // console.log(event.target.value)
        let multiCheck = !!/[*]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let splitCheck = !!/["/"]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let plusCheck = !!/[+]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        let minusCheck = !!/[-]{1,20}/gm.exec(document.querySelector("#calcInp").innerText)
        if(elem.value == "C") {
            document.querySelector("#calcInp").innerText = ""
            return
        }
        if(elem.value == "=") {
            if(document.querySelector("#calcInp").innerText=="") {
                return
            }
            else {
                if(multiCheck) {
                    let symbCheck = document.querySelector("#calcInp").innerText.split("*")
                    // console.log(lengthCheck.length, lengthCheck)
                    if(symbCheck[1] !== "") {
                        document.querySelector("#calcInp").innerText = mathAction("*",document.querySelector("#calcInp").innerText)
                        counter = 0
                        return
                    }
                    else {
                        return
                    }
                    
                }
                if(splitCheck) {
                    let symbCheck = document.querySelector("#calcInp").innerText.split("/")
                    if(symbCheck[1] !== "") {
                        document.querySelector("#calcInp").innerText = mathAction("/",document.querySelector("#calcInp").innerText)
                        counter = 0
                        return
                    }
                    else {
                        return
                    }
                }
                if (plusCheck) {
                    let symbCheck = document.querySelector("#calcInp").innerText.split("+")
                    if(symbCheck[1] !== "") {
                        document.querySelector("#calcInp").innerText = mathAction("+",document.querySelector("#calcInp").innerText)
                        counter = 0
                        return
                    }
                    else {
                        return
                    }
                }
                if(minusCheck) {
                    let symbCheck = document.querySelector("#calcInp").innerText.split("-")
                    if(symbCheck[1] !== "") {
                        document.querySelector("#calcInp").innerText = mathAction("-",document.querySelector("#calcInp").innerText)
                        counter = 0
                        return
                    }
                    else {
                        return
                    }
                }
                    
    
                
            }
            }
            
            
        
        if(event.target.value === "+") {
            isOper = true
            console.log(prevOper)
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            // console.log(symbCheck, symbCheck.length, prevCheck())
            if (document.querySelector("#calcInp").innerText == "") {
                return
            }
            if(symbCheck.length === 1) {
                prevOper = isOper ? event.target.value : " "
                document.querySelector("#calcInp").innerText += "+"
                return
            }
            if(isNaN(+doubleCheck[dcLength]) ) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? event.target.value : " "
                secOper("+")
                return
            }
        }
        if(event.target.value === "-") {
            isOper = true
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            console.log(symbCheck, symbCheck.length)
            
            if(symbCheck.length === 1) {
                prevOper = isOper ? event.target.value : " "
                document.querySelector("#calcInp").innerText += "-"
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? event.target.value : " "
                secOper("-")
                return
            }
        }
        if(event.target.value === "/") {
            isOper = true
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            console.log(isNaN(+doubleCheck[dcLength]))
            if (document.querySelector("#calcInp").innerText == "") {
                return
            }
            if(symbCheck.length === 1) {
                prevOper = isOper ? event.target.value : " "
                document.querySelector("#calcInp").innerText += "/"
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? event.target.value : " "
                secOper("/")
                return
            }
        }
        if(event.target.value === "*") {
            isOper = true
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            console.log(symbCheck, symbCheck.length)
            if (document.querySelector("#calcInp").innerText == "") {
                return
            }
            if(symbCheck.length == 1) {
                document.querySelector("#calcInp").innerText += "*"
                prevOper = isOper ? event.target.value : " "
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? event.target.value : " "
                secOper("*")
                return
            }
        }
        console.log(typeof(+event.target.value))        
        console.log(prevOper)
        document.querySelector("#calcInp").innerText += elem.innerText
    })
}
document.addEventListener("keydown", event => {
    debugger
    const { key } = event; 
    console.log(key)
    let numCheck = +key
    if(key == "*" ) {
        isOper = true
        let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
        let doubleCheck = document.querySelector("#calcInp").innerText.split("")
        let dcLength = doubleCheck.length - 1
        console.log(symbCheck, symbCheck.length)
        if (document.querySelector("#calcInp").innerText == "") {
            return
        }
        if(symbCheck.length == 1) {
            document.querySelector("#calcInp").innerText += "*"
            prevOper = isOper ? key : " "
            return
        }
        if(isNaN(+doubleCheck[dcLength])) {
            return
        }
        if(symbCheck[1] !== "") {
            prevOper = isOper ? key : " "
            secOper("*")
            
        }

    }
    if(key == "-" ) {
        isOper = true
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            console.log(symbCheck, symbCheck.length)
            if(symbCheck.length === 1) {
                prevOper = isOper ? key : " "
                document.querySelector("#calcInp").innerText += "-"
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? key : " "
                secOper("-")
            }
        
    }
    if(key == "/") {
        isOper = true
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            console.log(isNaN(+doubleCheck[dcLength]))
            if (document.querySelector("#calcInp").innerText == "") {
                return
            }
            if(symbCheck.length === 1) {
                prevOper = isOper ? key : " "
                document.querySelector("#calcInp").innerText += "/"
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? key : " "
                secOper("/")
            }
    }
    if(key == "+") {
        isOper = true
            console.log(prevOper)
            let symbCheck = document.querySelector("#calcInp").innerText.split(`${prevOper}`)
            let doubleCheck = document.querySelector("#calcInp").innerText.split("")
            let dcLength = doubleCheck.length - 1
            // console.log(symbCheck, symbCheck.length, prevCheck())
            if (document.querySelector("#calcInp").innerText == "") {
                return
            }
            if(symbCheck.length === 1) {
                prevOper = isOper ? key : " "
                document.querySelector("#calcInp").innerText += "+"
                return
            }
            if(isNaN(+doubleCheck[dcLength])) {
                return
            }
            if(symbCheck[1] !== "") {
                prevOper = isOper ? key : " "
                secOper("+")
            }
    }
    if(key == "=" ) {
        result()
    }
    else if(key == "Enter") {
        result()
    }
    if(key == "Backspace") {
        document.querySelector("#calcInp").innerText = ""
    }
    if(isNaN(numCheck)) {
        return
    }
    else {
        document.querySelector("#calcInp").innerText += event.key
    }

})
