var hearts = document.querySelectorAll(".heart")
var currentLife = 2

function init() {
    healOverTime()

    setColor("life")

    updateFrame()
}

async function healOverTime() {
    setTimeout(() => {
        if (currentLife < 6) heal()

        healOverTime()
    }, 5000)
}

function fight() {
    setColor("fight")

    if (currentLife > 0) currentLife--

    setTimeout(() => {
        updateFrame()

        setColor("life")
    }, 100)
}

function heal() {
    setColor("heal")

    if (currentLife < 6) currentLife++

    setTimeout(() => {
        updateFrame()

        setColor("life")
    }, 100)
}

function setColor(type) {
    document.documentElement.style.setProperty(
        `--heart-color`,
        `var(--${type}-color)`
    )
}

function updateFrame() {
    switch (currentLife) {
        case 0:
            hearts[0].style["boxShadow"] = frameEmpty
            hearts[1].style["boxShadow"] = frameEmpty
            hearts[2].style["boxShadow"] = frameEmpty
            break
        case 1:
            hearts[0].style["boxShadow"] = frameHalf
            hearts[1].style["boxShadow"] = frameEmpty
            hearts[2].style["boxShadow"] = frameEmpty
            break
        case 2:
            hearts[0].style["boxShadow"] = frameFull
            hearts[1].style["boxShadow"] = frameEmpty
            hearts[2].style["boxShadow"] = frameEmpty
            break
        case 3:
            hearts[0].style["boxShadow"] = frameFull
            hearts[1].style["boxShadow"] = frameHalf
            hearts[2].style["boxShadow"] = frameEmpty
            break
        case 4:
            hearts[0].style["boxShadow"] = frameFull
            hearts[1].style["boxShadow"] = frameFull
            hearts[2].style["boxShadow"] = frameEmpty
            break
        case 5:
            hearts[0].style["boxShadow"] = frameFull
            hearts[1].style["boxShadow"] = frameFull
            hearts[2].style["boxShadow"] = frameHalf
            break
        case 6:
            hearts[0].style["boxShadow"] = frameFull
            hearts[1].style["boxShadow"] = frameFull
            hearts[2].style["boxShadow"] = frameFull
            break
    }
}

var frameFull = "3px 1px 0 #000000,4px 1px 0 #000000,5px 1px 0 #000000,6px 1px 0 #000000,9px 1px 0 #000000,10px 1px 0 #000000,11px 1px 0 #000000,12px 1px 0 #000000,3px 2px 0 #000000,4px 2px 0 #000000,5px 2px 0 #000000,6px 2px 0 #000000,9px 2px 0 #000000,10px 2px 0 #000000,11px 2px 0 #000000,12px 2px 0 #000000,1px 3px 0 #000000,2px 3px 0 #000000,3px 3px 0 var(--heart-color),4px 3px 0 var(--heart-color),5px 3px 0 var(--heart-color),6px 3px 0 var(--heart-color),7px 3px 0 #000000,8px 3px 0 #000000,9px 3px 0 var(--heart-color),10px 3px 0 var(--heart-color),11px 3px 0 var(--heart-color),12px 3px 0 var(--heart-color),13px 3px 0 #000000,14px 3px 0 #000000,1px 4px 0 #000000,2px 4px 0 #000000,3px 4px 0 var(--heart-color),4px 4px 0 #FFFFFF,5px 4px 0 #FFFFFF,6px 4px 0 var(--heart-color),7px 4px 0 #000000,8px 4px 0 #000000,9px 4px 0 var(--heart-color),10px 4px 0 var(--heart-color),11px 4px 0 var(--heart-color),12px 4px 0 var(--heart-color),13px 4px 0 #000000,14px 4px 0 #000000,1px 5px 0 #000000,2px 5px 0 #000000,3px 5px 0 var(--heart-color),4px 5px 0 #FFFFFF,5px 5px 0 var(--heart-color),6px 5px 0 var(--heart-color),7px 5px 0 var(--heart-color),8px 5px 0 var(--heart-color),9px 5px 0 var(--heart-color),10px 5px 0 var(--heart-color),11px 5px 0 var(--heart-color),12px 5px 0 var(--heart-color),13px 5px 0 #000000,14px 5px 0 #000000,1px 6px 0 #000000,2px 6px 0 #000000,3px 6px 0 var(--heart-color),4px 6px 0 var(--heart-color),5px 6px 0 var(--heart-color),6px 6px 0 var(--heart-color),7px 6px 0 var(--heart-color),8px 6px 0 var(--heart-color),9px 6px 0 var(--heart-color),10px 6px 0 var(--heart-color),11px 6px 0 var(--heart-color),12px 6px 0 var(--heart-color),13px 6px 0 #000000,14px 6px 0 #000000,3px 7px 0 #000000,4px 7px 0 #000000,5px 7px 0 var(--heart-color),6px 7px 0 var(--heart-color),7px 7px 0 var(--heart-color),8px 7px 0 var(--heart-color),9px 7px 0 var(--heart-color),10px 7px 0 var(--heart-color),11px 7px 0 #000000,12px 7px 0 #000000,3px 8px 0 #000000,4px 8px 0 #000000,5px 8px 0 var(--heart-color),6px 8px 0 var(--heart-color),7px 8px 0 var(--heart-color),8px 8px 0 var(--heart-color),9px 8px 0 var(--heart-color),10px 8px 0 var(--heart-color),11px 8px 0 #000000,12px 8px 0 #000000,5px 9px 0 #000000,6px 9px 0 #000000,7px 9px 0 var(--heart-color),8px 9px 0 var(--heart-color),9px 9px 0 #000000,10px 9px 0 #000000,5px 10px 0 #000000,6px 10px 0 #000000,7px 10px 0 var(--heart-color),8px 10px 0 var(--heart-color),9px 10px 0 #000000,10px 10px 0 #000000,7px 11px 0 #000000,8px 11px 0 #000000,7px 12px 0 #000000,8px 12px 0 #000000"
var frameHalf = "3px 1px 0 #000000,4px 1px 0 #000000,5px 1px 0 #000000,6px 1px 0 #000000,9px 1px 0 #000000,10px 1px 0 #000000,11px 1px 0 #000000,12px 1px 0 #000000,3px 2px 0 #000000,4px 2px 0 #000000,5px 2px 0 #000000,6px 2px 0 #000000,9px 2px 0 #000000,10px 2px 0 #000000,11px 2px 0 #000000,12px 2px 0 #000000,1px 3px 0 #000000,2px 3px 0 #000000,3px 3px 0 var(--heart-color),4px 3px 0 var(--heart-color),5px 3px 0 var(--heart-color),6px 3px 0 var(--heart-color),7px 3px 0 #000000,8px 3px 0 #000000,13px 3px 0 #000000,14px 3px 0 #000000,1px 4px 0 #000000,2px 4px 0 #000000,3px 4px 0 var(--heart-color),4px 4px 0 #FFFFFF,5px 4px 0 #FFFFFF,6px 4px 0 var(--heart-color),7px 4px 0 #000000,8px 4px 0 #000000,13px 4px 0 #000000,14px 4px 0 #000000,1px 5px 0 #000000,2px 5px 0 #000000,3px 5px 0 var(--heart-color),4px 5px 0 #FFFFFF,5px 5px 0 var(--heart-color),6px 5px 0 var(--heart-color),7px 5px 0 var(--heart-color),13px 5px 0 #000000,14px 5px 0 #000000,1px 6px 0 #000000,2px 6px 0 #000000,3px 6px 0 var(--heart-color),4px 6px 0 var(--heart-color),5px 6px 0 var(--heart-color),6px 6px 0 var(--heart-color),7px 6px 0 var(--heart-color),13px 6px 0 #000000,14px 6px 0 #000000,3px 7px 0 #000000,4px 7px 0 #000000,5px 7px 0 var(--heart-color),6px 7px 0 var(--heart-color),7px 7px 0 var(--heart-color),11px 7px 0 #000000,12px 7px 0 #000000,3px 8px 0 #000000,4px 8px 0 #000000,5px 8px 0 var(--heart-color),6px 8px 0 var(--heart-color),7px 8px 0 var(--heart-color),11px 8px 0 #000000,12px 8px 0 #000000,5px 9px 0 #000000,6px 9px 0 #000000,7px 9px 0 var(--heart-color),9px 9px 0 #000000,10px 9px 0 #000000,5px 10px 0 #000000,6px 10px 0 #000000,7px 10px 0 var(--heart-color),9px 10px 0 #000000,10px 10px 0 #000000,7px 11px 0 #000000,8px 11px 0 #000000,7px 12px 0 #000000,8px 12px 0 #000000"
var frameEmpty = "3px 1px 0 #000000,4px 1px 0 #000000,5px 1px 0 #000000,6px 1px 0 #000000,9px 1px 0 #000000,10px 1px 0 #000000,11px 1px 0 #000000,12px 1px 0 #000000,3px 2px 0 #000000,4px 2px 0 #000000,5px 2px 0 #000000,6px 2px 0 #000000,9px 2px 0 #000000,10px 2px 0 #000000,11px 2px 0 #000000,12px 2px 0 #000000,1px 3px 0 #000000,2px 3px 0 #000000,7px 3px 0 #000000,8px 3px 0 #000000,13px 3px 0 #000000,14px 3px 0 #000000,1px 4px 0 #000000,2px 4px 0 #000000,7px 4px 0 #000000,8px 4px 0 #000000,13px 4px 0 #000000,14px 4px 0 #000000,1px 5px 0 #000000,2px 5px 0 #000000,13px 5px 0 #000000,14px 5px 0 #000000,1px 6px 0 #000000,2px 6px 0 #000000,13px 6px 0 #000000,14px 6px 0 #000000,3px 7px 0 #000000,4px 7px 0 #000000,11px 7px 0 #000000,12px 7px 0 #000000,3px 8px 0 #000000,4px 8px 0 #000000,11px 8px 0 #000000,12px 8px 0 #000000,5px 9px 0 #000000,6px 9px 0 #000000,9px 9px 0 #000000,10px 9px 0 #000000,5px 10px 0 #000000,6px 10px 0 #000000,9px 10px 0 #000000,10px 10px 0 #000000,7px 11px 0 #000000,8px 11px 0 #000000,7px 12px 0 #000000,8px 12px 0 #000000"

init() 