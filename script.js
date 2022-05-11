const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
};

let signUpPassword = document.getElementById('inputSignUpPassword');
let loginPassword = document.getElementById('inputLoginPassword');
let saveMessage = document.getElementById('showSavedMessage');
let alreadyAccMessage = document.getElementById('showAlreadyAccount');
let correctMessage = document.getElementById('correctPasswordMessage');
let inCorrectMessage = document.getElementById('inCorrectPasswordMessage');

let storePassword = [];

let decodePassword = (encodedStr) => {
    const codeArr = encodedStr.split("");
    let decodedArr = codeArr.map(codeArrayChar => lookup[codeArrayChar]);
    return decodedArr.join("");
}

const encodePassword = (inputString) => {
    const lookupkeys = Object.keys(lookup);
    const lookupValues = Object.values(lookup);
    const codeArr = inputString.split("");
    let encodeArr = codeArr.map(codeArrayChar => {
        let index = lookupValues.findIndex((element) => element === codeArrayChar);
        return lookupkeys[index];
    });
    return encodeArr.join("");
}

/*------------------------------------------------------*/

// password strongness weakness

// function checkCapital(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//             return true;
//         }
//     }
//     return false;
// }
// function checkSmall(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             return true;
//         }
//     }
//     return false;
// }
// function checkNum(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
//             return true;
//         }
//     }
//     return false;
// }
// function checkLength(str) {
//     if (str.length > 7) {
//         return true;
//     }
//     return false;
// }

// // let s = '9';
// // console.log(s.charCodeAt(0));
// // console.log(checkCapital(s));

// function checkPasswordStrongWeak() {
//     let s = signUpPassword.value;
//     // console.log('working');
//     if (checkLength(s) && checkCapital(s) && checkSmall(s) && checkNum(s)) {
//         console.log('STRONG');
//     }
//     else if (checkLength(s) && checkCapital(s) && checkSmall(s) && !checkNum(s)) {
//         console.log('MEDIUM');
//     }
//     else if (checkLength(s) && (!checkCapital(s) || !checkSmall(s)) && !checkNum(s)) {
//         console.log('WEAK');
//     }
//     else if (!checkLength(s)) {
//         console.log('Password Length should be greater than 7 characters');
//     }
// }

/*------------------------------------------------------*/

function savePassword() {
    let flag = false;
    for (let i = 0; i < storePassword.length; i++) {
        if (decodePassword(storePassword[i]) === signUpPassword.value) {
            flag = true;
            break;
        }
    }
    if (flag) {
        correctMessage.innerText = '';
        inCorrectMessage.innerText = '';
        saveMessage.innerText = '';
        alreadyAccMessage.innerText = 'You already signup this page please Login Below!';
    }
    else {
        storePassword.push(encodePassword(signUpPassword.value));
        correctMessage.innerText = '';
        inCorrectMessage.innerText = '';
        alreadyAccMessage.innerText = '';
        saveMessage.innerText = 'Password Saved Successfully';
    }
}

function checkPassWord() {
    let flag = false;
    for (let i = 0; i < storePassword.length; i++) {
        if (decodePassword(storePassword[i]) === loginPassword.value) {
            flag = true;
            break;
        }
    }
    if (flag) {
        inCorrectMessage.innerText = '';
        alreadyAccMessage.innerText = '';
        saveMessage.innerText = '';
        correctMessage.innerText = 'Password Correct login Access Granted!';
    }
    else {
        alreadyAccMessage.innerText = '';
        saveMessage.innerText = '';
        correctMessage.innerText = '';
        inCorrectMessage.innerText = 'Password incorrect password Denied!';
    }
}