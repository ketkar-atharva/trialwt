
let capitals={
    "India":"Delhi",
    "Japan":"Tokyo",
    "UK":"London",
    "USA":"Washington",
};

let flags={
    "India":"https://tse4.mm.bing.net/th/id/OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8?pid=Api&P=0&h=180",
    "Japan":"https://i.natgeofe.com/k/988c4715-bba9-4697-ae66-9ded8cfabed3/japan-flag.gif",
    "UK":"https://m.media-amazon.com/images/I/61kBr-Hyy+L.jpg",
    "USA":"https://tse4.mm.bing.net/th/id/OIP.CdcmTZIBwzY5PGHWZUTcGQHaFQ?pid=Api&P=0&h=180",

};

function show(){
    let country=document.getElementById("country").value;
    console.log(country);
    document.getElementById("ans").innerHTML = capitals[country] ? `Captial : ${capitals[country]}`:"";
    document.getElementById("flag").src= flags[country]? flags[country]:"";
}