const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});



// class="fa-regular fa-eye"
// class="fa-regular fa-eye-slash"
const $eye = document.querySelector("#eyeview");
const inputPassword = document.querySelector("#password");

// $eye.addEventListener("click", () => {

//     if (inputPassword.type == "password"){
//         inputPassword.type = "text";
//         $eye.classList.remove('fa-regular fa-eye');
//         $eye.classList.add('fa-regular fa-eye-slash');
//     } else{
//         inputPassword.type = "password";
//         $eye.classList.remove('fa-regular fa-eye-slash');
//         $eye.classList.add('fa-regular fa-eye');
//     }

// });

$eye.addEventListener("click", buttonToggle)

function buttonToggle(){
    
   if(inputPassword.type == "password"){
        inputPassword.type = "text";
        $eye.classList.remove('fa-eye');
        $eye.classList.add('fa-eye-slash');
   }else{
       inputPassword.type = "password";
       $eye.classList.remove('fa-eye-slash');
       $eye.classList.add('fa-eye');
    }

}
