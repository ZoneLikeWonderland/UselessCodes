function listenEaxm() {
    var m = new MutationObserver(function () {
        setTimeout(function () {
            doExam()
        }, 1000)
    })
    m.observe($("body")[0], { "childList": true })
}

function doExam() {
    if (document.getElementById("tmDialog_iframe") == null) {
        return
    }
    console.info("Eaxm found")
    for (var i = 0; i < document.getElementById("tmDialog_iframe").contentWindow.document.getElementsByClassName("answerOption").length; i++) {
        if (document.getElementById("tmDialog_iframe").contentWindow.document.getElementsByClassName("answerOption")[i].children[0].children[0].attributes["_correctanswer"].nodeValue == "1") {
            document.getElementById("tmDialog_iframe").contentWindow.document.getElementsByClassName("answerOption")[i].children[0].click()
        }
    }
    document.getElementsByClassName("popbtn_cancel")[0].click()
}

function checkVideoFinish() {
    console.info("checking ...")
    if (document.getElementsByClassName("progressbar_box")[0].firstChild.attributes[1].nodeValue.indexOf("100%") != -1 || document.getElementsByClassName("progressbar_box")[0].firstChild.attributes[1].nodeValue.indexOf("99.") != -1) {
        console.info("Current video is over")
        setTimeout(function () {
            goNextVideo()
        }, 500)
    } else {
        setTimeout(function () {
            checkVideoFinish()
        }, 5000)
    }
}

function goNextVideo() {
    for (var i = 0; i < document.getElementsByClassName("clearfix video").length; i++) {
        if (document.getElementsByClassName("clearfix video")[i].attributes["watchstate"].nodeValue != "1" && document.getElementsByClassName("clearfix video")[i].attributes["class"].nodeValue.indexOf("current_play") == -1) {
            document.getElementsByClassName("clearfix video")[i].click()
            console.info("Next video: " + document.getElementsByClassName("clearfix video")[i].attributes["_name"].nodeValue)
            setTimeout(function () {
                checkVideoFinish()
            }, 5000)
            break
        }
    }
}

listenEaxm()
checkVideoFinish()
