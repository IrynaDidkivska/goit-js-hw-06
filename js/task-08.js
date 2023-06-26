
const onLoginForm = document.querySelector('.login-form');

onLoginForm.addEventListener('submit', validationForm)

function validationForm(event ) {
    const { target: { elements: { email, password } } } = event;
    event.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    if (userEmail.length === 0 || userPassword.length === 0 ) {
        alert('All fields should be filled out')
        return 
    }
    const userData = {
    email: userEmail,
    password: userPassword};
    
   
    event.target.reset();
   
     console.log(userData);
}

