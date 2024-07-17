let formFeild = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formFeild;

const data = JSON.parse(localStorage.getItem("userData"));
let loader = document.getElementById("loader");

if (!data === null) {
 
let logedAlr = () => {
  let isloged = data.find((item) => {
    return item.islogin === true;
  });
  if (isloged) {
    window.location.href = "../dashboard/index.html"
  }
}

logedAlr();
 
}

const login = () => {
  event.preventDefault();
  
  if (data !== null) {
 
    let findLogin = data.find((item) => {
      return item.signUpEmail === loginEmail.value;
    });
    if (findLogin) {
      findLogin.isLogin = true;
      localStorage.setItem("userData", JSON.stringify(data));
      if (findLogin.signUpEmail === "admin@admin.com") {
        loader.classList.add("loader");
        setTimeout(() => {
          window.location.href = "../admin/index.html";
          loader.classList.remove("loader");
        }, 2000);
      } else if (findLogin.signUpEmail === loginEmail.value) {
        loader.classList.add("loader");
        setTimeout(() => {
          window.location.href = "../dashboard/index.html";
          loader.classList.remove("loader");
        }, 2000);
      }
    } else {
      alert("No Data Found");
    }
    
  }
  else{
    alert("Email is not registred")
  }
  };
