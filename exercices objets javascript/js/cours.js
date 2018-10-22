var Film =
{
    init: function (titre, annee, realisateur) 
    {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    afficher: function()
    {
        var description;

        description = this.titre + " (";
        description += this.annee + ", ";
        description += this.realisateur + ")";

        return description;
    }
};

var films = [];

var film1 = Object.create(Film);
var film2 = Object.create(Film);
var film3 = Object.create(Film);

film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
film2.init("Vice-Versa", 2015, "Pete Docter");
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film)
{
    console.log(film.afficher());
});