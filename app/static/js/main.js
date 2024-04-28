document.addEventListener('DOMContentLoaded', function() {
    var mitigateButtons = document.querySelectorAll('input[type="submit"]');
    for (var i = 0; i < mitigateButtons.length; i++) {
        mitigateButtons[i].addEventListener('click', function(event) {
            if (!confirm('Are you sure you want to mitigate this threat?')) {
                event.preventDefault();
            }
        });
    }
});
