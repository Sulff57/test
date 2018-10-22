var mot = prompt("écrit un mot");

function compterNbVoyelles(mot)
{
	mot = mot.toLowerCase();
	alphabetVoyelles = "aeiouy";
	var nbVoyelles = 0;

	for (x = 0; x < mot.length - 1; x++)
	{
		for (y = 0; y < alphabetVoyelles.length - 1; y++)
		{
			if (mot.charAt(x) === alphabetVoyelles.charAt(y))
			{
				nbVoyelles++;
			}
		}
	}

	return nbVoyelles;
}

function inverserMot(mot)
{
	var motInverse = "";
	for (x = mot.length -1; x >= 0; x--)
	{
		motInverse += mot.charAt(x);
	}
	return motInverse;
}

function isPalindrome(mot)
{
	if (mot === inverserMot(mot)) { return true; }
	return false;
}

function convertirEnLeetSpeak(mot)
{
	var motConverti = "";
	console.log(mot.length);
	var test = "test1";
	for (x = 0; x < mot.length; x++)
	{
		console.log("test");
		motConverti += trouverLettreLeet(mot.charAt(x));
	}
	return motConverti;
}

function trouverLettreLeet(lettre)
{
	console.log("test");
	var alphabetNonLeet = "abelos";
	var alphabetLeet = "483105";
	var lettreConvertie = lettre;
	console.log(test);
	test = "test2";
	for (y = 0; y < alphabetNonLeet.length; y++)
	{
		if (lettre == alphabetNonLeet.charAt(y))
		{
			lettreConvertie = alphabetLeet.charAt(y);
		}
	}
	return lettreConvertie;
}

console.log(compterNbVoyelles(mot));
console.log(inverserMot(mot));
if (isPalindrome(mot))
{ 
	console.log("Palindrome = oui"); 
} 
else 
{ 
	console.log("Palindrome = non"); 
}
console.log(convertirEnLeetSpeak(mot));