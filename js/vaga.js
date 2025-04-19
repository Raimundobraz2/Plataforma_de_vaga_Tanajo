// Modal functionality
        const modal = document.getElementById('job-modal');
        const createJobButton = document.getElementById('create-job-button');
        const closeModalButton = document.getElementById('close-modal');
        
        createJobButton.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
        
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Prevent closing when clicking inside modal
        document.querySelector('.modal').addEventListener('click', (event) => {
            event.stopPropagation();
        });
        
        // Handle form submission
        document.getElementById('job-form').addEventListener('submit', (event) => {
            event.preventDefault();
            // Here you would handle the form data submission
            alert('Vaga publicada com sucesso!');
            modal.style.display = 'none';
        });
        
      
 const dropzone = document.getElementById('photo-dropzone');
    const fileInput = document.getElementById('file-input');
    const preview = document.getElementById('preview');

    dropzone.addEventListener('click', () => fileInput.click());

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

    fileInput.addEventListener('change', () => {
        handleFile(fileInput.files[0]);
    });

    function handleFile(file) {
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            alert('Formato inválido. Use JPEG ou PDF.');
            return;
        }

        if (file.size > 1024 * 1024) {
            alert('Arquivo muito grande. Máximo: 1MB.');
            return;
        }

        preview.innerHTML = '';

        if (file.type === 'application/pdf') {
            const pdfIcon = document.createElement('p');
            pdfIcon.textContent = '📄 PDF selecionado: ' + file.name;
            preview.appendChild(pdfIcon);
        } else {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            preview.appendChild(img);
        }
    }

document.querySelectorAll('.job-card').forEach((card) => {
    const menuBtn = card.querySelector('.menu-options');
    const menu = card.querySelector('.context-menu');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        // Fecha outros menus abertos
        document.querySelectorAll('.context-menu').forEach(m => {
            if (m !== menu) m.style.display = 'none';
        });

        // Alterna visibilidade do menu clicado
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Clicar nas opções
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            handleAction(action, card);
            menu.style.display = 'none';
        });
    });
});

// Fecha todos os menus ao clicar fora
document.addEventListener('click', () => {
    document.querySelectorAll('.context-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});

// Função para lidar com ações
const handleAction = (action, card) => {
    const title = card.querySelector('.job-title')?.textContent;
    switch (action) {
        case 'edit':
            alert(`Editar vaga: ${title}`);
            break;
        case 'view':
            alert(`Visualizar vaga: ${title}`);
            break;
        case 'delete':
            alert(`Eliminar vaga: ${title}`);
            break;
    }
};