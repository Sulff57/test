var Contact = {
    //Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoi la description
    decrire: function () {
        var description = "Nom : " + this.nom + ", prenom : " + this.prenom + ".";
        return description
    },
};

// Création des contacts avec Contact pour prototype
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

//Création d'un tableau avec les contacts
var contacts = [contact1, contact2];



console.log("Bonjour, bienvenue dans votre gestionnaire de contact.")

while (action != 0) {
    console.log("");
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    console.log("");
    var action = (prompt("Entrez une commande"));
    
    switch (action) {
        //Affiche tous les contacts
        case "1":
            console.log("Voici les contacts :")
            contacts.forEach(function (contact) {
                console.log(contact.decrire());
            });
            break;
        // Ajoute un contact 
        case "2":
            var contact3 = Object.create(Contact);
            contact3.init(prompt("Entrez le nom du nouveau contact :"), prompt("Entrez le prénom du nouveau contact :"));
            contacts.push(contact3);
            console.log("Contact ajouté.");
            break;
            //Quitte le programme
        case "0":
            break;
            //Commande incorrect.
        default:
            console.log("Je n'ai pas compris !");


    };
};
console.log("Merci, à bientôt !")
