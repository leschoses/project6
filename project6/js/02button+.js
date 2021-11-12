var contArea = document.getElementById("contArea1");
var hideli11 = document.getElementById("hideli1-1");
var hideli12 = document.getElementById("hideli1-2");
var hideli13 = document.getElementById("hideli1-3");
var hideli14 = document.getElementById("hideli1-4");
var hideli15 = document.getElementById("hideli1-5");
var hideli16 = document.getElementById("hideli1-6");

var hideli21 = document.getElementById("hideli2-1");
var hideli22 = document.getElementById("hideli2-2");
var hideli23 = document.getElementById("hideli2-3");
var hideli24 = document.getElementById("hideli2-4");
var hideli25 = document.getElementById("hideli2-5");
var hideli26 = document.getElementById("hideli2-6");

var hideli31 = document.getElementById("hideli3-1");
var hideli32 = document.getElementById("hideli3-2");
var hideli33 = document.getElementById("hideli3-3");

var btn1 = document.getElementById("btnmore1");
function more(){

    if(contArea.clientHeight<1111){

    contArea.style= "height: 1873px"
    hideli11.style=" display:list-item"
    hideli12.style=" display:list-item"
    hideli13.style=" display:list-item"
    hideli14.style=" display:list-item"
    hideli15.style=" display:list-item"
    hideli16.style=" display:list-item"
    
} else if(contArea.clientHeight<1900 && contArea.clientHeight>1200){

    contArea.style="height: 2647px"
    hideli21.style=" display:list-item"
    hideli22.style=" display:list-item"
    hideli23.style=" display:list-item"
    hideli24.style=" display:list-item"
    hideli25.style=" display:list-item"
    hideli26.style=" display:list-item"
    
}   else if (contArea.clientHeight<2700 && contArea.clientHeight>1700){

    contArea.style = "height : 2864px"
    hideli31.style=" display:list-item"
    hideli32.style=" display:list-item"
    hideli33.style=" display:list-item"

    btn1.style="display:none";
    
}
    
}


function asd(){
    var contArea = document.getElementById("contArea1");
    
    console.log(contArea.clientHeight);
}


function gotoMenu2(){
    var mcMenu1 = document.getElementById("mcMenu1")
    var mcMenu2 = document.getElementById("mcMenu22")

    


    
}