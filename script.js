// Alert
document.getElementById("alert").onclick=function(){
    alert("Well Come to our Web Page")
}
// Name
document.getElementById("name").onclick=function(){
    let value=document.getElementById("statement").value
    document.getElementById("output").innerHTML=value
}
// Clear Input
document.getElementById("clearInput").onclick=function(){
    document.getElementById("statement").value=""
}
// Clear Output
document.getElementById("clearResult").onclick=function(){
    document.getElementById("output").innerHTML=""
}
// Cities
let city = ["1)Faisalabad","2)Lahore","3)Karachi","4)Islamabad","5)Burewala","6)Sheikhupura","7)Kashmir"]
document.getElementById("cities").onclick=function(){
    for(i=0;i<city.length;i++){
        document.getElementById("output").innerHTML+=city[i]+"<br>"
    }
    
}
// New city
document.getElementById("newCity").onclick=function(){
    let addCity=document.getElementById("statement").value
   if(addCity){
    document.getElementById("output").innerHTML=city +","+ addCity
   }else{
    alert("Please Enter a city Name first!")
   }
}
// table
document.getElementById("table").onclick=function(){
    document.getElementById("output").innerHTML="<table><tr><td>Sr No.</td><td>Name</td><td>Gender</td><td>Occupation</td></tr><tr><td>1</td><td>John</td><td>Male</td><td>Teacher</td></tr><tr><td>2</td><td>Tyson</td><td>Male</td><td>Soldier</td></tr><tr><td>3</td><td>Miller</td><td>Male</td><td>Doctor</td></tr><tr><td>4</td><td>Rose</td><td>Female</td><td>Shopkeeper</td></tr></table>"
}

