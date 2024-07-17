
let formFeild = document.querySelectorAll("form input");
const [userName, userEmail, userPassword, userPic] = formFeild;

let imgUrl;
let ArrayData = JSON.parse(localStorage.getItem("userData")) || [];

function logAlr (){
  let loged = ArrayData.find((item)=>{  
    return item.islogin === true;
  }) 
if (loged) {
  window.location.href = "../dashboard/index.html"
}
}
logAlr();
// user signUp
const signup = () => {
  event.preventDefault();

  if (
    userName.value !== "" &&
    userEmail.value !== "" &&
    userPassword.value !== ""&&
    userPic.value !== ""
  ) {
    let alreadyAcc = ArrayData.find((item) => {
  
      return item.signUpEmail === userEmail.value;
    });

    if (alreadyAcc) {
      alert("Sorry Account has already exists");
    } else {
      let dataObj = {
        signUpEmail: userEmail.value,
        signupPassword: userPassword.value,
        user: userName.value,
        userProfile: imgUrl,
        isLogin: false,
      };
      ArrayData.push(dataObj);
      localStorage.setItem("userData", JSON.stringify(ArrayData));
      window.location.href = "../signIn/index.html";
    }
  } else {
    alert("REQUIRED DATA ");
  }
};


// User image

const uploadImage = () => {
  let img = userPic.files[0];

  let fileRead = new FileReader();

  fileRead.onload = () => {
    imgUrl = fileRead.result;
  };
  fileRead.readAsDataURL(img);
 

};
