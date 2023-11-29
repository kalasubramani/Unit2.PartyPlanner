//make API call
fetchPartyList();

//fetches party details from API
async function fetchPartyList() {
  //call API
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events"
  );
  //process received data
  const data = await response.json();
  //render data
  renderPartyList(data.data);
}

function renderPartyList(partyList){
  const html = partyList.map((eachParty)=>{
    return ` <div class="divParty">
              <ul>
                <li class="listItem"><span class="boldText">&#8718; Party Name : </span><span class="partyName">${eachParty.name}</span></li>
                <li class="listItem"><span class="boldText">Details:  </span>${eachParty.description}</li>
                <li class="listItem"><span class="boldText"> Where? </span><div class="locPin"></div><a><a href="https://www.google.com/maps/search/${eachParty.location}" target="_blank"> ${eachParty.location}</a></li>
                <li class="listItem"><span class="boldText">When? &#x1F4C6; </span>${eachParty.date.slice(0,10)}</li>  
                <li class="listItem"><span class="boldText">Starts at &#9200; </span>${eachParty.date.slice(11,19)} EST</li>              
              </ul>             
              </div>`
            
  });
  document.querySelector("#partyList").innerHTML = html.join("");
}