

const UserLogin = () => {
    const userLogin = document.querySelector("#user-login");

    const handelLogin = (e) => {
        e.preventDefault();
        const { userName, email, password } = JSON.parse(localStorage.getItem("user"));

        const loginContainer = document.querySelector("#login-signup--forms");



        const user_Id = document.querySelector("#user-email--username").value.trim();
        const user_password = document.querySelector("#user-password").value;

        const { userId, userpassword } = {
            userId: user_Id,
            userpassword: user_password,
        }

        // console.log(userName, email, password);
        // console.log(userId, userpassword);

        if (!((userName === userId) || (email == userId))) {
            document.querySelector("#user-id-err").textContent = "User Name/Id is not found!";
        }
        else if (!(password === userpassword)) {
            document.querySelector("#user-pass-err").textContent = "Password is Wrong!";
        }

        if ((userName === userId || email === userId) && (password === userpassword)) {
            window.location.href = "http://localhost:5173/";
        }


    }
    userLogin.addEventListener("click", handelLogin)

};

// This is for Logout 
const UserLogout = ()=>{
    const Logout = document.querySelector("#logout");
    const handelLogout = ()=>{
        localStorage.removeItem("user")

        // alert("User Logout Successfully!")

        Swal.fire("User Logout Successfully!");
        
        window.location.href = "http://localhost:5173/";

    }

    Logout.addEventListener("click",handelLogout)
};


export {UserLogin, UserLogout} ;