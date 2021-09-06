// create data to the local storage
const profile = () => {
  var result = JSON.parse(localStorage.getItem("data")) || [];

  var profile = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    stack: document.getElementById("stack").value,
  };
  //if nothing is selected add new details
  if (selectedRecord === -1) {
    result.push(profile);
    //else locate the record index selected, delete the row and update with new details
  } else {
    result.splice(selectedRecord, 1, profile);
  }

  localStorage.setItem("data", JSON.stringify(result));

  displayData();
  searchProfile();
  clearForm();
  // removeItem();
  // window.addEventListener("DOMContentLoaded", () => {

  // })
  // document.querySelector("form").reset();
  // document.getElementById("fname").focus();
  // e.preventDefault();
};

displayData = () => {
  // console.log(localStorage.getItem("data"));
  var record = JSON.parse(localStorage.getItem("data"));
  // var displaySearch = JSON.parse(localStorage.getItem("search"))
  if (localStorage.getItem("data")) {
    // var output = document.querySelector("tbody");
    document.querySelector("tbody").innerHTML = "";
    record.forEach((person, index) => {
      document.querySelector("tbody").innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${person.fname}</td>
                            <td>${person.lname}</td>
                            <td>${person.email}</td>
                            <td>${person.phone}</td>
                            <td>${person.stack}</td>
                            <td><button id="edit" onClick = "editData(${index})">Edit</button>
                                <button id="delete" onClick = "removeData(${index})")">Delete</button>
                            </td>
                        </tr>
                            `;
    });
  }
  //  else {
  //   document.querySelector("tbody").innerHTML = "";
  //     displaySearch.forEach((person, index) => {
  //       document.querySelector("tbody").innerHTML += `
  //                         <tr>
  //                             <td>${index + 1}</td>
  //                             <td>${person.fname}</td>
  //                             <td>${person.lname}</td>
  //                             <td>${person.email}</td>
  //                             <td>${person.phone}</td>
  //                             <td>${person.stack}</td>
  //                             <td><button id="edit" onClick = "editData(${index})">Edit</button>
  //                                 <button id="delete" onClick = "removeData(${index})")">Delete</button>
  //                             </td>
  //                         </tr>
  //                             `;
  //     });
  // }
};
displayData();

// Delete
removeData = (index) => {
  if (confirm(`Are you sure?`)) {
    let record = JSON.parse(localStorage.getItem("data"));
    record.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(record)); //save the record again
    displayData();
  }
};

// Edit function
var selectedRecord = -1; //nothing has been selected
editData = (index) => {
  let record = JSON.parse(localStorage.getItem("data"));
  selectedRecord = index; //when edit button is clicked, the selected record will have a positive number
  let person = record[index];

  document.getElementById("fname").value = person.fname;
  document.getElementById("lname").value = person.lname;
  document.getElementById("email").value = person.email;
  document.getElementById("phone").value = person.phone;
  document.getElementById("stack").value = person.stack;
  document.getElementById("submit").innerHTML = "Update";
};

clearForm = () => {
  selectedRecord = -1;
  document.getElementById("fname").value;
  document.getElementById("lname").value;
  document.getElementById("email").value;
  document.getElementById("phone").value;
  document.getElementById("stack").value;
  document.getElementById("clear").innerHTML = "Clear";
};

// Search Record
searchProfile = () => {
  let filteredRecord = document.getElementById("search")
  let record = JSON.parse(localStorage.getItem("data"))

  let searchResult = record.filter((user) => {
    return user.fname.toLowerCase() == filteredRecord.value 
    
  });
  // console.log(searchResult);
  localStorage.setItem("search", JSON.stringify(searchResult));
  
  
  var displaySearch = JSON.parse(localStorage.getItem("search"));
  if (localStorage.getItem("search")) {
    document.querySelector("tbody").innerHTML = "";
    displaySearch.forEach((person, index) => {
      document.querySelector("tbody").innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${person.fname}</td>
                            <td>${person.lname}</td>
                            <td>${person.email}</td>
                            <td>${person.phone}</td>
                            <td>${person.stack}</td>
                            <td><button id="edit" onClick = "editData(${index})">Edit</button>
                                <button id="delete" onClick = "removeData(${index})")">Delete</button>
                            </td>
                        </tr>
                            `;
    });
  }

};

