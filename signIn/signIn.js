let formFeild = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formFeild;
const data = JSON.parse(localStorage.getItem("userData"));
let loader =document.getElementById('loader')
const login = () => {
  event.preventDefault();
  const { signUpEmail, signupPassword } = data;
  if (
   ( signUpEmail === loginEmail.value) &&
    signupPassword === loginPassword.value
  ) {
      
    loader.classList.add('loader')
    setTimeout(()=>{
window.location.href="../dashboard/index.html"
loader.classList.remove('loader') 
},2000)
  } else {
    alert('Invalid credentils')
  }
};
