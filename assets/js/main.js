/********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_1: Math.PI - Aufgabenstellung

In dieser Übung werden wir das Math.PI Object lernen.
    * Zeige in der Konsole Math.PI.
    * Deklariere die const PI mit dem passenden Wert.
    * Runde den Wert von PI auf zwei Dezimalstellen und weise den Wert der Variablen roundedPI zu.
    * Gib roundedPI in der Konsole aus.
*/
console.log('Math.PI =', Math.PI);
let roundedPI = Math.PI.toFixed(2);
console.log('roundedPI =', roundedPI);


/********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_2: Math.round() - Aufgabenstellung

In dieser Übung werden wir Math.round() kennenlernen.
    * Schreibe eine Funktion, die eine Zahl rundet.
    * Verwende die Zahlen aus dem Kommentar.
    * Gib das Ergebnis in der Konsole aus.
*/
let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
array.forEach(n => console.log(Math.round(n)));


/********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_3: Math.random(), Math.floor() - Aufgabenstellung

In dieser Übung werden wir Math.random() und Math.floor() kennenlernen.
    * Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
    * Deklariere die Variable randomNum1_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
    * Deklariere die Variable randomNum1_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
*/

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10) + 1;
let randomNum1_100 = Math.floor(Math.random() * 100) + 1;

console.log("randomNum =", randomNum);
console.log("randomNum1_10 =", randomNum1_10);
console.log("randomNum1_100 =", randomNum1_100);



/********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_4: Math.min Math.max - Aufgabenstellung

In dieser Übung werden wir Math.min und Math.max kennenlernen.
    * Finde mit Math.min den niedrigsten Wert aus den Zahlen im Kommentar.
    * Finde nun mit Math.max den höchsten Wert aus den Zahlen im Kommentar.
*/
console.log("Math.min(...) =", Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));
console.log("Math.max(...) =", Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));
