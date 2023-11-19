let loginForm = document.getElementById("my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

 
  let name = document.getElementById("name");
  
  let email = document.getElementById("email");
  let message = document.getElementById("message");
    alert("Message send");
  name.value = "";
    email.value = "";
  message.value = "";
    
  }
);
