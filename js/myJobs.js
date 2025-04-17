const viewDetailsBtn = document.getElementById('viewDetailsBtn');
        const jobDetailsModal = document.getElementById('jobDetailsModal');
        const closeJobDetailsModal = document.getElementById('closeJobDetailsModal');
        
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationModal = document.getElementById('notificationModal');
        const closeNotificationModal = document.getElementById('closeNotificationModal');
        const notificationList = document.getElementById('notificationList');
        const markAllAsRead = document.getElementById('markAllAsRead');
        const deleteAllNotifications = document.getElementById('deleteAllNotifications');
        const notificationBadge = document.querySelector('.notification-badge');
        
        // Job Details Modal Functions
        viewDetailsBtn.addEventListener('click', () => {
            jobDetailsModal.style.display = 'flex';
        });
        
        closeJobDetailsModal.addEventListener('click', () => {
            jobDetailsModal.style.display = 'none';
        });
        
        // Notification Modal Functions
        notificationBtn.addEventListener('click', () => {
            notificationModal.style.display = 'flex';
        });
        
        closeNotificationModal.addEventListener('click', () => {
            notificationModal.style.display = 'none';
        });
        
        // Close modals when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === jobDetailsModal) {
                jobDetailsModal.style.display = 'none';
            }
            if (event.target === notificationModal) {
                notificationModal.style.display = 'none';
            }
        });
        
        // Notification Management
        let notificationCount = 1; // Initial count from badge
        
        // Mark single notification as read
        notificationList.addEventListener('click', (event) => {
            if (event.target.classList.contains('mark-read')) {
                const notificationItem = event.target.closest('.notification-item');
                notificationItem.style.opacity = '0.6';
                
                // Update badge count
                if (notificationCount > 0) {
                    notificationCount--;
                    updateNotificationBadge();
                }
            }
            
            if (event.target.classList.contains('delete')) {
                const notificationItem = event.target.closest('.notification-item');
                notificationItem.remove();
                
                // Update badge count if notification was unread
                if (notificationItem.style.opacity !== '0.6' && notificationCount > 0) {
                    notificationCount--;
                    updateNotificationBadge();
                }
            }
        });
        
        // Mark all as read
        markAllAsRead.addEventListener('click', () => {
            const notifications = document.querySelectorAll('.notification-item');
            notifications.forEach(item => {
                item.style.opacity = '0.6';
            });
            
            notificationCount = 0;
            updateNotificationBadge();
        });
        
        // Delete all notifications
        deleteAllNotifications.addEventListener('click', () => {
            notificationList.innerHTML = '<p>Não há notificações.</p>';
            notificationCount = 0;
            updateNotificationBadge();
        });
        
        // Update notification badge
        function updateNotificationBadge() {
            if (notificationCount > 0) {
                notificationBadge.style.display = 'flex';
                notificationBadge.textContent = notificationCount;
            } else {
                notificationBadge.style.display = 'none';
            }
        }