const access = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    location.href = "home.html";
  } else {
    alert("Login ou senha incorretos");
  }
};


