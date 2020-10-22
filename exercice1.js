//Exxercice1 Écrivez un programme JavaScript pour vérifier si deux nombres se trouvent dans la plage 40..60 ou
//dans la plage 70..100 inclus.

//function numbersRang (x,y) {
//    if((x>=40 && x<=60 && y>=40 && y<=60) || 
 //   (x>=70 && x<=100 && y>=70 && y<=100)){
 //       return true;
 //   }
 //   else{
  //      return false
  //  }
//}
//console.log(numbersRang (44,56));


//EXERCICE 2 Écrivez un programme JavaScript pour calculer la différence absolue entre un nombre spécifié et 19.
//Renvoie le triple de leur différence absolue si le nombre spécifié est supérieur à 19.

    //function diff_cal (n) {
 
    //if (n<=19){
    //    return (19-n);

   // }
    //else{
    //    return (n-19)*3;
    //}
//}
//console.log(diff_cal (9));


//.......................//

//Une Fonction qui retourne un nombre n seulment s'il est un multiple de M

//On definit la fonction
function isMultiple (n,m) {
    return n % m === 0
}

//On appel la fonction
//let resultat = isMultiple (5, 15);
//console.log (resultat);


//.................//

//On utilise la fonction pour savoir si un nombre est pair

//function isEven (i) {

   // return isMultiple (i,2)
//}

//console.log(isEven (4));
//OU

//let resultat = isEven (4);
//console.log(isEven);

//
//On peut aussi nommer une fonction on appel une fonction anonyme

//let isMultiple = function (n,m) {
//    return n % m === 0
//}

//isMultiple (8, 3);

//console.log (estMultiple);

//La fonction fléchée = un fonction anonyme

//let isMultiple = (n , m) => {
   // return n % m === 0;
//}

//ou

//let isMultiple = (n, m) => n % m === 0;  on utilise cette façon seulment s'il y a une seule instruction

//Fonction addition 

//function addition (a, b) {
 //   return a + b;
//}
//Les paramêtres de la fonction {} tout les arguments sont à l'interieur. Tout ce qui est en dehors ne fait pas parti de l'arguments.
//On l'intéronge on dehors des arguments avec le let et affiche avec le console log.  


//Calculer un nombre infini de nombre on utilise un tableau d'arguements (...+argument) cad on ne s'sais pas combien d'argument.

//function additionner(...unArgument) {
    //let resultat = 0
    //for (const arg of unArgument){
    //    resultat += arg;
    //}
    //return resultat;
//}
//resultat = additionner(3, 5, 9)
//console.log (`resultat = ${resultat}`);

//concatenation

//resultat = additionner(3, "5", 9)
//console.log (`resultat = ${resultat}`);

//Fonction qui s'appel elle même Fonction auto executée grace au (). Si elle est definit on l'appel en la definissant si elle ne l'est pas 
//on le definit dans la ().
//(function multiplication (a,b){
   // console.log (a*b)
//})(6,9.)

//exemple
//(() => {
//    prompt("Entrez votre nom")
//})()

//function portee() {
    //for (var i= 0; i<5; i++){
      //  console.log(`portee boucle =`${i})======portée local
    //}
    //console.log(`portee function`= ${i})======portée global
//}

//les 2 consoles vont s'executer var à une portée global. Le let et constant sont de portée local et donc ne s'executent
//que dans leur boucle.


//LES class le nom de l'objet commence toujours par une majuscule, le . permet d'appler ce qu'il ya à l'interieur de la class.
//tout le nouveau objet commenceront par un new

//class Compte{
  //  numero;
  //  solde;
//}
//let compte1= new Compte();

//compte1.numero = 300;
//compte1.solde = 5 000;

//let compte2= new Compte();

//compte1.numero = 700;
//compte1.solde = 9 000;

//let compte3= compte2;

//console.log(compte3) LE compte 2 ET 3 utilisent la même adresse ou réference donc les modifications de 3 se répercuteront sur 2;
//Sinon il faut utiliser les valeurs primitives = string, Boolean, numero



//On va utiliser un constructeur pour modéliser l'activité pour ne pas a avoir a les entrer a chaque fois.

//class Compte{
//    numero;
  //  solde;
    //constructor(n){
      //  this.numero = n ======car le constructeur impose de renseigner est de portée local donc si on veux que le numéro du compte prenne le nummero n on doit mettre this.
        //  this.solde = solde 
//    }
//}
//console.log(compte);

//class Compte{
//    constructor(numero){
//      this.numero = numero  //=Propriété = caractéristique des la classe
//      this.solde = 50 
   //      }
//        crediter (montant){...} //=Une Méthose c'est les fonctions que l'on peut faire avec cette objet
 //        this.solde + = montant;
  //  }
//
 //let compteA = new compteA(300);
 //console.log(compteA)   


//Une méthode est une fonction qui s'applique sur les objets d'une certaine type

//JSON = JavaScript objet Notation = la façon d'écrir du javaScript {Objet: clé:valeur; clé:valeur;}

let personne = new Object ();
personne.prenom = "Joachim";
personne.age = 26;

console.log(personne);




