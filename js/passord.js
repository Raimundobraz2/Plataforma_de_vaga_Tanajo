    document.addEventListener('DOMContentLoaded', function() {
            const codeInputs = document.querySelectorAll('.code-input');
            
            codeInputs.forEach((input, index) => {
                // Foco automático no próximo campo após digitar
                input.addEventListener('input', function() {
                    if (this.value.length === 1 && index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                });
                
                // Permite deletar e voltar para o campo anterior
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                        codeInputs[index - 1].focus();
                    }
                });
            });
            
            document.querySelector('.confirm-button').addEventListener('click', function() {
                const code = Array.from(codeInputs).map(input => input.value).join('');
                if (code.length === 4) {
                    alert('Código enviado: ' + code);
                    
                } else {
                    alert('Por favor, preencha todos os campos do código');
                }
            });
        });