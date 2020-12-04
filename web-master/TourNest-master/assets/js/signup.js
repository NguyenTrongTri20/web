
let submit = document.getElementById('submit');

submit.addEventListener('click',addUser);

function addUser()
{
    let arrayUser;

    if (localStorage.getItem("User") === null) {
        arrayUser = [];
    }
    else
    {
        arrayUser = JSON.parse(localStorage.getItem("User"));
    }

    let userName = document.getElementById('userName').value;
    let passWord = document.getElementById('passWord').value;

    let User = {
        name:userName,
        pass:passWord
    }

    arrayUser.push(User);
    let stringArray = JSON.stringify(arrayUser);
    localStorage.setItem("User",stringArray);
}
function checkValid()
{
    let userName = document.getElementById('userName');
    let passWord = document.getElementById('passWord');
    let rePassWord = document.getElementById('rePassWord');
    let email = document.getElementById('email');
    
    if(userName.value === "")
    {
        document.getElementById("notifyUser").innerHTML = "Vui lòng điền vào đây";
        userName.style.borderColor = "red";
        userName.focus()
    }
    else if(passWord.value === "")
    {
        document.getElementById("notifyPassWord").innerHTML = "Vui lòng điền vào đây";
        passWord.style.borderColor = "red";
        passWord.focus();
        
    }
    else if(rePassWord.value === "")
    {
        document.getElementById("notifyRePassWord").innerHTML = "Vui lòng điền vào đây";
        rePassWord.style.borderColor = "red";
        rePassWord.focus()
    }
    
    else if(email.value === "")
    {
        document.getElementById("notifyEmail").innerHTML = "Vui lòng điền vào đây";
        email.style.borderColor = "red";
        email.focus()
    }



    if(userName.value !== "")
    {
        document.getElementById("notifyUser").innerHTML = "";
        userName.style.borderColor = "#067d8b";
    }
    if(passWord.value !== "")
    {
        document.getElementById("notifyPassWord").innerHTML = "";
        passWord.style.borderColor = "#067d8b";
    }
    if(rePassWord.value !== "")
    {
        document.getElementById("notifyRePassWord").innerHTML = "";
        rePassWord.style.borderColor = "#067d8b";
        checkPassWord();
    }
    if(email.value !== "")
    {
        document.getElementById("notifyEmail").innerHTML = "";
        email.style.borderColor = "#067d8b";
    }

}
function checkPassWord()
{
    let passWord = document.getElementById('passWord');
    let rePassWord = document.getElementById('rePassWord');

    if(passWord.value !== rePassWord.value)
    {
        document.getElementById("notifyRePassWord").innerHTML = "Nhập sai";
        rePassWord.style.borderColor = "red";
        rePassWord.focus()
        
    }
    else
    {
        document.getElementById("notifyRePassWord").innerHTML = "";
        rePassWord.style.borderColor = "#067d8b";
    }
}

function checkNumberPhone()
{
    let numberPhone = document.getElementById('numberPhone');
    let value = numberPhone.value;
    if(value.length() < 10)
    {
        document.getElementById("notifyNumberPhone").innerHTML = "Số điện thoại phải có 10 kí tự";
        numberPhone.style.borderColor = "red";
        numberPhone.focus()
    }
    else
    {
        document.getElementById("notifyNumberPhone").innerHTML = "";
        numberPhone.style.borderColor = "#067d8b";
    }
    let isCharacter = false;
    let arrNumber = value.split("");
    for(let num of arrNumber)
    {
        
        if(isNaN(num) === true)
        {
            isCharacter = true;
            break;
        }
    }
    if(isCharacter === true)
    {
        document.getElementById("notifyNumberPhone").innerHTML = "Số điện thoại phải là số";
        numberPhone.style.borderColor = "red";
        numberPhone.focus()
    }
    else
    {
        document.getElementById("notifyNumberPhone").innerHTML = "";
        numberPhone.style.borderColor = "#067d8b";
    }

}
function checkName()
{
    let name = document.getElementById("name");
    let value = name.value;
    let arrName = value.split("");
    let isNumber = false;
    for(let character of arrName)
    {
        if(isNaN(character) === false)
        {
            isNumber = true;
        }
    }
    if(isNumber === true){
        document.getElementById("notifyName").innerHTML = "Tên không được chứa số";
        name.style.borderColor = "red";
        name.focus()
    }
}
