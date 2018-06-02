/* write your script here */
let database = [{
  state: " Location: California",
  name: "Stanford",
  acceptance: "Acceptance Rate: 4.8",
  specializes: "Specializes: Medicine",
  made: "Made: 1885"
},{
  state: "Location: Texas",
  name: "LamarUni",
  acceptance: "Acceptance Rate: 77.2",
  specializes: "Specializes:Buisness",
  made:"Made: 1923"
},{
  state: "Location: Nebraska",
  name: "Creighton",
  acceptance: "Acceptance Rate: 70",
  specializes: "Specializes: Science",
  made: 1878
},{
  state: "Location: Florida",
  name: "Seminole",
  accpetance: "Acceptance Rate: 64",
  specializes: "Specializes: Art",
  made: "Made: 1965"
},{
  state: "Location: Colorado",
  name: "RegisUni",
  acceptance: "Acceptance Rate: 66",
  specializes: "Specializes: ComputerScience",
  made: "Made: 1877"
}
];
let searchBar = document.getElementById('search-bar');
let searchButton = document.getElementById('search-button');
let autoSuggestions = document.getElementById('auto-suggestions');
let display = document.getElementById('display');



searchBar.addEventListener("keypress",checkKey);
searchButton.addEventListener("click",processInput);
searchBar.addEventListener("input", getAutoSuggestions);


function checkKey(e){
  var key = e.which || e.keyCode;
  if(key == 13){
    //console.log("You pressed enter!")
    processInput();
  }
}

function processInput(){
let cleanedInput = searchBar.value.toLowerCase().trim();
autoSuggestions.innerHTML= '';
autoSuggestions.style.display = 'none';
autoSuggestions.innerHTML = '';
let databaseRecord = getRecord(cleanedInput);

if (databaseRecord != null) {
  displayRecord(databaseRecord);
}else{
  alert("No results");
}
  }




function getRecord(cleanedInput){
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].name.toLowerCase().trim();
    if(cleanedInput == cleanedRecordName){
      return database[i];
    }
  }
  return null;
}

function displayRecord(databaseRecord){
  let recordName = document.createElement ("h2");
  recordName.innerHTML = databaseRecord.name;
  let recordState = document.createElement("p");
  recordState.innerHTML = databaseRecord.state;
  let recordAcceptance = document.createElement("p");
  recordAcceptance.innerHTML = databaseRecord.acceptance;
  let recordSpecializes = document.createElement("p");
  recordSpecializes.innerHTML = databaseRecord.specializes;
  let recordMade = document.createElement("p");
  recordMade.innerHTML = databaseRecord.made;

display.appendChild(recordName);
display.appendChild(recordMade);
display.appendChild(recordSpecializes);
display.appendChild(recordState);
display.appendChild(recordAcceptance);

}
