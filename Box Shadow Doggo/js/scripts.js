var dog = document.querySelector(".dog");

import * as frames from './frames.js'

var frame = 1;

function getNext() {
    return `frame${frame == 4 ? frame = 0 : ++frame}`;
}

(function main() {

    dog.style["boxShadow"] = frames[getNext()];

    setTimeout(() => main(), 40);

})()