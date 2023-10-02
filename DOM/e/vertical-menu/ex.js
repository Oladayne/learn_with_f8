var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function (menu) {
    if (menu.children.length === 2) {
        menu.classList.add("has-children");
        var link = menu.children[0];
        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (!menu.children[1].classList.contains('open')) {
                var subMenuOpen = document.querySelector('.menu ul.open');

                if (subMenuOpen !== null) {
                    subMenuOpen.classList.remove('open');
                    subMenuOpen.parentElement.classList.remove('icon-open');
                }      
            }
            menu.classList.toggle('icon-open');
            menu.children[1].classList.toggle("open");
        });
    }
});
