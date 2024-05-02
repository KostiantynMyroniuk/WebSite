function clicker() {
    var target = document.getElementById('pizza-section-name');
    target.scrollIntoView({behavior: "smooth", block: "start"});
}


function starColor(starCount) {
    var stars = document.querySelectorAll('.star');

    for (i = 0; i < stars.length; i++) {
        if (i < starCount) {
            stars[i].style.color = '#ffbb00';
        } else {
            stars[i].style.color = '#ccc';
        }
    }
}


function openPopup() {

    var nameValue = document.getElementById("name").value;
    var descrValue = document.getElementById("description").value;

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
            document.getElementById("popup").style.display = "block";
            document.querySelector(".overlay").style.display = "block";
        }
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}