const ToggleLogin = ()=> {
    const loginContainer = document.querySelector("#login-signup--forms");
    const loginBtn = document.querySelector("#login-li");
    let count = 0;

    loginBtn.addEventListener("click", () => {

        if (count === 0) {
            loginContainer.style.display = "flex";
            console.log("flex");
            count++;

        } else {
            loginContainer.style.display = "none";
            console.log("none");
            count--;
        }

    })
}

export default ToggleLogin; 