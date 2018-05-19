/* write your script here */
let database = [{
  state: "California",
  name: "Stanford",
  acceptance: 4.8,
  specializes: "medicine",
  made: 1885
},{
  state: "Texas",
  name: "lamarUni",
  acceptance: 77.2,
  specializes: "buisness",
  made: 1923
},{
  state: "Nebraska",
  name: "Creighton",
  acceptance: 70,
  specializes: "science",
  made: 1878
},{
  state: "Florida",
  name: "Seminole",
  accpetance: 64,
  specializes: "art",
  made: 1965
},{
  state: "Colorado",
  name: "regisUni",
  acceptance: 66,
  specializes: "computerScience",
  made: 1877
}
];
let searchBar = document.getElementById('search-bar');
let searchButton = document.getElementById('search-button');
let autoSuggestions = document.getElementById('auto-suggestions');
let display = document.getElementById('display');


searchBar.addEventListener("keypress",checkKey);
searchButton.addEventListener("click",processInput);

function checkKey(e){
  var key = e.which || e.keyCode;
  if(key == 13){
    //console.log("You pressed enter!")
    processInput();
  }
}

function processInput(){

}

function getRecord(cleanedInput){

}

function database(databaseRecord){
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].name.toLowerCase().trim();
    if(cleanedInput == cleanedRecordName){
      return database[i];
    }
  }
}
