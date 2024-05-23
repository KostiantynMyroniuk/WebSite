function clicker() {
    var target = document.getElementById('pizza-section-name');
    target.scrollIntoView({behavior: "smooth", block: "start"});
}

///
var starsClicked = 0;

function starColor(starCount) {
    var stars = document.querySelectorAll('.star');
    starsClicked = starCount;
    for (i = 0; i < stars.length; i++) {
        if (i < starCount) {
            stars[i].style.color = '#ffbb00';
        } else {
            stars[i].style.color = '#ccc';
        }
    }

}

///

var id = 1;

function openPopup() {
    var nameValue = document.getElementById("name").value;
    var descrValue = document.getElementById("description").value;

    var data = {
        "id": id,
        "stars": starsClicked,
        "name": nameValue,
        "description": descrValue
    };

    var name = document.getElementById("name");
    var descr = document.getElementById("description");

    if (nameValue == "") {
        name.style.borderColor = "red";
    } 
    else {
        name.style.border = "1px solid rgba(0, 0, 0, 0.4)";
    }

    if (descrValue == "") {
        descr.style.borderColor = "red";
    }
    else {
        descr.style.border = "1px solid rgba(0, 0, 0, 0.4)";
    }

    if (nameValue !== "" && descrValue !== "") {
        if (/^[A-Za-zА-Яа-яЁёіІїЇєЄҐґ]+$/.test(nameValue)) {

            id++;

            document.getElementById("popup").style.display = "block";
            document.querySelector(".overlay").style.display = "block";

            var xhr = new XMLHttpRequest;
            var url = "http://localhost:8080/add";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                }
            }

            xhr.send();JSON.stringify(data);
        }
    }
}

///

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}



document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuList = document.getElementById('menu-list');

    menuButton.addEventListener('click', function() {
        if (menuList.style.display === 'flex') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'flex';
        }
    });

    function checkWindowSize() {
        if (window.innerWidth > 768) {
            menuList.classList.remove('show');
            menuList.style.display = 'flex';
        } else {
            menuList.style.display = 'none';
        }
    }
    
    checkWindowSize();
    
    window.addEventListener('resize', checkWindowSize);
});



window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}`;
})

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallaxContainer = document.querySelector('.feedback-title-container');
    parallaxContainer.style.backgroundPositionY = -scrollPosition * 0.255 + 'px';
});