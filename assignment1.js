let tableData = [
    ["abc", "21", "19-july-2001", "abc@gmail.com", "Gemini Solutions"],
    ["def", "22", "13-june-2000", "def@gmail.com", "Gemini Solutions"],
    ["pqr", "23", "1-aug-1999", "pqr@gmail.com", "Gemini Solutions"],
    ["mno", "24", "4-july-1998", "mno@gmail.com", "Gemini Solutions"],
    ["xyz", "25", "25-april-1997", "xyz@gmail.com", "Gemini Solutions"],

];
//Self invoking function
(function(){let table= document.createElement('table');  //To create a table, we will first create the table tag.
let thead=document.createElement('thead');             // Then we will store this tag into a variable table
let tbody=document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table); //Adding the entire table to the body tag
let row1=document.createElement('tr');              //Creating and adding data to first row of the table
let heading1=document.createElement('th');
heading1.innerHTML ="Name";
let heading2 = document.createElement('th');
heading2.innerHTML = "Age";
let heading3 = document.createElement('th');
heading3.innerHTML = "DOB";
let heading4 = document.createElement('th');
heading4.innerHTML = "Email";
let heading5 = document.createElement('th');
heading5.innerHTML = "Company";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
row1.appendChild(heading5);
thead.appendChild(row1);
//let tablebody=document.createElement('tbody');

for(let i=0;i<5;i++){
    let row=document.createElement('tr');
    let td1=document.createElement('td');
    let name=document.createTextNode(tableData[i][0]);
    td1.appendChild(name);
    let td2=document.createElement('td');
    let age=document.createTextNode(tableData[i][1]);
    td2.appendChild(age);
    let td3=document.createElement('td');
    let dob=document.createTextNode(tableData[i][2]);
    td3.appendChild(dob);
    let td4=document.createElement('td');
    let email=document.createTextNode(tableData[i][3]);
    td4.appendChild(email);
    let td5=document.createElement('td');
    let company=document.createTextNode(tableData[i][4]);
    td5.appendChild(company);
    row.append(td1,td2,td3,td4,td5);
    tbody.append(row);
}
table.append(tbody);
})();