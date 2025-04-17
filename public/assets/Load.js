
const LoadPage = ()=>{

   const user = JSON.parse(localStorage.getItem("user"));
   if(user){
    const currentUser = document.querySelector("#current-user");
   //  console.log(userName);
    currentUser.innerHTML=user.userName;
    
   }
   
}
document.addEventListener("load",LoadPage)
export default LoadPage;