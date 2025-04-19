 function togglePassword() {
            const passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        }
        
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Conta criada com sucesso!');
        });




        