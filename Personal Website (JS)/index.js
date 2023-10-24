var table = function () {
    "use strict";
    var checkBox = document.getElementById("Free");
    document.getElementById('1').innerHTML = document.getElementById('Date').value;
    document.getElementById('2').innerHTML = document.getElementById('start').value;
    document.getElementById('3').innerHTML = document.getElementById('end').value;
    document.getElementById('4').innerHTML = document.getElementById('Activity').value;
    document.getElementById('5').innerHTML = document.getElementById('Place').value;
    document.getElementById('6').innerHTML = document.getElementById('Type').value;
    document.getElementById('7').innerHTML = document.getElementById('School').value;
    document.getElementById('8').innerHTML = document.getElementById('Personal').value;
    document.getElementById('9').innerHTML = document.getElementById('Profesional').value;
    document.getElementById('10').innerHTML = document.getElementById('Familiar').value;
    document.getElementById('11').innerHTML = document.getElementById('Other').value;
    document.getElementById('12').innerHTML = document.getElementById('Notes').value;
    document.getElementById('13').innerHTML = document.getElementById('Flag').value;
    document.getElementById('13').style.backgroundColor = document.getElementById('Flag').value;
    document.getElementById('14').innerHTML = checkBox.checked;
    };