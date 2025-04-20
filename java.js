/*Tombol Show More*/
var div1 = document.getElementById("row1");
var display = 0;

function hideRow(){
    if (display == 1){
        div1.style.display="none";
        display=0;
    }
    else {
        div1.style.display= "block";
    display =1;
    }
}
var button1 = document.getElementById("tombol1");
var display = 0;

function hideButton(){
    if (display==1){
        button1.style.display="block";
        display=0;
    }
    else {
        button1.style.display="none";
        display=1;
    }
}
var button2 =document.getElementById("tombol2");
var display=0;
function showButton(){
    if (display ==1){
        button2.style.display="none";
        display=0;
    }
    else {
        button2.style.display="block";
        display=1;
    }
}

/*Tombol Show Less*/
var div1 = document.getElementById("row1");
var display = 0;

function fungsi1(){
    if(display==1){
        div1.style.display="block"
        display=0;
    }
    else{
        div1.style.display="none"
        display=1;
    }
}
var button1 =document.getElementById("tombol1");
var display=0;

function fungsi2(){
    if(display==1){
        button1.style.display="none"
        display=1;
    }
    else{
        button1.style.display="block"
        display=0;
    }
}
var button2=document.getElementById('tombol2');
var display=0;

function fungsi3(){
    if(display==1){
        button2.style.display="block";
        display=1;
    }
    else{
        button2.style.display="none";
        display=0;
    }
}