 document.addEventListener('DOMContentLoaded', function() {
            // Handling menu item clicks
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Form submission handling
            const form = document.getElementById('profileForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                
                // Here you would typically send this data to a server
                alert(`Alterações salvas!\nNome: ${name}\nEmail: ${email}`);
            });

        });