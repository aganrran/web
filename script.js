const categoryButtons = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const selectedCategory = button.dataset.category;

        products.forEach(function(product) {

            if (product.dataset.category === selectedCategory) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});

const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search-box button");

if (searchInput && searchButton) {

    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        products.forEach(product => {
            const title = product.querySelector(".product-title").textContent.toLowerCase();
            const subtitle = product.querySelector(".product-sub").textContent.toLowerCase();
            const category = product.dataset.category.toLowerCase();

            if (
                title.includes(searchTerm) ||
                subtitle.includes(searchTerm) ||
                category.includes(searchTerm)
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", searchProducts);

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

    if (window.location.hash === "#searchInput") {
        searchInput.focus();
    }
}


const searchIcon = document.querySelector(".search-icon");

if (searchIcon) {
    searchIcon.addEventListener("click", function() {

        if (searchInput) {
            searchInput.focus();
        } else {
            window.location.href = "playyy.html#searchInput";
        }

    });
}

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle("show");
    });

    mobileMenu.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            mobileMenu.classList.remove("show");
        });
    });
}
const arrivalTrack = document.querySelector(".arrival-track");

if (arrivalTrack) {

    let autoScroll;

    function startAutoScroll() {
        autoScroll = setInterval(function() {
            arrivalTrack.scrollLeft += 1;

            if (arrivalTrack.scrollLeft + arrivalTrack.clientWidth >= arrivalTrack.scrollWidth) {
                arrivalTrack.scrollLeft = 0;
            }
        }, 20);
    }

    function pauseAutoScroll() {
        clearInterval(autoScroll);
    }

    function resumeAutoScrollLater() {
        clearInterval(autoScroll);
        setTimeout(startAutoScroll, 3000);
    }

    startAutoScroll();

    arrivalTrack.addEventListener("touchstart", pauseAutoScroll);
    arrivalTrack.addEventListener("mousedown", pauseAutoScroll);
    arrivalTrack.addEventListener("touchend", resumeAutoScrollLater);
    arrivalTrack.addEventListener("mouseup", resumeAutoScrollLater);
}