    // Gráfico de Rosca - Vagas Ativas
    const vagasAtivasCtx = document.getElementById('vagasAtivasChart').getContext('2d');
    new Chart(vagasAtivasCtx, {
        type: 'doughnut',
        data: {
            labels: ['Vagas Ativas', 'Expiradas', 'Finalizadas'],
            datasets: [{
                label: 'Vagas',
                data: [7, 3, 5],
                backgroundColor: ['#4D6BFE', '#D3D3D3', '#A9A9A9'],
                borderWidth: 8,
                hoverOffset: 10,
                cutout: '70%'  // Faz o anel ficar mais "grosso"
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        color: '#666'
                    }
                }
            }
        }
    });

    // Gráfico de Barras - Candidaturas
    const candidaturasCtx = document.getElementById('candidaturasChart').getContext('2d');
    new Chart(candidaturasCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Candidaturas',
                data: [2, 5, 3, 6, 8, 7, 3, 9, 6, 5, 2, 4],
                backgroundColor: '#4D6BFE',
                borderRadius: 10,
                barThickness: 20
            }, {
                label: 'Base',
                data: [1, 2, 2, 3, 4, 4, 2, 5, 3, 3, 1, 2],
                backgroundColor: '#D3D3D3',
                borderRadius: 10,
                barThickness: 20
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    stacked: true
                }
            }
        }
    });


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