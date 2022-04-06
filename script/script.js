// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// utility
 function getRandomInt(min, max) { 
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min) + min);
     }
     
    //  funzione che genera 5 numeri unici e li mette nell'array
     
     let numeri = [];
     
    

        while(numeri.length < 5){
            
           let random = Math.floor(Math.random() * 100) + 1;
            
           if(!numeri.includes(random)){
               numeri.push(random);  
               let testo =`<div>${random}</div>`;
               console.log(testo);
               document.getElementById('numeri').innerHTML = numeri;
           } 
   
        }
    
     console.log(numeri);
     
     
    setTimeout(function(){
        
        for(i = 0; i < 5; i++){
            let numeriUtente = [];
            let ricordaNumeri = parseInt(prompt('inserisci i numeri che hai visto'));
            numeriUtente.push(ricordaNumeri);
            console.log(numeriUtente);
            // adesso ho i numeri che ha pushato l'utente

        }

    },2000);


// creo il risultato
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function controlloRisultati(){
    if(numeriUtente === numeri){
        let vittoria = document.getElementById('vittoria');
        vittoria.innerHTML = ('bravae te li sei ricordati tutti')
        console.log(vittoria)
     

    }
} 
controlloRisultati();



    

    
    
     