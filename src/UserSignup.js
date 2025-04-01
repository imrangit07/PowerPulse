const UserSignup = () => {
    const signupBtn = document.querySelector("#signup-submit--btn");

    const handleSignup = (e) => {
        e.preventDefault();

        const selectUserName = document.querySelector("#userName");
        const selectUserEmail = document.querySelector("#userEmail");
        const selectUserPassword = document.querySelector("#userPassword");

        const nameError = document.querySelector("#userName-err");
        const emailError = document.querySelector("#userEmail-err");
        const passwordError = document.querySelector("#userPassword-err");

        const userDetails = {
            userName: selectUserName.value.trim(),
            email: selectUserEmail.value.trim(),
            password: selectUserPassword.value,
        };



        if (userDetails.userName === "") {
            nameError.textContent = "User Name is Required!";
            selectUserName.focus();
            return;
        }
        else if (userDetails.email === "") {
            emailError.textContent = "Email is Required!";
            selectUserEmail.focus();
            return;
        }
        else if (!(userDetails.email.includes("@gmail.com"))) {
            emailError.textContent = "Enter Valide Email Id Must Have @gmail.com";
            selectUserEmail.focus();
            return;
        }
        else if (userDetails.password === "") {
            passwordError.textContent = "Password is Required!";
            selectUserPassword.focus();
            return;
        }
        else {
            const container = document.getElementById('login-signup--container');
            const toggleLogin = document.getElementById('loginBtn');
            const ToggleSignup = document.getElementById('signupBtn');


            container.classList.remove('active');
            toggleLogin.classList.add('active');
            ToggleSignup.classList.remove('active');

            selectUserName.value = "";
            selectUserEmail.value = "";
            selectUserPassword.value = "";
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

        }
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);


        if (!user) {
            localStorage.setItem("user", JSON.stringify(userDetails));
        }
        else if (userDetails.email === user.email) {
            // alert("This Email Id is Already Exists. Go and Login!");
            selectUserEmail.focus();
            return;
        }

    }

    signupBtn.addEventListener("click", handleSignup);
};

export default UserSignup;