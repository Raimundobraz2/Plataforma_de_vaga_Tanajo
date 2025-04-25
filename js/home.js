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

function abrirModal() {
  document.getElementById('documentModal').style.display = 'flex';
}
function fecharModal() {
  document.getElementById('documentModal').style.display = 'none';
}


function abrirModal() {
  document.getElementById('documentModal').style.display = 'flex';
}
function fecharModal() {
  document.getElementById('documentModal').style.display = 'none';
}


// Drag & Drop
function setupDropzone(dropzoneId, inputId) {
  const dropzone = document.getElementById(dropzoneId);
  const input = document.getElementById(inputId);

  const originalContent = dropzone.innerHTML; // Guarda o conteúdo inicial do card

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
      if (file.size > 5 * 1024 * 1024) {
        alert("Arquivo muito grande. Máximo 5MB.");
        return;
      }
      mostrarArquivo(dropzone, file);
    }
  });

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Arquivo muito grande. Máximo 5MB.");
        return;
      }
      mostrarArquivo(dropzone, file);
    }
  });

  // Função para exibir o nome do arquivo carregado
  function mostrarArquivo(dropzone, file) {
    dropzone.innerHTML = `
      <p><strong>Arquivo carregado:</strong></p>
      <p>${file.name}</p>
    `;
  }
}

setupDropzone('dropzone-1', 'file-input-1');
setupDropzone('dropzone-2', 'file-input-2');
