let submit = document.getElementById("submit");
submit.addEventListener('click',logIn);
function logIn()
{
    let check;
    let userNameInput =document.getElementById('userName');
    let passWordInput = document.getElementById('passWord');

    let arrayUser = loadData();
    for(let User of arrayUser)
    {
        if(userNameInput.value === User.name && passWordInput.value === User.pass)
        {
            check = true;
            document.getElementById('userName').value = "";
            document.getElementById('passWord').value = "";
            alert("Đăng nhập thành công");
            window.location.href = 'index.html';
        }
        else
        {
            alert("Sai tài khoản mật khẩu");
        }
    }
}
function loadData()
{
    let arrayUser;

    if (localStorage.getItem("User") === null) {
        arrayUser = [];
    }
    else
    {
        arrayUser = JSON.parse(localStorage.getItem("User"));
    }
    return arrayUser;
}
function check()
{
    let userNameInput =document.getElementById('userName');
    let passWordInput = document.getElementById('passWord');

    if(userNameInput.value === "")
    {
        document.getElementById("notifyUser").innerHTML = "Vui lòng điền vào đây";
        userNameInput.style.borderColor = "red";
        userNameInput.focus()
    } 
    
    else if(passWordInput.value === "")
    {
        document.getElementById("notifypassWord").innerHTML = "Vui lòng điền vào đây";
        passWordInput.style.borderColor = "red";
        passWordInput.focus()
    }

    if(userNameInput.value !== "")
    {
        document.getElementById("notifyUser").innerHTML = "";
        userNameInput.style.borderColor = "#067d8b";
    }
    if(passWordInput.value !== "")
    {
        document.getElementById("notifypassWord").innerHTML = "";
        passWordInput.style.borderColor = "#067d8b";
        
    }
}
