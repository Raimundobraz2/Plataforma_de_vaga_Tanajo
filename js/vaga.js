let isEditing = false; // novo estado de edição
const modal = document.getElementById('job-modal');
const createJobButton = document.getElementById('create-job-button');
const closeModalButton = document.getElementById('close-modal');
const submitButton = document.querySelector('.submit-button'); // botão do formulário

createJobButton?.addEventListener('click', () => {
    isEditing = false;
    submitButton.textContent = 'Publicar vaga';
    modal.style.display = 'flex';
});

closeModalButton?.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Impede fechamento ao clicar dentro do modal
document.querySelector('.modal').addEventListener('click', (event) => {
    event.stopPropagation();
});

// Submissão do formulário
document.getElementById('job-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (isEditing) {
        alert('Alterações salvas com sucesso!');
    } else {
        alert('Vaga publicada com sucesso!');
    }
    modal.style.display = 'none';
});

document.querySelectorAll('.job-card').forEach((card) => {
    const menuBtn = card.querySelector('.menu-options');
    const menu = card.querySelector('.context-menu');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        // Fecha outros menus
        document.querySelectorAll('.context-menu').forEach(m => {
            if (m !== menu) m.style.display = 'none';
        });

        // Alterna visibilidade
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Clica nas opções
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            handleAction(action, card);
            menu.style.display = 'none';
        });
    });
});

// Fecha menus ao clicar fora
document.addEventListener('click', () => {
    document.querySelectorAll('.context-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});



// Clique na área → abre seletor de arquivos
const dropzone = document.getElementById('photo-dropzone');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

// Clique na área → abre seletor de arquivos
dropzone.addEventListener('click', () => fileInput.click());

// Drag & drop
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
});

// Quando o usuário escolhe arquivo pelo seletor
fileInput.addEventListener('change', () => {
    handleFile(fileInput.files[0]);
});

// Função para processar o arquivo
function handleFile(file) {
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
        alert('Formato inválido. Use JPEG ou PDF.');
        return;
    }

    if (file.size > 7 * 1024 * 1024) {
        alert('Arquivo muito grande. Máximo: 1MB.');
        return;
    }

    // Remove os textos de instrução
    dropzone.querySelectorAll('p, small').forEach(el => el.remove());

    // Limpa a visualização anterior
    preview.innerHTML = '';

    if (file.type === 'application/pdf') {
        const pdfText = document.createElement('p');
        pdfText.textContent = '📄 PDF selecionado: ' + file.name;
        preview.appendChild(pdfText);
    } else {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        preview.appendChild(img);
    }
}

const handleAction = (action, card) => {
    const title = card.querySelector('.job-title')?.textContent;
    const docUrl = card.getAttribute('data-doc-url');
    const docType = card.getAttribute('data-doc-type');

    switch (action) {
        case 'edit':
            isEditing = true;
            submitButton.textContent = 'Salvar alterações';
            modal.style.display = 'flex';
            break;

        case 'view':
            if (docUrl) {
                if (docType === 'pdf') {
                    window.open(docUrl, '_blank');
                } else if (docType.startsWith('image')) {
                    const imgWindow = window.open('', '_blank');
                    imgWindow.document.write(`<img src="${docUrl}" style="max-width:100%;">`);
                } else {
                    alert('Formato de documento não suportado.');
                }
            } else {
                alert('Nenhum documento anexado para visualizar.');
            }
            break;

        case 'delete':
            if (docUrl) {
                const confirmar = confirm(`Deseja realmente eliminar o documento da vaga: ${title}?`);
                if (confirmar) {
                    card.removeAttribute('data-doc-url');
                    card.removeAttribute('data-doc-type');
                    alert('Documento eliminado com sucesso!');
                }
            } else {
                alert('Nenhum documento encontrado para eliminar.');
            }
            break;
    }
};


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
