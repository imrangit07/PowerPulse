const UserSignup = () => {
    const signupBtn = document.querySelector("#signup-submit--btn");

    const handleSignup = (e) => {
        e.preventDefault();

        const userDetails = {
            userName: document.querySelector("#userName").value.trim(),
            email: document.querySelector("#userEmail").value.trim(),
            password: document.querySelector("#userPassword").value,
        };



        if (userDetails.userName === "") {
            document.querySelector("#userName-err").textContent = "User Name is Required!";
            document.querySelector("#userName").focus();
            return;
        } else if (userDetails.email === "") {
            document.querySelector("#userEmail-err").textContent = "Email is Required!";
            document.querySelector("#userEmail").focus();
            return;
        }
        else if (!(userDetails.email.includes("@gmail.com"))) {
            document.querySelector("#userEmail-err").textContent = "Enter Valide Email Id Must Have @gmail.com";
            document.querySelector("#userEmail").focus();
            return;
        }
        else if (userDetails.password === "") {
            document.querySelector("#userPassword-err").textContent = "Password is Required!";
            document.querySelector("#userPassword").focus();
            return;
        } 
        else {
            const container = document.getElementById('login-signup--container');
            const toggleLogin = document.getElementById('loginBtn');
            const ToggleSignup = document.getElementById('signupBtn');


            container.classList.remove('active');
            toggleLogin.classList.add('active');
            ToggleSignup.classList.remove('active');

            document.querySelector("#userName").value = "";
            document.querySelector("#userEmail").value = "";
            document.querySelector("#userPassword").value = "";
            document.querySelector("#userName-err").textContent = "";
            document.querySelector("#userEmail-err").textContent = "";
            document.querySelector("#userPassword-err").textContent = "";

        }
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);


        if (!user) {
            localStorage.setItem("user", JSON.stringify(userDetails));
        }
        else if (userDetails.email === user.email) {
            alert("This Email Id is Already Exists. Go and Login!");
            document.querySelector("#userEmail").focus();
            return;
        }

    }



    signupBtn.addEventListener("click", handleSignup);
};

export default UserSignup;