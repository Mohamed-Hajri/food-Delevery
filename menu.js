

var up=document.getElementById('plus')
var value=document.getElementById('value')
var down= document.getElementById('mines')

var changeme=document.getElementById('changeme')
taswira=document.getElementById('taswira')

var paragraph=document.getElementById('p')

changeme.onclick=function(){
    taswira.src='bon-appetit-hand-drawn-vector-600w-2292891529.jpg'
    // for(var i=0;i<paragraph.length ;i++){
    //     paragraph[i].innerText ='hi'
    //     console.log(paragraph[i])
    // }
}


up.onclick=function(){
    value.innerHTML=Number(value.innerHTML)+1
}
down.onclick=function(){
    if(Number(value.innerHTML)>0){
    value.innerHTML=Number(value.innerHTML)-1
    }}
