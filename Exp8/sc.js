

function check(){
    let n=document.getElementById("prime");
    let num=n.value;
    if(num==2){
        document.getElementById("ans").innerText="Prime"

    }else{
        if(num%2==0){
            document.getElementById("ans").innerText="Not prime"
        }else{
            document.getElementById("ans").innerText="Prime"
        }
    }
}