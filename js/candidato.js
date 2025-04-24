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

        // Add event listeners for action icons
        document.addEventListener('click', function(e) {
            if(e.target.classList.contains('fa-eye')) {
                const row = e.target.closest('tr');
                const id = row.cells[0].textContent;
                alert(`Visualizando detalhes do candidato #${id}`);
            } else if(e.target.classList.contains('fa-trash')) {
                const row = e.target.closest('tr');
                const id = row.cells[0].textContent;
                if(confirm(`Deseja realmente excluir o candidato #${id}?`)) {
                    row.remove();
                    // Here you would also remove from your data source
                }
            }
        });

        // Make sidebar items clickable
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function(e) {
                document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });


function toggleFilterDropdown() {
        const dropdown = document.getElementById('filterOptions');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    // Fecha o dropdown ao clicar fora
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('filterOptions');
        const button = document.querySelector('.filter-btn');
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

const modal = document.getElementById("candidateModal");

  document.querySelector(".ri-eye-line").addEventListener("click", function () {
    modal.style.display = "block";
  });

  function closeModal() {
    modal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

   function openDocument(type) {
    const modal = document.getElementById("documentModal");
    const title = document.getElementById("documentTitle");
    const viewer = document.getElementById("documentViewer");

    if (type === 'curriculo') {
      title.textContent = "Curriculum Vitae (PDF)";
      viewer.innerHTML = "<p>Aqui será exibido o currículo em PDF.</p>";
    } else if (type === 'bi') {
      title.textContent = "Cópia do BI";
      viewer.innerHTML = "<p>Aqui será exibida a cópia do BI (imagem ou PDF).</p>";
    }

    modal.style.display = "block";
  }

  function closeDocumentModal() {
    document.getElementById("documentModal").style.display = "none";
  }

  // Fecha ao clicar fora
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("documentModal");
    if (event.target === modal) {
      closeDocumentModal();
    }
  });