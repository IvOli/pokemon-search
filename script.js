const createPokemon = (id, name, sprite, types, weight, moves) => {
  // select the target element
  const e = document.getElementById("cardId");

  // remove the list item
  e.remove()
  let cardId = "cardId"
  let bodyId = "body" + id
  let pokeID = "poke" + id
  let ulId = "ul" + id
  //crea el elemento contenedor de la tarjeta
  var card = document.createElement("div")
  card.className = "card col-8 col-md-5  col-xl-3"
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
  a.className = "btn btn-outline-info btn-sm mas"
  a.innerHTML = "Ver más"
  a.id = "myBtn" + id
  document.getElementById(card.id).appendChild(a)
  var myModal = document.createElement("div");
  myModal.id = "myModal" + id
  myModal.className = "modal"
  document.getElementById(card.id).appendChild(myModal)

  //crear el elemento del modal

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
  parrafo.className = "parrafo"
  document.getElementById(modal.id).appendChild(parrafo)
  var parrafo2 = document.createElement("p")
  parrafo2.innerHTML = `ATTACKS: `
  parrafo2.className = "parrafo"
  document.getElementById(modal.id).appendChild(parrafo2)
  moves.map(item=>{
    var ataques = document.createElement("p")
    ataques.className = "ataques"
    ataques.innerHTML =  item.move.name.toUpperCase()
    document.getElementById(modal.id).appendChild(ataques)
  })

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
}
  const pokemonSearch = () => {
    // console.log(pokemon)
    let pokesearched = document.getElementById("search-pokemon").value.toLowerCase()
    console.log(pokesearched)
    pokesearched.length > 0 ? poke(pokesearched): alert(`No puedes dejar vacio el campo de busqueda`);
    
  }

  const poke = async (i)=> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    const data = await response.json()
    console.log(data)
    let name = data.name
    let sprite = data.sprites.other['official-artwork'].front_default
    let types = data.types
    let weight = parseFloat(data.weight)
    let moves = data.moves
    let id = data.id
    createPokemon(id, name, sprite, types, weight, moves)
  }