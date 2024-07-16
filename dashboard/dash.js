const data = JSON.parse(localStorage.getItem("userData"));
let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img'); 

const showData = () => {
    const { user, userProfile, islogin } = data;
    console.log()
    Username.innerText = user;
    ImageProfile.src =  userProfile;
    islogin === true
}
showData();



const logout = () => {
    localStorage.clear();
    window.location.href = '../signUp/index.html'
    data.islogin === false
}