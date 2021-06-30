var clicked = document.querySelectorAll(".only-sr");
for (var i =0; i<clicked.length;i++){
    clicked[i].addEventListener("click",clickRadio);
    clicked[i].addEventListener("change",display);
}
var text = document.querySelector("#inputText");
text.addEventListener("keyup",display);    

function clickRadio(){
    text.select();
}

function checkCCTV(){
    var checkList;
    if(document.querySelector("#a1").checked){
        checkList = document.querySelector("#a1").value;
    }
    else(checkList = document.querySelector("#a2").value);
    if(document.querySelector("#b1").checked){
        checkList = checkList + " " + document.querySelector("#b1").value;
    }
    else(checkList = checkList + " " + document.querySelector("#b2").value);
    checkList = checkList + "-" + document.querySelector("#inputText").value;
    return checkList;
}


function pressEnter(){
    if(event.keyCode == 13){
        searchWeb();
    }
}
var i=0;
function searchWeb(){
    var webAddr = checkCCTV();
    function findCCTV(element){
        if(element.name === webAddr){
            return true;
        }
    }
    const cc = web.find(findCCTV);
    try {    
        window.open(cc.link,"CCTV"+i,"width=480, height=450, top=300, left=500, location=no, toolbar=no, menubar=no, scrollbars=yes, resizable=yes");
        i++;
    }
    catch(err) {
        alert(webAddr + "는 없는 CCTV입니다! 메렁~");
    }
}

function display(){
    document.querySelector(".text").innerHTML = checkCCTV();
}