function validateForm(){
    var name = document.form.name.value;
    var email = document.form.email.value;
    var mobile = document.form.mobile.value;
    //validate name
    var val_name=/^[a-zA-Z\s]+$/; 
    var val_email=/^\S+@\S+\.\S+$/;
    var val_mobile=/^\d{10}$/;
    var rname=false;
    var remail=false;
    var rmobile=false;
    if(val_name.test(name))
      rname=true;
    else
      rname=false;
    if(val_email.test(email))
     remail=true;
     else
      remail=false;
    if(mobile == ""){
        rmobile=true;

    }else{
        if(val_mobile.test(mobile))
        rmobile=true;
        else
         rmobile=false;
    }
    if(!rname && !remail && !rmobile){
        alert("Enter valid name,email,mobile)_no");
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("mobile").value="";
    }
    else if(!rname && !remail){
      alert("Enter valid name and email_id");
      document.getElementById("username").value="";
      document.getElementById("email").value="";
    }
    else if(!rname && !rmobile){
      alert("Enter valid name and mobile");
      document.getElementById("username").value="";
        document.getElementById("mobile").value="";
    }
    else if(!rname){
      alert("Enter valid name");
      document.getElementById("username").value="";
      document.getElementById("username").focus();
    }
    else if(!remail){
      alert("Enter valid email");
      document.getElementById("email").value="";
      document.getElementById("email").focus();
    }
    else if(!rmobile){
      alert("Enter valid mobile");
      document.getElementById("mobile").value="";
      document.getElementById("mobile").focus();
    }
    if(remail && rmobile && rname){
      setData();
     getData();
    return true;
    }
}
function setData(){
  var user_name=document.getElementById('username').value;
var user_email=document.getElementById('email').value; 
var user_mobile=document.getElementById('mobile').value;                 
localStorage.setItem("userName", user_name);
localStorage.setItem("userEmail", user_email);
localStorage.setItem("userMobile", user_mobile);
}
function getData(){
  const tablebody=document.getElementById('tablebody');
  const tr=document.createElement("tr");
  const td1=document.createElement('td'); 
const name1=document.createTextNode(localStorage.getItem("userName"));
td1.appendChild(name1);

const td2=document.createElement('td');
const email1=document.createTextNode(localStorage.getItem("userEmail"));
td2.appendChild(email1);
const td3=document.createElement('td');
const mobile1=document.createTextNode(localStorage.getItem("userMobile"));
td3.appendChild(mobile1);
tr.append(td1,td2,td3);
tablebody.append(tr);
}