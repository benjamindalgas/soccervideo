var shot = ["https://www.youtube.com/embed/tja34RNmhOI?autoplay=1&showinfo=0&controls=0&rel=0&start=115&end=125",
"https://www.youtube.com/embed/tja34RNmhOI?autoplay=1&showinfo=0&controls=0&rel=0&start=128&end=138",
"https://www.youtube.com/embed/tja34RNmhOI?autoplay=1&showinfo=0&controls=0&rel=0&start=139&end=149",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&rel=0&start=42&end=52", 
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=66&end=76",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=102&end=112",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=114&end=124",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=125&end=132",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=142&end=152",
"https://www.youtube.com/embed/qeQM_OEMzvc?autoplay=1&showinfo=0&controls=0&&rel=0&start=190&end=200"
];


var shot3 = ["https://www.youtube.com/embed/3sYYPgkvee8?autoplay=1&controls=0&rel=0&start=22&end=28", 
"https://www.youtube.com/embed/sUz3ZYfoNxo?autoplay=1&controls=0&&rel=0&start=22&end=28"];
var teamscore = 0;




function randomshot() {
    var x = Math.floor(Math.random() * shot.length);
    var imagepicker = shot[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x > 2) {
        addscore();
    } else {
        noscore();
    }
  
}

function randomshot3(){
    var x = Math.floor(Math.random() * shot3.length);
    var imagepicker = shot3[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x < 1) {
        addscore3();
        
    } else {
        noscore();
    }

}

function addscore() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);
  
}

function addscore3() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
    setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);
}

function noscore() {
  teamscore += 0;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);
}

 
 
 //dialogue functions for the adding presentation
function present() { 
    document.getElementById("presentationembedurl").showModal(); 
} 

function closepresent() {
  var x = document.getElementById("slidesurl").value;
  document.getElementById("lesson").src = x;
  document.getElementById("presentationembedurl").close();
  
}
