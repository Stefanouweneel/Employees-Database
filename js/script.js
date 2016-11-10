// Initializes the jQuery plugin jplist, which sorts, filters and paginates

$('document').ready (function() {
  $('#employee-database').jplist ({
    itemsBox: '.row',
    itemPath: '.tbl-item',
    panelPath: '.jplist-panel'
  });
});

// Initializes the Bootstrap Modal to display extra information

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Creates a database of 20 employees in JSON format

let database = {
  "employees": [
    { "Name": "Stefan", "Address": "Street 1", "Info": "Extra Info 1" },
    { "Name": "Tobias", "Address": "Road 2", "Info": "Extra Info 2" },
    { "Name": "Kira", "Address": "Lane 3", "Info": "Extra Info 3" },
    { "Name": "Joan", "Address": "Avenue 4", "Info": "Extra Info 4" },
    { "Name": "Henk", "Address": "Rue 5", "Info": "Extra Info 5" },
    { "Name": "Peter", "Address": "Avenida 6", "Info": "Extra Info 6" },
    { "Name": "Ramon", "Address": "Plein 7", "Info": "Extra Info 7" },
    { "Name": "Anita", "Address": "Square 8", "Info": "Extra Info 8" },
    { "Name": "Rob", "Address": "Crossroads 9", "Info": "Extra Info 9" },
    { "Name": "Dirk", "Address": "Junction 10", "Info": "Extra Info 10" },
    { "Name": "Jelmer", "Address": "Exit 11", "Info": "Extra Info 11" },
    { "Name": "Lieke", "Address": "Laan 12", "Info": "Extra Info 12" },
    { "Name": "Inge", "Address": "Afrit 13", "Info": "Extra Info 13" },
    { "Name": "Alexia", "Address": "Weg 14", "Info": "Extra Info 14" },
    { "Name": "Beckie", "Address": "Straat 15", "Info": "Extra Info 15" },
    { "Name": "Clarence", "Address": "Hof 16", "Info": "Extra Info 16" },
    { "Name": "Tyler", "Address": "Bahn 17", "Info": "Extra Info 17" },
    { "Name": "Josef", "Address": "Block 18", "Info": "Extra Info 18" },
    { "Name": "Zoe", "Address": "Erf 19", "Info": "Extra Info 19" },
    { "Name": "Dayle", "Address": "Compound 20", "Info": "Extra Info 20" }
  ]
};

// Iterates through the database and pushes the entries into separate arrays

function listEmployees() {
  returnName  = []
  returnAddress = []
  returnInfo = []

  for (let i in database.employees) {
    returnName.push(database.employees[i].Name)
    returnAddress.push(database.employees[i].Address)
    returnInfo.push(database.employees[i].Info)
  }
  return {
    name: returnName,
    address: returnAddress,
    info: returnInfo
  };
}

// Stores the return values of the listEmployees function into new variables

let employees = listEmployees();
let eName = employees.name;
let eAddress = employees.address;
let eInfo = employees.info;

// Gives each name and extra info a unique id in class "tbl-item",
// to be used in the jQuery plugin jplist for pagination and sorting purposes

function splitNames() {
  let divName = []

  for (let i in eName) {
    let newName = document.createElement('div');
    newName.id = eName[i];
    newName.className = "tbl-item";
    newName.innerHTML = '<b>' + eName[i] + '</b>' + '<br> Address:  ' + eAddress[i] + '<button type="button" style="float:right" class="btn btn-default btn-xs" data-toggle="modal" data-target="#myModal">' + 'Extra info' + '</button>';
    document.getElementById("employee-name").appendChild(newName)
    divName.push(newName)
  }
  return {
    divName
  }
}

splitNames();

function splitInfo() {
  let divInfo = []

  for (let i in eName) {
    let newInfo = document.createElement('div');
    newInfo.id = eName[i];
    newInfo.className = "tbl-info";
    newInfo.innerHTML = 'Extra information for ' + eName[i] + ':  ' + eInfo[i] + '<br><br>';
    document.getElementById("employee-info").appendChild(newInfo)
    divInfo.push(newInfo)
  }
  return {
    info: divInfo
  }
}

splitInfo();
