const ToggleLogin = ()=> {
    const loginContainer = document.querySelector("#login-signup--forms");
    const loginBtn = document.querySelector("#login-li");
    let display = "none";

    loginBtn.addEventListener("click", () => {

        if (display === "none") {
            loginContainer.style.display = "flex";
            console.log(display);
            
            display="flex";

        } else {
            loginContainer.style.display = "none";
            console.log(display);
            display="none";
        }

    })
}

export default ToggleLogin; 