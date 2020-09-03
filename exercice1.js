//Exxercice1 Écrivez un programme JavaScript pour vérifier si deux nombres se trouvent dans la plage 40..60 ou
//dans la plage 70..100 inclus.

function numbersRang (x,y) {
    if((x>=40 && x<=60 && y>=40 && y<=60) || 
    (x>=70 && x<=100 && y>=70 && y<=100)){
        return true;
    }
    else{
        return false
    }
}
console.log(numbersRang (44,56));


//EXERCICE 2 Écrivez un programme JavaScript pour calculer la différence absolue entre un nombre spécifié et 19.
//Renvoie le triple de leur différence absolue si le nombre spécifié est supérieur à 19.

    function diff_cal (n) {
 
    if (n<=19){
        return (19-n);

    }
    else{
        return (n-19)*3;
    }
}
console.log(diff_cal (9));



