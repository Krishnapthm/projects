const addBtn=document.getElementById("add")
let resetBtn=document.getElementById("reset")
const delBtn=document.getElementById("delete")
let percent=document.getElementById("percentage")
let count=0

addBtn.addEventListener("click",function(){
    count+=1
    percent.textContent=`${count}`
    color(count)
})

delBtn.addEventListener("click",function(){
    count-=1
    percent.textContent=`${count}`
    color(count)
})

resetBtn.addEventListener("click",function(){
    count=0
    percent.textContent=`${count}`
    color(count)
})


function color(count){
    if(count>0){
        document.getElementById("percentage").style.webkitTextStrokeColor="rgb(47, 234, 47)";
    }else if(count<0){
        document.getElementById("percentage").style.webkitTextStrokeColor="red";
    }else{
        document.getElementById("percentage").style.webkitTextStrokeColor="black";
    }
}
