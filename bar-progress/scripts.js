var progress = document.querySelectorAll(".progress")
var percent = 0

function load(sec) {
    setTimeout(() => {
        if (sec == 20 || sec == 35 || sec == 55 || sec == 77 || sec == 100) loading(sec)
        if (sec < 100) load(sec + 1)
    }, 100)
}

function loading(newProgress) {
    setTimeout(() => {
        if (newProgress > percent) {

            percent++

            for (let e of progress) e.style["width"] = percent + "%"

            loading(newProgress)
        }
    }, 30)
}

(function main() {
    load(0)
})() 
