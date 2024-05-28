/* manda a schermo le dimensioni intere dell'area occupata dalla 
finestra espresssa in pixel grazie a 'innerWidth' e 'innerHeight' */
const myTest1 = document.getElementById("tester").innerHTML =
innerWidth + "x" + innerHeight;

/* cambia lo stile (colore) del testo */
document.getElementById("tester").style.color='white';

/* cambia lo stile (font size) del testo*/
document.getElementById("tester").style.fontSize='20px';

/* cambia lo stile (text align) del testo */
document.getElementById("tester").style.textAlign='center';

/* restituisce in numeri bit il colore dello schermo */
const myTest2 = document.getElementById("testerColor").innerHTML =
"Profondità del colore dello schermo: " + screen.colorDepth;

/* cambia lo stile (colore) del testo */
document.getElementById("testerColor").style.color='white';

/* cambia lo stile (font size) del testo*/
document.getElementById("testerColor").style.fontSize='20px';

/* cambia lo stile (text align) del testo */
document.getElementById("testerColor").style.textAlign='center';