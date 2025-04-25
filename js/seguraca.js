  function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    icon.classList.toggle("ri-eye-off-line");
    icon.classList.toggle("ri-eye");
  }
