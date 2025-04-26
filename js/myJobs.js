const userToggle = document.getElementById('user-toggle');
const userMenu = document.getElementById('user-menu');

  userToggle.addEventListener('click', () => {
    userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Fecha o menu se clicar fora
  document.addEventListener('click', (e) => {
    if (!userToggle.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.style.display = 'none';
    }
  });


  // notificações
  const notifModalToggle = document.getElementById('notificationToggle');
  const notifModalBox = document.getElementById('notificationModal');
  const notifModalCloseBtn = document.getElementById('closeModal');

  notifModalToggle.addEventListener('click', () => {
    notifModalBox.style.display = 'flex';
  });

  notifModalCloseBtn.addEventListener('click', () => {
    notifModalBox.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === notifModalBox) {
      notifModalBox.style.display = 'none';
    }
  });


 // Toggle filter dropdown
const filterBtn = document.getElementById('filter-btn');
const filterDropdown = document.getElementById('filter-dropdown');

filterBtn.addEventListener('click', () => {
filterDropdown.style.display = filterDropdown.style.display === 'none' ? 'block' : 'none';
 });

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
 if (!filterBtn.contains(event.target) && !filterDropdown.contains(event.target)) {
 filterDropdown.style.display = 'none';
 }
});


/// === Fechar dropdown se clicar fora ===
document.addEventListener('click', (event) => {
  if (!filterBtn.contains(event.target) && !filterDropdown.contains(event.target)) {
    filterDropdown.style.display = 'none';
  }
});

// === Abrir e Fechar Modal para TODOS os botões "Cadastrar-se" ===
const modal = document.getElementById('documentModal');
const closeButton = document.querySelector('.close-button');

// Para todos os botões "Cadastrar-se"
document.querySelectorAll('.cadastrar-button').forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Fechar modal ao clicar no botão X
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora da área do modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// === Dropzones - para todos os dropzones ===
document.querySelectorAll('.dropzone').forEach(dropzone => {
  const input = dropzone.querySelector('input[type="file"]');

  if (!input) return;

  dropzone.addEventListener('click', () => input.click());

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = '#4c6ef5';
    dropzone.style.backgroundColor = '#f0f4ff';
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = '#ccc';
    dropzone.style.backgroundColor = 'transparent';
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = '#ccc';
    dropzone.style.backgroundColor = 'transparent';

    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Arquivo muito grande. Tamanho máximo é 10MB.');
        return;
      }
      mostrarArquivo(dropzone, file);
    }
  });

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Arquivo muito grande. Tamanho máximo é 10MB.');
        return;
      }
      mostrarArquivo(dropzone, file);
    }
  });

  function mostrarArquivo(dropzone, file) {
    const fileType = file.type;

    if (fileType.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        dropzone.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <img src="${e.target.result}" alt="Preview" style="max-width: 100px; max-height: 100px; margin-bottom: 8px; border-radius: 8px;">
            <p><strong>${file.name}</strong></p>
          </div>
        `;
      };
      reader.readAsDataURL(file);
    } else {
      dropzone.innerHTML = `
        <p><strong>Arquivo carregado:</strong></p>
        <p>${file.name}</p>
      `;
    }
  }
});




// Modal Ver Detalhes
const detailsModal = document.getElementById('detailsModal');
const detailsButtons = document.querySelectorAll('.detalhes-button');
const closeDetailsButton = detailsModal.querySelector('.close-button');

// Para todos os botões "Ver detalhes"
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    detailsModal.style.display = 'block';
  });
});

// Fechar modal no X
closeDetailsButton.addEventListener('click', () => {
  detailsModal.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (event) => {
  if (event.target == detailsModal) {
    detailsModal.style.display = 'none';
  }
});


