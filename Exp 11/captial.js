
let capitals={
    "India":"Delhi",
    "Japan":"Tokyo",
    "UK":"London",
    "USA":"Washington",
};



function show(){
    let country=document.getElementById("country").value;
    console.log(country);
    document.getElementById("ans").innerHTML = capitals[country] ? `Captial : ${capitals[country]}`:"";

}