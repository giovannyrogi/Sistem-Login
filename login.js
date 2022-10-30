const userName = document.getElementById("username");
const userPassword = document.getElementById("password");
const formContainer = document.getElementById("formLogin");
const currentUser = document.getElementById("user");


const onLogin = () => {
    if(localStorage.getItem('username') != userName.value && localStorage.getItem('password') != userPassword.value){
        alert("username dan password yang dimasukkan salah!");
    }
    else if(localStorage.getItem('username') != userName.value){
        alert("Username yang dimasukkan salah!");
    }
    else if(localStorage.getItem('password') != password.value){
        alert("password yang dimasukkan salah!");
    }
    else{
        alert("berhasil login sebagai " + localStorage.getItem('username'));
    }
}





