const square =(n)=> n*n;
const cube=(n)=>n*n*n;

function process(data , op){
       return data.map(op);
}

function run(opp){
    let data=[2,4,6,8];
    let n=process(data,opp);

    document.getElementById("ans").innerText=n;
}