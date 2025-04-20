const notificationBtn = document.getElementById('notificationButton');
const profileBtn = document.getElementById('profileButton');
const applyBtn = document.querySelector('.apply-button');
const notificationModal = document.getElementById('notificationModal');
const profileModal = document.getElementById('profileModal');
const documentModal = document.getElementById('documentModal');
const closeButtons = document.querySelectorAll('.modal-close');

// Abrir modais
notificationBtn.addEventListener('click', () => {
    notificationModal.classList.add('active');
    profileModal.classList.remove('active');
    documentModal.classList.remove('active');
});

profileBtn.addEventListener('click', () => {
    profileModal.classList.add('active');
    notificationModal.classList.remove('active');
    documentModal.classList.remove('active');
});

applyBtn.addEventListener('click', () => {
    documentModal.classList.add('active');
    notificationModal.classList.remove('active');
    profileModal.classList.remove('active');
});

// Fechar modais
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        notificationModal.classList.remove('active');
        profileModal.classList.remove('active');
        documentModal.classList.remove('active');
    });
});

// Fechar ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === notificationModal) notificationModal.classList.remove('active');
    if (e.target === profileModal) profileModal.classList.remove('active');
    if (e.target === documentModal) documentModal.classList.remove('active');
});

// Drag and drop functionality
const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#4c6ef5';
        dropzone.style.backgroundColor = '#f0f4ff';
    });
    
    dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = '#ddd';
        dropzone.style.backgroundColor = '';
    });
    
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#ddd';
        dropzone.style.backgroundColor = '';
        
        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            alert(`Arquivo "${file.name}" selecionado (${Math.round(file.size / 1024)} KB)`);
        }
    });
    
    dropzone.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.jpg,.jpeg,.png';
        
        input.onchange = (e) => {
            if (e.target.files.length) {
                const file = e.target.files[0];
                alert(`Arquivo "${file.name}" selecionado (${Math.round(file.size / 1024)} KB)`);
            }
        };
        input.click();
    });
});

// Submit handler
document.querySelector('.submit-button').addEventListener('click', () => {
    alert('Documentos enviados com sucesso!');
    documentModal.classList.remove('active');
});