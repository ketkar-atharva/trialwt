

let theme=0;
function toggle(){
    if(theme==0){
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        theme=1;
    }else{
         document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        theme=0;
    }
}

function check(){
     
    let ok=1;
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    if(name.length<4){
        document.getElementById("nameer").style.display="block";
        ok=0;
    }
    let emailformat=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!emailformat.test(email)){
        document.getElementById("emailer").style.display="block";
        ok=0;
    }
    if(ok){
        alert("Form submitted");
    }

}