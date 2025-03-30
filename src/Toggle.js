export function Toggle(){
    const container = document.getElementById('login-signup--container');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        console.log("Clicked LoginBtn");
        
    });
    
    signupBtn.addEventListener('click', () => {
        container.classList.add('active');
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
        console.log("Clicked signupBtn");
    
    });
}

