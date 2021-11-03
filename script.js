

const createPokemon = (id, name, sprite, types, weight, moves) => {
  let cardId = "id" + id
  let bodyId = "body" + id
  let pokeID = "poke" + id
  let ulId = "ul" + id
  //crea el elemento contenedor de la tarjeta
  var card = document.createElement("div")
  card.className = "card col-5 col-md-3  col-xl-2"
  // card.style ="width: 18rem;"
  card.id = cardId
  document.getElementById("card-content").appendChild(card)
  //crea el cuerpo de la tarjeta
  var cardBody = document.createElement("div")
  cardBody.className = "card-body"
  cardBody.id = bodyId
  document.getElementById(card.id).appendChild(cardBody)
  //crea el h5 que es el nombre
  var nodo = document.createElement("h5")
  nodo.className = "card-title"
  nodo.innerHTML = `#${id} - ${name.toUpperCase()}`
  document.getElementById(cardBody.id).appendChild(nodo)
  //crea la imagen
  var img = document.createElement("img")
  img.className = "card-img-top"
  img.id = `poke ${pokeID}`
  document.getElementById(cardBody.id).appendChild(img)
  document.getElementById(img.id).src = sprite
  //Crear un h3 de tipos
  var h3 = document.createElement("h3")
    h3.innerHTML = "Types"
    h3.style = "text-align: center"
    document.getElementById(cardBody.id).appendChild(h3)
  //crear los tipos
  var ul = document.createElement("ul")
  ul.className = "list-group list-group-flush"
  ul.id = ulId
  document.getElementById(card.id).appendChild(ul)
  //crear el li del tipo
  types.map(item =>{
    var li = document.createElement("li")
    li.className = "list-group-item types"
    li.innerHTML = item.type.name.toUpperCase()
    document.getElementById(ul.id).appendChild(li)
  })
  //Crear el boton de ver mas
  var a = document.createElement("button")
  a.className = "btn btn-outline-info btn-sm "
  a.innerHTML = "Ver más"
  a.id = "myBtn" + id
  document.getElementById(card.id).appendChild(a)
  var myModal = document.createElement("div");
  myModal.id = "myModal" + id
  myModal.className = "modal"
  document.getElementById(card.id).appendChild(myModal)





  



  //crear el elemento del modal
  // var parrafo = document.createElement("p")
  // parrafo.innerHTML = `#${id} - ${name.toUpperCase()}`
  // document.getElementById("modal").appendChild(parrafo)









  var modal = document.createElement("div");
  modal.id = "modal" + id
  modal.className = "modal-content"
  document.getElementById(myModal.id).appendChild(modal)


  var spanx = document.createElement("span");
  spanx.className = "close"
  spanx.id = "span" + id
  spanx.innerHTML = "&times;"
  document.getElementById(modal.id).appendChild(spanx)

  
  var parrafo = document.createElement("p")
  parrafo.innerHTML = `WEIGHT - ${weight/10} kg.`
  document.getElementById(modal.id).appendChild(parrafo)
  var parrafo2 = document.createElement("p")
  parrafo2.innerHTML = `ATTACKS: `
  document.getElementById(modal.id).appendChild(parrafo2)
  moves.map(item=>{
    var ataques = document.createElement("p")
    ataques.innerHTML = "- " + item.move.name.toUpperCase()
    document.getElementById(modal.id).appendChild(ataques)

    

  } )

  

  // Get the button that opens the modal
  var btnCall = document.getElementById(a.id);
  btnCall.onclick = function() {
    myModal.style.display = "block";
  }
  
  // Get the <span> element that closes the modal
  var spanCall = document.getElementById(spanx.id);
  spanCall.onclick = function() {
    myModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }














  // When the user clicks the button, open the modal 
  // btnCall.onclick = function() {
  //   modal.style.display = "block";
  // }
  
  // When the user clicks on <span> (x), close the modal
  
  
  // When the user clicks anywhere outside of the modal, close it
  
  
}


const poke = async (id)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await response.json()
  let name = data.name
  let sprite = data.sprites.other['official-artwork'].front_default
  let types = data.types
  let weight = parseFloat(data.weight)
  let moves = data.moves
  createPokemon(id, name, sprite, types, weight, moves)



  // console.log(name)
  // console.log(sprite)
  // types.map(item => (console.log(item.type.name)))
}
for (let i =1; i<=898; i++){
  poke(i)
  }


  