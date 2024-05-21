
//Masquer les divs

document.body.style.backgroundColor = "white";
document.getElementById("conseil").style.display = "none";
document.getElementById("reponse1").style.display = "none";
document.getElementById("reponse2").style.display = "none";
document.getElementById("reponse3").style.display = "none";
document.getElementById("menudéroulant").style.display = "none";
document.getElementById("menu1.1").style.display = "none";
document.getElementById("menu1.2").style.display = "none";
document.getElementById("menu1.3").style.display = "none";

//changer le thème

document.getElementById("boutton").onclick = function(){
    if(document.body.style.backgroundColor !== "black"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("fripouille").innerText = "NUIT";
        document.getElementById("fleche1").src = "fleche_themesombre.jpg";
        document.getElementById("fleche2").src = "fleche_themesombre.jpg";
        document.getElementById("fleche3").src = "fleche_themesombre.jpg";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("fripouille").innerText = "JOUR";
        document.getElementById("fleche1").src = "fleche_bas.png";
        document.getElementById("fleche2").src = "fleche_bas.png";
        document.getElementById("fleche3").src = "fleche_bas.png";
    }
    if(document.getElementById("boutton").click >=2){
        document.getElementById("conseil").style.display = "block";
    }
};

// FaQ

document.getElementById("fleche1").onclick = function(){
    if(document.body.style.backgroundColor === "white"){
        if(document.getElementById("reponse1").style.display === "none"){
            document.getElementById("reponse1").style.display = "block";
            document.getElementById("fleche1").src = "fleche_haut.png";
        }
        else{
            document.getElementById("reponse1").style.display = "none";
            document.getElementById("fleche1").src = "fleche_bas.png";
        }
    }
    else{
        if(document.getElementById("reponse1").style.display === "none"){
            document.getElementById("reponse1").style.display = "block";
            document.getElementById("fleche1").src = "flechehaut_themesombre.jpg";
        }
        else{
            document.getElementById("reponse1").style.display = "none";
            document.getElementById("fleche1").src = "fleche_themesombre.jpg";
        }
    }
};

document.getElementById("fleche2").onclick = function(){
    if(document.body.style.backgroundColor === "white"){
        if(document.getElementById("reponse2").style.display === "none"){
            document.getElementById("reponse2").style.display = "block";
            document.getElementById("fleche2").src = "fleche_haut.png";
        }
        else{
            document.getElementById("reponse2").style.display = "none";
            document.getElementById("fleche2").src = "fleche_bas.png";
        }
    }
    else{
        if(document.getElementById("reponse2").style.display === "none"){
            document.getElementById("reponse2").style.display = "block";
            document.getElementById("fleche2").src = "flechehaut_themesombre.jpg";
        }
        else{
            document.getElementById("reponse2").style.display = "none";
            document.getElementById("fleche2").src = "fleche_themesombre.jpg";
        }
    }
};

document.getElementById("fleche3").onclick = function(){
    if(document.body.style.backgroundColor === "white"){
        if(document.getElementById("reponse3").style.display === "none"){
            document.getElementById("reponse3").style.display = "block";
            document.getElementById("fleche3").src = "fleche_haut.png";
        }
        else{
            document.getElementById("reponse3").style.display = "none";
            document.getElementById("fleche3").src = "fleche_bas.png";
        }
    }
    else{
        if(document.getElementById("reponse3").style.display === "none"){
            document.getElementById("reponse3").style.display = "block";
            document.getElementById("fleche3").src = "flechehaut_themesombre.jpg";
        }
        else{
            document.getElementById("reponse3").style.display = "none";
            document.getElementById("fleche3").src = "fleche_themesombre.jpg";
        }
    }
};

//menu burger

document.getElementById("menuburg").onmouseenter = function(){
    document.getElementById("menudéroulant").style.display = "block";
};

document.getElementById("menuburger").onmouseleave = function(){
    document.getElementById("menudéroulant").style.display = "none";
};

document.getElementById("menuburger1").onmouseenter = function(){
    document.getElementById("menu1.1").style.display = "block";
    document.getElementById("menu1.2").style.display = "none";
    document.getElementById("menu1.3").style.display = "none";
};

document.getElementById("menuburger2").onmouseenter = function(){
    document.getElementById("menu1.2").style.display = "block";
    document.getElementById("menu1.1").style.display = "none";
    document.getElementById("menu1.3").style.display = "none";
};

document.getElementById("menuburger3").onmouseenter = function(){
    document.getElementById("menu1.3").style.display = "block";
    document.getElementById("menu1.1").style.display = "none";
    document.getElementById("menu1.2").style.display = "none";
};

document.getElementById("menudéroulant").onmouseleave = function(){
    document.getElementById("menu1.1").style.display = "none";
    document.getElementById("menu1.2").style.display = "none";
    document.getElementById("menu1.3").style.display = "none";
};

