let container=document.createElement("div");
container.classList.add("container");

let h1=document.createElement("h1");
h1.classList.add("title");
h1.innerHTML="CRYPTOCURRENCY";

let row=document.createElement("div");
row.classList.add("row");

container.append(h1,row);
document.body.append(container);

async function getCryptoData(){
    try {
        let response=await fetch("https://api.coincap.io/v2/assets");
        let jsonResponse=await response.json();
        let value=jsonResponse.data;
        return cryptoInCard(value);
    } catch (error) {
        console.log(error);
    }
}
getCryptoData();

function cryptoInCard(value){
    for(i=0;i<value.length;i++){       
        row.innerHTML+=`
        <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card mt-3">
        <div class="card card-header">${value[i].name}</div>
        <div class="card card-body">
        <p>Rank: ${value[i].rank}</p>
        <p>Symbol: ${value[i].symbol}</p>
        <p>Price: ${Math.round(+(value[i].priceUsd)*1000000)/1000000} USD</p>
        </div>
        </div>
        </div>`;
    }
}