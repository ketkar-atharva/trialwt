
document.getElementById("date").innerText=Date();
function checksqrt(){
    let n=document.getElementById("sqrt");
    let num=n.value;
    let a=Math.sqrt(Number(num));
    document.getElementById("ans").innerText=a;
}

function getrandom(){
    let j=document.getElementById("range").value;
    let n=Math.floor(Math.random()*j)+1;
    document.getElementById("ans").innerText=n;

}