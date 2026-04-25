

async function getweather(){
    let name=document.getElementById("city").value;
    console.log(name);
    const apiKey ="2f9008a7a670becc6c13c779f1bef35d";
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
    try{
        let response= await fetch(api);
        let data= await response.json();
        console.log(data);
        document.getElementById("result").innerHTML=`
             <h3>City :${name}</h3>
             <p>Temperature :${data.main.temp}</p>
             <p>Feels Like :${data.main.feels_like}</p>
             <p>Humidity :${data.main.humidity}</p>
        `
    }catch{
        console.log("eeror in api call");
    }
}