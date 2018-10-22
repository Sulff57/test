/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = // création du l'objet prototype contact
{
	init: function(nom, prenom)
	{
		this.nom = majMin(nom); // voir la description de la fonction dans le commentaire associé
		this.prenom = majMin(prenom);
	},
	afficher: function()
	{
		var nomPrenom = ("Nom : " + this.nom
		+ ", prénom : " + this.prenom);
		return nomPrenom;
	}
};

/* fonction optionnelle qui transforme une chaîne en format capitale + suite en minuscules
ex : GeRaRD -> Gerard, gerard -> Gerard, GERARD -> Gerard, ... */

function majMin(chaine)
{
	return (chaine.charAt(0).toUpperCase() + chaine.substring(1, chaine.Length).toLowerCase());
}

var contacts = []; // création du tableau qui va servir à stocker les contacts

var contact1 = Object.create(Contact);
var contact2 = Object.create(Contact);

contact1.init("Lévisse", "Carole");
contact2.init("Nelsonne", "Mélodie");

contacts.push(contact1, contact2);

// on affiche un message de bienvenue avant le démarrage de la partie interactive
console.log("Bienvenue dans le gestionnaire des contacts !");

var choixUtilisateur = 3;

while (choixUtilisateur !== 0) // On boucle jusqu'à ce que l'utilisateur choisisse de quitter
{
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	console.log("\r");
	choixUtilisateur = Number(prompt("Choisissez une option :"));
	if (choixUtilisateur === 1)
	{
		/* on affiche le message correspondant au choix de l'utilisateur
		puis on parcourt le tableau pour afficher tout ses contacts */
		console.log("Voici la liste de tous vos contacts :");
		contacts.forEach(function (contact)
		{
			console.log(contact.afficher());
		});
		console.log("\r");
	}
	else if (choixUtilisateur === 2)
	{
		// on récupère les nom et prénoms du contact à créer
		var nom; 
		var prenom;
		nom = prompt("Entrez le nom du nouveau contact");
		prenom = prompt("Entrez le prénom du nouveau contact");

		// puis on crée un objet contact qu'on initialise à partir de ceux-ci

		var contact = Object.create(Contact);
		contact.init(nom, prenom);

		// on insère ensuite celui-ci dans le tableau des contacts

		contacts.push(contact);

		// on confirme l'ajout par un message

		console.log("Le nouveau contact a été ajouté");
		console.log("\r");
	}
	else if (choixUtilisateur === 0)
	{
		/* on affiche un message de sortie
		puis la boucle s'interrompt */
		console.log("Au revoir !");
	}
}






