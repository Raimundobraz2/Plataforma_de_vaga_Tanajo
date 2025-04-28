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

  
  const openFilterBtn = document.getElementById('openFilter');
  const filterModal = document.getElementById('filterModal');
  const closeFilterBtn = document.getElementById('closeFilter');

  openFilterBtn.addEventListener('click', () => {
    filterModal.style.display = 'block';
  });

  closeFilterBtn.addEventListener('click', () => {
    filterModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === filterModal) {
      filterModal.style.display = 'none';
    }
  });


  const openCompanyModalBtns = document.querySelectorAll('.openCompanyModal'); // Agora vários botões
  const companyModal = document.getElementById('companyModal');
  const closeCompanyModalBtn = document.getElementById('closeCompanyModal');

  openCompanyModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      companyModal.style.display = 'flex';
    });
  });

  closeCompanyModalBtn.addEventListener('click', () => {
    companyModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === companyModal) {
      companyModal.style.display = 'none';
    }
  });

