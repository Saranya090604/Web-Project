const btn = document.getElementById('btn_login');
const uName = document.getElementById('Uname');
const uPassword = document.getElementById('uPassword');

const uName_val = uName.value;
const uPassword_val = uPassword.value;

btn.addEventListener('click', function () {
    console.log({
        uName_val,
        uPassword_val,
    });
});