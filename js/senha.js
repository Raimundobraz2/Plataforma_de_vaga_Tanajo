function togglePasswordVisibility(inputId) {
            const passwordInput = document.getElementById(inputId);
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }

        document.querySelector('.button').addEventListener('click', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (!password || !confirmPassword) {
                alert('Por favor, preencha ambos os campos de senha.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem. Por favor, tente novamente.');
                return;
            }
            
            // Você pode adicionar validações adicionais para verificar a força da senha
            
            alert('Senha criada com sucesso!');
            // Aqui você adicionaria o código para enviar a senha para o servidor
        });