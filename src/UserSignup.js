const UserSignup = () => {
    document.querySelector("#signup-submit--btn").addEventListener("click", (e) => {
        e.preventDefault();
        const currentUser = document.querySelector("#current-user");
        
        let userDetails = {
            userName: document.querySelector("#userName").value,
            email: document.querySelector("#userEmail").value,
            password: document.querySelector("#userPassword").value,
        };
        console.log(userDetails);
        localStorage.setItem("user", JSON.stringify(userDetails));
    })
}

export default UserSignup;