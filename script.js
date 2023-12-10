function gotoservice() {

    var textElement = document.getElementById("text");
    if (textElement.innerText[0] == "К") {
        document.getElementById('according1').click();
        document.getElementById('according1').scrollIntoView({block: "center"});
    }
    if (textElement.innerText[0] == "С") {
        document.getElementById('according2').click();
        document.getElementById('according2').scrollIntoView({block: "center"});
    }
    if (textElement.innerText[0] == "М") {
        document.getElementById('according3').click();
        document.getElementById('according3').scrollIntoView({block: "center"});
    }
    if (textElement.innerText[0] == "П") {
        document.getElementById('according4').click();
        document.getElementById('according4').scrollIntoView({block: "center", blockHorizontal: "start"});
    }
}


function changeImage(imageSrc) {
    const displayedImage = document.getElementById("displayed-image");
    displayedImage.src = imageSrc;
}

function changeText(buttonText) {
    var textElement = document.getElementById("text");
    textElement.innerText = buttonText;
}

/*Меню бургер*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.accordion').forEach((el) => {
        el.addEventListener('click', () => {
            let content = el.nextElementSibling;

            if (content.style.maxHeight) {
                document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            } else {
                document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
});
let loadContent = document.querySelector('html');
window.addEventListener('load', function () {
    loadContent.style.opacity = 1;
});
document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.querySelector('.header_burger');
    const headerMenu = document.querySelector('.header_menu');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
        });
    }


    /*Прокрутка при клике*/

    const menuLinks = document.querySelectorAll(".navigation[data-goto]");
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                /*Закрытие меню*/
                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    headerMenu.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        // Выполняйте переход на другую страницу при нажатии на кнопку
        window.location.href = "recording.html";
    });
});
