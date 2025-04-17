document.addEventListener('DOMContentLoaded', function() {
            const optionCards = document.querySelectorAll('.option-card');
            const nextButton = document.querySelector('.next-button');
            let selectedOption = null;
            
            optionCards.forEach(card => {
                card.addEventListener('click', function() {
          
                    if (selectedOption) {
                        selectedOption.classList.remove('selected');
                    }
                    
                   
                    this.classList.add('selected');
                    selectedOption = this;
                });
            });
            
            nextButton.addEventListener('click', function() {
                if (selectedOption) {
                    const selectedValue = selectedOption.getAttribute('data-option');
                    alert(`Você selecionou: ${selectedValue}`);
                
                } else {
                    alert('Por favor, selecione uma opção antes de continuar.');
                }
            });
        });