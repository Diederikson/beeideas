function handleClick(callback){
    if (callback){
        alert('Kleur Achtergrond wordt veranderd');
        callback();
    }
    else{
        alert('Verder niks');
    }
}
function witteAchtergrond(){
    document.body.style.background = "white";
    alert('Achtergrond wit gemaakt');
}
function rodeAchtergrond(){
    document.body.style.background = "red";
    alert('Achtergrond rood gemaakt');
}

/**
 * - de functie handleClick kan met of zonder parameter worden aangeroepen
 * - Alert is een apart (modaal) venster dat de boodschap toont
 * - css-attributen van elementen (zoals achtergondkleur) kunnen in javascript via de DOM een waarde krijgen  
 */