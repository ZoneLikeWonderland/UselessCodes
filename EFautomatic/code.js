// ==UserScript==
// @name         EF automachine
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ZarkLngeW
// @match        https://corporate.ef.com.cn/school/studyplan*
// @grant        none
// ==/UserScript==


onerror = ERRORHANDLE
function ERRORHANDLE(msg, url, l) {

    console.error(msg)
    console.info("error, retry...")
    setTimeout(function () {
        judgeProblem();
    }, 1000)
    return false;
}



function passMCT() {
    function checkMCT() {
        for (var i = 0; i < document.getElementsByClassName("ets-act-mct-option").length; i++) {
            if (document.getElementsByClassName("ets-act-mct-option")[i].dataset.atId[document.getElementsByClassName("ets-act-mct-option")[i].dataset.atId.length - 1] == "1")
                document.getElementsByClassName("ets-act-mct-option")[i].click();
        }
        console.info("check over")
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show ets-disabled").length == 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-move ets-disabled ets-show").length == 0) {
            console.info("MCT end")
            setTimeout(function () {
                jog();
            }, 500)
        } else {
            setTimeout(function () {
                checkMCT();
            }, 1000)
        }
    }
    checkMCT();
}

function passMST() {
    // var number = parseInt(document.getElementsByClassName("ets-ar-num ets-ar-num-right")[0].innerHTML);
    function checkMST() {
        for (var i = 0; i < document.getElementsByClassName("ets-act-mst-option").length; i++) {
            // if (parseInt(document.getElementsByClassName("ets-act-mst-option")[i].dataset.atId[document.getElementsByClassName("ets-act-mst-option")[i].dataset.atId.length - 1]) <= number)
            document.getElementsByClassName("ets-act-mst-option")[i].click();
        }
        console.info("check over")
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show ets-disabled").length == 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-move ets-disabled ets-show").length == 0) {
            console.info("MST end")
            setTimeout(function () {
                jog();
            }, 500)

        } else {
            setTimeout(function () {
                checkMST();
            }, 1000)
        }
    }
    checkMST();
}

function passConversation() {
    function checkConversation() {
        for (var i = 0; i < document.getElementsByClassName("ets-act-rpa-question ets-active")[0].children.length; i++) {
            if (document.getElementsByClassName("ets-act-rpa-question ets-active")[0].children[i].dataset.id[2] == "1")
                document.getElementsByClassName("ets-act-rpa-question ets-active")[0].children[i].click();
        }
        console.info("check over")
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show ets-disabled").length == 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-move ets-disabled ets-show").length == 0) {
            console.info("Conversation end")
            setTimeout(function () {
                jog();
            }, 500)

        } else {
            setTimeout(function () {
                checkConversation();
            }, 1000)
        }
    }
    document.getElementsByClassName("ets-act-rpa-audio-start")[0].click();
    document.getElementsByClassName("ets-btn ets-btn-blue ets-btn-shadowed")[0].click()
    checkConversation();
}



function passVideo() {
    var problemNumber = 0;
    function checkVideo() {
        if (problemNumber + 1 < document.getElementsByClassName("ets-act-mvq-answers").length && document.getElementsByClassName("ets-act-mvq-answers")[problemNumber + 1].attributes.length >= 3) {
            problemNumber++;
            console.info("step to " + problemNumber)
        }
        for (var i = 0; i < document.getElementsByClassName("ets-act-mvq-answers")[problemNumber].children.length; i++) {
            if (document.getElementsByClassName("ets-act-mvq-answers")[problemNumber].children[i].dataset.atId[document.getElementsByClassName("ets-act-mvq-answers")[0].children[i].dataset.atId.length - 1] == "1")
                document.getElementsByClassName("ets-act-mvq-answers")[problemNumber].children[i].click();
        }
        console.info("check over")
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show ets-disabled").length == 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-move ets-disabled ets-show").length == 0) {
            console.info("Video end")
            setTimeout(function () {
                jog();
            }, 500)

        } else {
            setTimeout(function () {
                checkVideo();
            }, 1000)
        }
    }
    document.getElementsByClassName("mejs-overlay mejs-layer mejs-overlay-play")[0].click();
    checkVideo();
}


function pickPhraseToBoxes() {
    for (var i = 0; i < document.getElementsByClassName("ets-act-grp-strip ets-act-grp-strip-move ui-draggable ui-draggable-handle").length; i++) {
        document.getElementsByClassName("ets-act-grp-strip ets-act-grp-strip-move ui-draggable ui-draggable-handle")[i].innerHTML += "<p>" + document.getElementsByClassName("ets-act-grp-strip ets-act-grp-strip-move ui-draggable ui-draggable-handle")[i].dataset.atId.substr(2) + "</p>";
    }
    setTimeout(function () {
        waitUntilGreen();
    }, 1000)
}

function pickWordToBoxes() {
    for (var i = 0; i < document.getElementsByClassName("ets-act-tpd-item ets-act-tpd-item-n ui-draggable ui-draggable-handle").length; i++) {
        document.getElementsByClassName("ets-act-tpd-item ets-act-tpd-item-n ui-draggable ui-draggable-handle")[i].innerHTML += "<p>" + document.getElementsByClassName("ets-act-tpd-item ets-act-tpd-item-n ui-draggable ui-draggable-handle")[i].dataset.atId[document.getElementsByClassName("ets-act-tpd-item ets-act-tpd-item-n ui-draggable ui-draggable-handle")[i].dataset.atId.length - 1] + "</p>";
    }
    setTimeout(function () {
        waitUntilGreen();
    }, 1000)
}


function helpLine() {
    for (var i = 0; i < document.getElementsByClassName("ets-droppable-line").length; i++) {
        document.getElementsByClassName("ets-droppable-line")[i].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML += " #" + document.getElementsByClassName("ets-droppable-line")[i].children[0].children[0].children[0].attributes[1].nodeValue[document.getElementsByClassName("ets-droppable-line")[i].children[0].children[0].children[0].attributes[1].nodeValue.length - 1];
    }
    for (var i = 0; i < document.getElementsByClassName("ets-word-puzzle ui-draggable ui-draggable-handle").length; i++) {
        document.getElementsByClassName("ets-word-puzzle ui-draggable ui-draggable-handle")[i].children[1].children[0].children[0].innerHTML += " #" + document.getElementsByClassName("ets-word-puzzle ui-draggable ui-draggable-handle")[i].dataset.atId[document.getElementsByClassName("ets-word-puzzle ui-draggable ui-draggable-handle")[i].dataset.atId.length - 1];
    }
    setTimeout(function () {
        waitUntilGreen();
    }, 1000)
}

function threeToOne() {
    function part1() {
        document.getElementsByClassName("ets-act-wgt-ts-kb")[0].click()
        setTimeout(function () {
            part2()
        }, 500);
    }
    function part2() {
        var answer = Array()
        for (var i = 0; i < document.getElementsByClassName("ets-option ets-chk-correct").length; i++) {
            answer.push(document.getElementsByClassName("ets-option ets-chk-correct")[i].dataset.wordIndex);
        }
        document.getElementsByClassName("ets-act-wgt-ts-kb")[0].click()
        setTimeout(function () {
            part3(answer)
        }, 500);
    }
    function part3(answer) {
        for (var i = 0; i < document.getElementsByClassName("ets-option").length; i++) {
            if (answer.indexOf(document.getElementsByClassName("ets-option")[i].dataset.wordIndex) >= 0) {
                document.getElementsByClassName("ets-option")[i].click();
            }
        }
        console.info("answer selected")
        document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].click()
        setTimeout(function () {
            part4()
        }, 500);
    }
    function part4() {
        setTimeout(function () {
            jog();
        }, 500)
    }
    part1()
}


function passSpeak() {
    var total = parseInt(document.getElementsByClassName("ets-act-lnc-number-total")[0].innerHTML);
    var currentTimes = 0;
    console.info("total number: " + total)
    function checkUntilAcceptable() {
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show ets-disabled").length == 0) {
            document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-btn-fn-next ets-show")[0].click();
            if (currentTimes < total) {
                setTimeout(function () {
                    doEach();
                }, 500)
            } else {
                console.info("speaking end")
                setTimeout(function () {
                    jog();
                }, 500)
            }
        } else {
            console.info("can't get next, wait 500ms");
            setTimeout(function () {
                checkUntilAcceptable();
            }, 500);
        }
    }
    function checkUntilSoundover() {
        if (document.getElementsByClassName("mejs-button mejs-playpause-button mejs-pause").length == 0) {
            console.info("sound is over")
            document.getElementsByClassName("ets-act-asr-button")[0].click();
            checkUntilAcceptable()
        } else {
            console.info("still speaking, wait 500ms");
            setTimeout(function () {
                checkUntilSoundover();
            }, 500);
        }
    }
    function doEach() {
        currentTimes += 1;
        console.info("acting on NO." + currentTimes);
        document.getElementsByClassName("ets-act-asr-button")[0].click();
        document.getElementsByClassName("mejs-button mejs-playpause-button mejs-play")[0].click();
        setTimeout(function () {
            checkUntilSoundover();
        }, 1500);
    }
    doEach();
}

function waitUntilGreen() {
    console.info("waiting green...")
    if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white").length > 0 && document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white")[0].className.indexOf("ets-disabled") == -1) {
        jog();
    }
    else {
        setTimeout(function () {
            waitUntilGreen();
        }, 500)
    }
}

function jog() {
    console.info("jogging...")
    if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white").length > 0 && document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white")[0].className.indexOf("ets-disabled") == -1) {
        if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show")[0].className.indexOf("ets-disabled") == -1) {
            document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show")[0].click()
            console.info("green btn")
        }
        if (document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].className.indexOf("ets-disabled") == -1) {
            document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].click()
            console.info("purple btn")
        }
        if (document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white").length > 0 && document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white")[0].className.indexOf("ets-disabled") == -1) {
            document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white")[0].click()
            console.info("white btn")
        }
        setTimeout(function () {
            jog();
        }, 2000)
    } else {
        console.info("step in...")
        setTimeout(function () {
            judgeProblem();
        }, 500)
    }
}


function judgeProblem() {

    var HTML = document.getElementsByClassName("ets-dark")[0].innerHTML;
    if (document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-green ets-btn-large ets-btn-shadowed ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show").length > 0 && document.getElementsByClassName("ets-btn ets-btn-purple ets-btn-large ets-btn-shadowed ets-btn-fn-check ets-show")[0].className.indexOf("ets-disabled") == -1
        || document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white").length > 0 && document.getElementsByClassName("ets-btn-large ets-btn-shadowed ets-btn-white")[0].className.indexOf("ets-disabled") == -1) {
        jog();
    } else if (HTML.indexOf("ets-act-rpa-question ets-active") >= 0) {
        console.info("this is a conversation")
        passConversation();
    } else if (HTML.indexOf("ets-act-mct-option") >= 0) {
        console.info("this is a MCT")
        passMCT();
    } else if (HTML.indexOf("ets-act-mst-option") >= 0) {
        console.info("this is a MST")
        passMST();
    } else if (HTML.indexOf("收听音频") >= 0) {
        console.info("this is a speaking")
        passSpeak();
    } else if (HTML.indexOf("ets-act-mvq-answers") >= 0) {
        console.info("this is a video")
        passVideo();
    } else if (HTML.indexOf("ets-act-wgt-ts-kb") >= 0) {
        console.info("this is a 3-1")
        threeToOne();
    } else if (HTML.indexOf("ets-droppable-line") >= 0) {
        console.info("this is a linking")
        helpLine();
    } else if (HTML.indexOf("Move the text to the correct gaps.") >= 0) {
        console.info("this is a picking words")
        pickWordToBoxes();
    } else if (HTML.indexOf("ets-act-grp-strip ets-act-grp-strip-move ui-draggable ui-draggable-handle") >= 0) {
        console.info("this is a picking phrases")
        pickPhraseToBoxes();
    } else {
        console.info("can't handle it, pull over")
        setTimeout(function () {
            judgeProblem();
        }, 1000)
    }

}

jog()