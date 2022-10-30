const newUserName = document.getElementById("newusername");
const newUserPassword = document.getElementById("newpassword");

var currentUsername = ""
var currentPassword = ""

const onRegis = () => {
    
    if(newUserName.value === "" && newUserPassword === ""){
        alert("username dan password tidak boleh kosong");
    }
    else if(newUserName.value === "") {
        alert("username tidak boleh kosong");
    }
    else if(newUserPassword.value === ""){
        alert("password tidak boleh kosong");
    }
    else{
        alert("Berhasil Daftar");
        localStorage.setItem("username", newUserName.value);
        localStorage.setItem("password", newUserPassword.value);
        console.log(newUserName.value, newUserPassword.value);
    } 
}