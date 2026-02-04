function register() {
  localStorage.setItem("user", regUser.value);
  localStorage.setItem("pass", regPass.value);
  alert("Registered Successfully!");
  window.location.href = "index.html";
}

function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
  document.getElementById("userName").innerText =
    "Welcome, " + localStorage.getItem("user");
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function bookAppointment() {
  localStorage.setItem(
    "appointment",
    counselor.value + " on " + date.value
  );
  window.location.href = "payment.html";
}

function pay() {
  alert("Payment Successful! Appointment Confirmed.");
  window.location.href = "dashboard.html";
}
