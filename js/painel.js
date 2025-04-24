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



const ctxVagas = document.getElementById('graficoVagasAtivas').getContext('2d');
new Chart(ctxVagas, {
    type: 'doughnut',
    data: {
        labels: ['Vagas Ativas', 'Aprovação', 'Presenciais'],
        datasets: [{
            data: [12, 3, 8],
            backgroundColor: ['#4c6ef5', '#adb5bd', '#e9ecef'],
            borderWidth: 1
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        }
    }
});



const ctxComparativo = document.getElementById('graficoComparativoCandidaturas').getContext('2d');
new Chart(ctxComparativo, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
        datasets: [
            {
                label: 'Candidaturas',
                data: [10, 15, 12, 8, 17, 14, 9, 11, 13, 18],
                backgroundColor: '#4c6ef5'
            },
            {
                label: 'Outra métrica',
                data: [4, 7, 9, 6, 10, 9, 5, 4, 7, 3],
                backgroundColor: '#dee2e6'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
