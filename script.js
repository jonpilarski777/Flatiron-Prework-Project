const h3 = document.createElement('h3');
h3.textContent = "Press the number of which one of the following is a lie";

document.querySelector('body').appendChild(h3);

const lie = document.getElementById("lie");

function Polygraph() {alert("Lol, you are too kind if you didn't guess this one first..")}

document.addEventListener("keydown", function(e){
    if (e.key === "2") {
        Polygraph();
    }

});

const true1 = document.getElementById("truth1");
function Truthy1(){alert("Yes they are both Polydactyl cats, which are also sometimes referred to as 'Hemingway cats' due to his fondness for them")}

document.addEventListener("keydown", function(e){
    if (e.key === "1") {
        Truthy1();
    }

});

 const true2 = document.getElementById("truth2");
function Truthy2(){alert("There was no such thing as a dare 12 year old me wouldn't attempt. It would have been 5 days if not for my Math teacher finding out & endiing the party early..")}

document.addEventListener("keydown", function(e){
    if (e.key === "3") {
        Truthy2();
    }

});

const true3 = document.getElementById("truth3");
function Truthy3(){alert("Unfortunately yes - I was a caddy for 10 years and one time lost Mike Ditka's golf ball. They say what doesn't kill you makes you stronger though. Allegedly.")}

document.addEventListener("keydown", function(e){
    if (e.key === "4") {
        Truthy3();
    }

});


