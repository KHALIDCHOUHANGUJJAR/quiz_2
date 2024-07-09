let formFeild = document.querySelectorAll("form input");
const [userName, userEmail, userPassword,userPic] = formFeild;

console.log(userEmail, userName, userPassword,userPic);
 
let imgUrl;
// user signUp
const signup = () => {
  event.preventDefault();
  if (
    userName.value !== "" &&
    userEmail.value !== "" &&
    userPassword.value !== ""
  ) {
    let obj = {
      signUpEmail: userEmail.value,
      signupPassword: userPassword.value,
      user: userName.value,
      userProfile: imgUrl,
    };
    localStorage.setItem("userData", JSON.stringify(obj));
    window.location.href = "../signIn/index.html";
  } else {
    alert("bhai data to dal do ");
  }
};



// User image

const uploadImage = () => {
  let img = userPic.files[0];
  console.log(userPic, img);
  let fileRead = new FileReader();
  
  fileRead.onload = () => {
      imgUrl = fileRead.result;
  
  }
  fileRead.readAsDataURL(img)
} 