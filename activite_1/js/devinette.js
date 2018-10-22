/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var saisieNombre = -1;

for (x = 1; x <= 6; x++) { // on utilise un for car on connaît le nombre de tours maximum : x === nombre d'essais

	if (saisieNombre !== solution) {
		saisieNombre = Number(prompt("Saisissez un nombre compris entre 1 et 100 :"));

		if (saisieNombre < solution) {
			console.log(saisieNombre + " est trop petit");
		}
		else if (saisieNombre > solution) {
			console.log(saisieNombre + " est trop grand");
		}
		else {
			console.log("Bravo ! La solution était " + solution);
			console.log("Vous avez trouvé en " + x + " essai(s)");
			break;
		}
	}
	if (x === 6) {
		console.log("Perdu... La solution était " + solution);
	}

}


