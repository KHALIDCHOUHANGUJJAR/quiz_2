let formFeild = document.querySelectorAll("form input");
const [userName, userEmail, userPassword,userPic] = formFeild;

let mulArr = JSON.parse(localStorage.getItem('uerData')) || [];
let imgUrl;
// user signUp
const signup = () => {
  event.preventDefault();
  if (
    userName.value !== "" &&
    userEmail.value !== "" &&
    userPassword.value !== ""
  ) {
    let dataObj = {
      signUpEmail: userEmail.value,
      signupPassword: userPassword.value,
      user: userName.value,
      userProfile: imgUrl,
    };
    mulArr.push(dataObj)
    localStorage.setItem("userData", JSON.stringify(mulArr));
    window.location.href = "../signIn/index.html";
  } else {
    alert("bhai data to dal do ");
  }
};



// User image

const uploadImage = () => {
  let img = userPic.files[0];
  
  let fileRead = new FileReader();
  
  fileRead.onload = () => {
      imgUrl = fileRead.result;
  
  }
  fileRead.readAsDataURL(img)
} 