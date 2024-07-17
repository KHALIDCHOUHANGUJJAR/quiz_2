
let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img');
let user_info = document.getElementById("tbodoy")
const data = JSON.parse(localStorage.getItem("userData"));


// hum ny find login ek common bna lia hai
let fndLgn = data.find((item) => {
    return item.isLogin === true;
});

 
const redrct = () => {
    if (!fndLgn) {
        window.location.href = '../signUp/index.html'
    }
}
redrct();

const showData = () => {
    const { user, userProfile, signupPassword} = fndLgn;
    Username.innerText = "Well Come " + user;
    ImageProfile.src = userProfile;

}
showData();
 


const logout = () => {
   
    if (fndLgn) {
        fndLgn.isLogin = false;

         localStorage.setItem('userData', JSON.stringify(data))
         window.location.href = '../signIn/index.html'


        }

}