let generate = document.querySelector("#genbtn");
let pw1Field = document.querySelector("#pw1");
let pw2Field = document.querySelector("#pw2");
let pw3Field = document.querySelector("#pw3");
let pw4Field = document.querySelector("#pw4");
let charAmt = 8;


let pwChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E",
                "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
                "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", 
                "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", 
                "|", ":", ";", "<", ">", ",", ".", "?"]

let pw1 = "";
let pw2 = "";
let pw3 = "";
let pw4 = "";

let getValue = () => {
    charAmt = document.querySelector("#charLimit").value;
}

let randomPW = () => {
    for (let i = 0; i < charAmt; i++){
       let value = (Math.floor(Math.random() * pwChar.length));
       pw1 += pwChar[value]
    }

    pw1Field.textContent = pw1;
    pw1 = "";

    for (let i = 0; i < charAmt; i++){
        let value = (Math.floor(Math.random() * pwChar.length));
        pw2 += pwChar[value]
     }
 
     pw2Field.textContent = pw2;
     pw2 = "";

     for (let i = 0; i < charAmt; i++){
        let value = (Math.floor(Math.random() * pwChar.length));
        pw3 += pwChar[value]
     }
 
     pw3Field.textContent = pw3;
     pw3 = "";

     for (let i = 0; i < charAmt; i++){
        let value = (Math.floor(Math.random() * pwChar.length));
        pw4 += pwChar[value]
     }
 
     pw4Field.textContent = pw4;
     pw4 = "";

}

generate.addEventListener("click", getValue);
generate.addEventListener("click", randomPW);