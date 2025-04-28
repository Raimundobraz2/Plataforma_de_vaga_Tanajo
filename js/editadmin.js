  const profileImage = document.getElementById('profileImage');
  const uploadProfileImage = document.getElementById('uploadProfileImage');
  const changeProfileBtn = document.getElementById('changeProfileBtn');

  changeProfileBtn.addEventListener('click', () => {
    uploadProfileImage.click(); // Clica no input escondido
  });

  uploadProfileImage.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        profileImage.src = e.target.result; // Atualiza a imagem
      };

      reader.readAsDataURL(file);
    }
  });
