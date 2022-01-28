const burgerDiv=document.querySelector(".burger-div")
const mobileView=document.querySelector(".mobile-view-navbar-pop-up")
const magGlass=document.querySelector(".mag-glass")
const searchBar=document.querySelector(".search-container-2")
const signInBtn=document.querySelector(".sign-in")
const logInDisplay=document.querySelector(".log-in-page-container")
const exitLogIn=document.querySelectorAll(".exit-btn-container")
const navPosition=document.querySelector(".nav-container")
const signInMobileView=document.querySelector(".sign-in-mobile-view")
const loginPageLink=document.querySelector(".login-page-link")
const signUpDisplay=document.querySelector(".sign-up-section")
const logInContentDisplay=document.querySelector(".log-in-section")
const logInBtn=document.querySelector(".log-in-form-submit-btn");
const invalidUserPass=document.querySelector(".invalid-user-pass")
const signUpPageLink=document.querySelectorAll(".sign-up-page-link")
let signUpBtn=document.querySelector(".sign-up-form-submit-btn");
let signUpEmail=document.querySelector(".sign-up-email");
let signUpErrMsg=document.getElementById("sign-up-err");
let signUpPassword=document.querySelector(".sign-up-password");
let signUpConfirmPassword=document.querySelector(".sign-up-confirm-password");
let signUpName=document.querySelector(".sign-up-name")
let logInUserPassword=document.querySelector(".log-in-user-pass");
const backToTop=document.querySelector(".back-to-top");
let signUpErrArray=[];
let logInUserEmail=document.querySelector(".log-in-user-email");
let userPass=[];
window.onscroll= function(){goTop()}
function goTop(){
    if(document.body.scrollTop>20 ||document.documentElement.scrollTop>20){
        backToTop.classList.add("user-scrolled-down")
    }else{
        backToTop.classList.remove("user-scrolled-down")
    }
}
burgerDiv?.addEventListener("click",function(){
    mobileView?.classList.toggle("is-active")
})
// @ts-ignore
magGlass.addEventListener("click",function(){
    // @ts-ignore
    searchBar.classList.toggle("active")
})
// @ts-ignore
signInBtn.addEventListener("click",function(){
    // @ts-ignore
    logInDisplay.classList.add("logInFormOn");
    // @ts-ignore
    navPosition.classList.add("logInFormBackground")
})
for(let i=0;i<exitLogIn.length;i++){
    exitLogIn[i].addEventListener("click",function(){
        // @ts-ignore
        logInDisplay.classList.remove("logInFormOn")
        // @ts-ignore
        navPosition.classList.remove("logInFormBackground")
    })
}

// @ts-ignore
signInMobileView.addEventListener("click",function(){
    // @ts-ignore
    logInDisplay.classList.add("logInFormOn");
    // @ts-ignore
    navPosition.classList.add("logInFormBackground")
})



for(let i=0;i<signUpPageLink.length;i++){
    signUpPageLink[i].addEventListener("click",function(){
        // @ts-ignore
        logInContentDisplay.classList.toggle("loginPageNotActive")
        // @ts-ignore
        signUpDisplay.classList.toggle("signUpPageActive")
    
    })
}
let checkEmail=function(signUpEmail){
    let regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailTest=regex.test(signUpEmail)
    if(emailTest){
        return true
    }else{
        signUpErrArray.push("please key in a valid email!!!")
        return false;
    }
}
let checkPassword=function(signUpPassword){
    let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/;
    let passwordTest=passwordRegex.test(signUpPassword);
    if(passwordTest){
        return true;
    }else{
        signUpErrArray.push("password must contain at least 1 lower case letter, 1 upper case letter, 1 digit and one special characters and which must be at least 8 characters long.!!!");
        return false;
    }
}
let comparePassword=function(password,confirmPassword){
    if(password===confirmPassword){
        return true
    }else{
        signUpErrArray.push("passwords do not match");
        return false;
    }  
}
let checkName=function(signUpName){
    if(signUpName===""){
        signUpErrArray.push("please key in a valid name!!!");
        return false;
    }else{
        return true;
    }
}
function checkIfEmailIsTaken(usermail){
    for(let i=0;i<userPass.length;i++){
        if(usermail===userPass[i].email){
            signUpErrArray.push("email taken!!!")
            return false
        }
        
    }return true
}


let failSignInForm=false
// @ts-ignore
signUpBtn.addEventListener("click",function(){
    
    // @ts-ignore
    let validEmail=checkIfEmailIsTaken(signUpEmail.value);
    // @ts-ignore
    let emailResult=checkEmail(signUpEmail.value);
    // @ts-ignore
    let passwordResult=checkPassword(signUpPassword.value);
    // @ts-ignore
    let comparePasswordResult=comparePassword(signUpPassword.value,signUpConfirmPassword.value);
    // @ts-ignore
    let nameResult=checkName(signUpName.value);
    let errMsg="";
    
    if(emailResult&&passwordResult&&comparePasswordResult&&nameResult&&validEmail){
        // @ts-ignore
        signUpErrMsg.style.display="none";
        userPass.push({
            // @ts-ignore
            email:signUpEmail.value,
            // @ts-ignore
            password:signUpPassword.value,
            // @ts-ignore
            name:signUpName.value
    })
    }else{
        // @ts-ignore
        signUpErrMsg.style.display="block";
        for(let i=0;i<signUpErrArray.length;i++){
            // @ts-ignore
            errMsg+=`<li>${signUpErrArray[i]}</li>`  ;
            // @ts-ignore
            signUpErrMsg.innerHTML=`<ol>${errMsg}</ol>` 
        }  
    }
    signUpErrArray=[]

    
    

    
})
function checkUserLogInEmail(userEmail,userPassword){
    for(let i=0;i<userPass.length;i++){
        if(userEmail=== userPass[i].email&& userPassword=== userPass[i].password){
            return true;
        }
    }return false
}


// @ts-ignore
logInBtn.addEventListener("click",function(){
    // @ts-ignore
    let userName=checkUserLogInEmail(logInUserEmail.value,logInUserPassword.value);
    if(userName===false){
        // @ts-ignore
        invalidUserPass.classList.add("logInInvalid");
    }else{
        // @ts-ignore
        invalidUserPass.classList.remove("logInInvalid");
    }
    
})




