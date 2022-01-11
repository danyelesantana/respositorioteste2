//Manipulando atributos de tags

function trocarImagem(nameImage, animalName){

    //setAtribute: insere valor no atributo
    document.querySelector(".imagem").setAttribute("src", "images/"+nameImage); 
    document.querySelector(".imagem").setAttribute("data-animal", animalName); 
}

function exibirNomeAnimal(){

    let nomeAnimal = document.querySelector(".imagem").getAttribute("data-animal");
    alert("O nome do animal é" +nomeAnimal);
}