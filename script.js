   // Wishlist toggle
        document.querySelectorAll('.like').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var on = btn.getAttribute('aria-pressed') === 'true';
                btn.setAttribute('aria-pressed', String(!on));
                btn.setAttribute('aria-label', on ? 'Add to wishlist' : 'Remove from wishlist');
            });
        });