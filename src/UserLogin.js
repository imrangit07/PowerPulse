const UserLogin = () => {
    document.querySelector("#user-login").addEventListener("click", (e) => {
        const loginContainer = document.querySelector("#login-signup--forms");
       

        let user_Id = document.querySelector("#user-email--username").value;
        let user_password = document.querySelector("#user-password").value;

        let { userId, userpassword } = {
            userId: user_Id,
            userpassword: user_password,
        }
        e.preventDefault()

        const { userName, email, password } = JSON.parse(localStorage.getItem("user"));
        console.log(userName, email, password);
        console.log(userId, userpassword);

        if ((userName === userId || email === userId) && (password === userpassword)) {
            alert("Login successfully");
            loginContainer.style.display = "none";

        } else {
            alert("Please fill correct details");
        }


    })

}

export default UserLogin;