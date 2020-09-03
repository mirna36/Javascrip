//console.log('hello world');

//var firstname;
//firstname= "papa";
//firstname= 42;
//firstname= true
//console.log(typeof(firstname));

//operateur
//var num1= 2, num2= 4, result;
// result= num1 + num2 * num1;
// num1= num1 + 10;
//num1+= 10;
//console.log(num1)

//var a = 2;
//a++;
//console.log(++a);
// console.log(a);

// var age = 60;
// var name= 'Big Joe'
// console.log('Mon Papa est ' + name + '\n et il a ' + age)
// console.log(`mon Papa ${name}
//  est il a ${age} ans`)

//  var val = parseInt(prompt('entrez un nombre : '));

//  console.log(val);
//  console.log(typeof(val));

//  les conditions


// var age = Number(prompt('entrez votre age : '));


// if(age < 18){
//     console.log('tu est Mineur');
// }else if(age == 18){
//     console.log('tu est un vrai Homme');
// }else{
//     console.log('tu est adulte');
// }

// var age = parseInt(prompt('entrez votre age : '));

// (age < 18)?console.log('tu est jeune'): console.log('Vous etes majeur')

// var age = parseInt(prompt('entrez votre age : '));
// var categorie = (age>=18)? "majeur" : "mineur";
// alert("vous etes " + categorie);

// document.getElementById("demo").style.display= 'none';

//SWITCH JOUR= if, else

//var jour = prompt('quel jour on est ?');
//switch(jour){
 //   case"vendredi":
    //    console.log("yes! c'est bientôt le weekend");
    //                break;

   // case"samedi":
   // case"dimanche":
    //    console.log("c'est le weekend!")
    //    break;
   // default:
    //    console.log("oooh la fin du weeken");                 
//}



//BOUCLE FOR//

//var n="";
//console.log(typeof(n));
//for(var i=0; i<9; i++){
   // if(i==3){continue=n'affiche pas le 3 Break s'arrêt au 3éme chiffre;}
    //n +=i;

//}
//console.log(str);

//BOUCLE WHILE//
//var n=0;
//while(n<6){
//    n++;
//}
//console.log(n)

//DO AND WHILE= il affiche au moins 1 FOIS//
//var n =5
//do{
//    console.log("Nombre " + n);
//    n++;
//}
//while (n<5)

//6 FALSY VALUES:
//0; NaN; null;""sans espace;undefined,false.

//var n= 0;
//var bool = Boolean (n);
//console.log(bool);

//LES FONCTIONS

//1er possibilité

//function add(num1, num2){
//    var n = num1 + num2
//    return n;
    // return permet de nous retourner le résultat localement
//}
//var p = add(2,5);
// ON RECUPERE LE RESULTAT DE LA FONCTION POUR LE RUTILISER

//var division =14/p
//console.log(division)

//var a = add(4,6);
//var division = 14/a
//console.log(division)

//SI ON DEFINI DEJA UN DES NOMBRE
//function add(num1, num2=2){
//    var n = num1 + num2
//    return n;
    // return permet de nous retourner le résultat localement
//}
//var p = add(2);
// ON RECUPERE LE RESULTAT DE LA FONCTION POUR LE RUTILISER

//var division =14/p
//console.log(division)

//var a = add(4);
//var division = 14/a
//console.log(division)

//difference avec une fonction, une fonction marche même si on la met avant de déclarer une variable ou après. alors que le var seul
//ne fonctionne que si la variable est déclarer avant cf exemple. 

//CF fonctionne pas
//var soustraction = a - b
//console.log(soustraction)
//var a = 10 , b=5

//CF fonctionne
//var a = 10 , b=5
//var soustraction = a - b
//console.log(soustraction)


//Difference entre VAR, LET, CONST

//VAR
//function add(num1, num2){
  // if(true){
    //    var n = num1 + num2
      //  console.log(n);
    //}
    
//}
//add(4, 5);

//function add(num1, num2){
  //  if(true){
    //     var n = num1 + num2
         
     //}
     //console.log(n);
 //}
 //add(4, 5);
 //LES 2 DONNENT UN RESULTA

//LE LET
//function add(num1, num2){
//    if(true){
//         let n = num1 + num2
//         console.log(n);
//     }
     
// }
// add(4, 5);
 
 //function add(num1, num2){
   //  if(true){
     //     let n = num1 + num2
          
     // }
      //console.log(n);
  //}
  //add(4, 5);
  //SEULMENT LE 1ER DONNEUN RESULTA

  //LA CONSTANT doit toujours être déclarer et je change plus elle est fixe
  //const name = "ABOUDOU";
  //name=JHON
  //console.log(name);

  //BONNE ECRITURE
  //const name = "ABOUDOU";
  //console.log(name);

  // IL ne reconnaitra pas JHON ALORS QUE LET PREND LA DERNIERE VARIABLE RENTREE
  //let name = "ABOUDOU";
  //name=JHON
  //console.log(name);
  //let affichera Jhon la dernière valeur entrée

 // var nameV="glo";
 // let nameL="glo";

 // if (true){
    //  var nameV="loc";
      //let nameL="loc";
  //}
  //console.log(nameV);
 // console.log(nameL);
//c'est mieux d'utiliser le let car quand on declare le nom ne change pas donc moins d'erreur

// TABLEAU
//let tab = ['banane', 'pomme',3,'abricot',5];
//for (var index in tab) {
//    console.log(index + "=>" + tab [index]);
//}
//Affiche les valeur avec les indice

//for ( var val of tab){
//    console.log(val)
//}
//Affiche les valeur 


//tab.forEach(
    //maVal => console.log(maVal)
//)
//Applique une fonction anonyme pour chaque élément du tableau

//tab.sort(); //PERMET DE TRIER PAR ORDRE ALPHANUMERIQUE
//console.log(tab)

//push/pop ajouter enlever de la droite
//tab.push('orrange')
//console.log(tab);

//unhift/shift ajouter enlever la gauche
//tab.unshift('orange');
//console.log(tab);

//let tab1 = new Array();
//tab1.push('orange')
//console.log(tab1);


//unhift/shift ajouter enlever la gauche

//console.log(tab[2], tab[3]);

//for(let i=0; i<tab.length; i++){
   
    
    //console.log(tab[i]);

    //AFFICHER LES INDICES RANG
    //console.log(i + '=>' + tab[i])

//}

//TRI NUMERIQUE

//TRI alphanurérique par default code ASCCII
//tab.sort();
//console.log(tab);
// affichage [1, 111,22,3,6]

//Tri numérique

//tab=[1,111,22,3,6]
//tab.sort(function (a,b) {
 //   if(a<b) {return-1;}
  //  else if (a>b) {return 1;}
//    else {return 0;}    
     
 //   });

 //LES OBJETS 
 //la fonction objet : s'utilise avec les {} on attribue une valeur à un clé EXEEMPLE clé=firname et valeur nom des fonctions prèdef s'appliqueront au parent qui est "objet".

 //var personne= {
 //    firsname : "John",
  //   lastname : "Lecodeur",
  //   age : 40
 //};
 //console.log(personne);






