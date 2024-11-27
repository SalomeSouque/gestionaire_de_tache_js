let form = document.getElementById ("task-form")

form.addEventListener("submit", function (event) {
    event.preventDefault();                             //empecher rechargement page
    let input= document.getElementById("task-input");   // récupérer le champ text
    let inputvalue = input.value;                       // avec .value on récupère la valeur du champ text
    let li= document.createElement("li");               //création d'un li
    li.textContent = inputvalue;                        //le li se rempli avec le champ de l'input (donc ce que l'utilisateur ecrit)
    let ul= document.getElementById ("task-list");      //On appel le ul
    ul.appendChild (li);                                // On prend l'enfant (ici li) pour le mettre dans le parent (ici ul) (avant ça les li se stockaient dans une "salle d'attente")
    
    let buton = document.createElement ("button");          //Je crée un bouton
    let supprimer = document.createTextNode ("Supprimer");  //Je crée le texte que je veux mettre dans le bouton
    buton.appendChild (supprimer);                          //Je met mon texte sur mon bouton
    li.appendChild (buton);                                 //Je met mon bouton sur mes li 
    buton.addEventListener("click", function (eve) {        //Je crée une fonction qui va servir à supprimer le li lors du click sur le bouton
        eve.preventDefault ();                              //           
        ul.removeChild(li);                                 // Je met mon li sur mon ul
    })

    let butontwo = document.createElement ("button");       // Je crée un bouton 
    let modifier = document.createTextNode ("Modifier");    // Je crée le texte que je veuc mettre dans mon bouton
    butontwo.appendChild (modifier);                        // Je met mon texte dans mon bouton
    li.appendChild (butontwo)                               //je mets mon bouton dans mon li

    butontwo.addEventListener("click", function (eve) {     // je crée une fonction qui va me servir à quand je clique sur mon bouton on peut modifier mon li 
        eve.preventDefault ();
        let inputmodif= document.createElement("input");    // je crée un input qui va premettre à l'utilisateur d'écrire
        inputmodif.type ="text";                            //je modifie le type de mon input en texte
        inputmodif.id = "inputmodifier";                    // je donne un id à mon input //je veux récupérer mon first child puis l'afficher dans mon input (donner id à first child ou l'appeler direct?)
        let childli = document
        //let modifli = document.getElementById("inputmodifier");
        //inputmodif.value = firstElementChild.textContent
        //let inputli = li.value; child
        li.appendChild (inputmodif)                         // je met mon input dans mon li  je dois récupérer mon input

        //let modifli = document.getElementById("inputmodifier");
        //modifli.firstElementChild.textContent; 
    })
    
})
