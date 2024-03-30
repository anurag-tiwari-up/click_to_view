var a = document.querySelector("#b1")
var b = document.querySelector("#b2")
var c3 = document.querySelector("#b3")
var d = document.querySelector("#b4")


var d1= document.querySelector("#dis1")
var d2= document.querySelector("#dis2")
var d3= document.querySelector("#dis3")
var d4= document.querySelector("#dis4")

var c = document.querySelector("#close")

a.addEventListener("click",function(){
    dis1.style.zIndex="2"
    dis1.style.opacity="1"
    c.style.opacity="1"
    c.addEventListener("click",function(){
        dis1.style.zIndex="-1"
        dis1.style.opacity="0"
        c.style.opacity="0"
    })
})
b.addEventListener("click",function(){
    dis2.style.zIndex="2"
    dis2.style.opacity="1"
    c.style.opacity="1"
    c.addEventListener("click",function(){
        dis2.style.zIndex="-1"
        dis2.style.opacity="0"
        c.style.opacity="0"
    })
})
c3.addEventListener("click",function(){
    dis3.style.zIndex="2"
    dis3.style.opacity="1"
    c.style.opacity="1"
    c.addEventListener("click",function(){
        dis3.style.zIndex="-1"
        dis3.style.opacity="0"
        c.style.opacity="0"
    })
})
d.addEventListener("click",function(){
    dis4.style.zIndex="2"
    dis4.style.opacity="1"
    c.style.opacity="1"
    c.addEventListener("click",function(){
        dis4.style.zIndex="-1"
        dis4.style.opacity="0"
        c.style.opacity="0"
    })
})

