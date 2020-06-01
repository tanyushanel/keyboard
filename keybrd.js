// const keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79,
//     80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 13, 16, 226, 90, 88, 67, 86,
//     66, 78, 77, 188, 190, 191, 38, 16, 17, 18, 32, 18, 17, 37, 40, 39
// ];

// const keyboard = [
// 96,
// 49,
// 50,
// 51,
// 52,
// 53,
// 54,
// 55,
// 56,
// 57,
// 48,
// 45,
// 61,
// "Backspace",
// "Tab",
// 113,
// 119,
// 101,
// 114,
// 116,
// 121,
// 117,
// 105,
// 111,
// 112,
// 91,
// 93,
// 97,
// "Delete", "CapsLock",
// 115,
// 100,
// 102,
// 103,
// 104,
// 106,
// 107,
// 108,
// 59,
// 39,
// 92,
// "Enter", "ShiftLeft",
// 122,
// 120,
// 99,
// 118,
// 98,
// 110,
// 109,
// 44,
// 46,
// 47, "ArrowUp", "ShiftRight", "ControlLeft",
// "OSLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"


// 192,
// 49,
// 50,
// 51,
// 52,
// 53,
// 54,
// 55,
// 56,
// 57,
// 48,
// 173,
// "Backspace",
// "Tab",
// 61,
// 8,
// 9,
// 81,
// 87,
// 69,
// 82,
// 84,
// 89,
// 85,
// 73,
// 79,
// 80,
// "Delete", "CapsLock",
// 219,
// 221,
// 220,
// 46,
// 20,
// 65,
// 83,
// 68,
// 70,
// 71,
// 72,
// 74,
// 75,
// 76,
// 59,
// "Enter", "ShiftLeft",
// 222,
// 16,
// 220,
// 90,
// 88,
// 67,
// 86,
// 66,
// 78,
// 77,
// 188,
// 190,
// 191,
// 38,
// 16,
// 17,
// 91,
// 18,
// 32,
// 18,
// 17,
// 37,
// 40,
// 39, "ArrowUp", "ShiftRight", "ControlLeft",
// "OSLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"

// ];


let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
    "Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, "Delete", "CapsLock",
    115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, "Enter", "ShiftLeft", 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "ArrowUp", "ShiftRight", "ControlLeft",
    "OSLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
];

// document.onkeypress = function(event) {
//     // console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }


// document.onkeydown = function(event) {
//     // console.log(event);
//     keyboard.push(event.which);
//     console.log(keyboard);
// }

// document.onkeyup = function(event) {
//     // console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

function init() {

    let out = '';
    for (let i = 0; i < keyboard.length; i++) {

        if (i == 13 || i == 29 || i == 14 || i == 28 || i == 41 || i == 42 || i == 54 || i == 55 || i >= 54 && i <= 64) {

            out += `<div class="key black" data="${keyboard[i]}">` + keyboard[i] + `</div>`;
        } else {
            out += `<div class="key" data="${keyboard[i]}">` + String.fromCharCode(keyboard[i]) + `</div>`;
        }
    }



    document.querySelector('#keyboard').innerHTML = out;
    document.querySelector('.txt').value = '';
}
init();
let text = document.querySelector('.txt');
document.querySelectorAll('#keyboard .key').forEach(
    (el) => el.onclick = function() {

        document.querySelectorAll('#keyboard .key').forEach((el) => el.classList.remove('active'));
        this.classList.add('active');

        if (this.innerText == "Space") text.value += " ";
        else if (this.innerText == "Backspace") {
            text.value = text.value.slice(0, -1);
        }
        // else if (this.innerText == "Delete") text.value += text.value.slice(0, 1); //////
        else if (this.innerText == "Enter") text.value += '\n';
        else if (this.innerText == "Tab" ||
            this.innerText == "Tab" ||
            this.innerText == "CapsLock" ||
            this.innerText == "ShiftLeft" ||
            this.innerText == "ShiftRight" ||
            this.innerText == "ControlLeft" ||
            this.innerText == "ControlRight" ||
            this.innerText == "OSLeft" ||
            this.innerText == "ArrowRight" ||
            this.innerText == "ArrowLeft" ||
            this.innerText == "ArrowUp" ||
            this.innerText == "ArrowDown" ||
            this.innerText == "AltRight" ||
            this.innerText == "AltLeft") text.value += "";
        else text.value += this.innerText;
    }
);

document.onkeypress = function(event) {

    document.querySelectorAll('#keyboard .key').forEach((el) => el.classList.remove('active'));


    document.querySelector(`#keyboard .key[data="` + event.keyCode + `"]`).classList.add('active');

    document.querySelector(`#keyboard .key.black[data="` + event.code + `"]`).classList.add('active');

    // if (event.which == "Space") text.value += " ";
    // else if (event.which == "Backspace") {
    //     text.value = text.value.slice(0, -1);
    // }
    // // else if (this.innerText == "Delete") text.value += text.value.slice(0, 1); //////
    // else if (event.which == "Enter") text.value += '\n';
    // else if (event.which == "Tab" ||
    //     event.which == "Tab" ||
    //     event.which == "CapsLock" ||
    //     event.which == "ShiftLeft" ||
    //     event.which == "ShiftRight" ||
    //     event.which == "ControlLeft" ||
    //     event.which == "ControlRight" ||
    //     event.which == "OSLeft" ||
    //     event.which == "ArrowRight" ||
    //     event.which == "ArrowLeft" ||
    //     event.which == "ArrowUp" ||
    //     event.which == "ArrowDown" ||
    //     event.which == "AltRight" ||
    //     event.which == "AltLeft") text.value += "";
    // else
    text.value += event.key;

}