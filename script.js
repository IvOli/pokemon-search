const createPokemon = (id, name, sprite, types) => {
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
  // var a = document.createElement("a")
  // a.className = "btn btn-outline-info btn-sm "
  // a.innerHTML = "Ver más"
  // document.getElementById(card.id).appendChild(a)

}


const poke = async (id)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await response.json()
  let name = data.name
  let sprite = data.sprites.other['official-artwork'].front_default
  let types = data.types
  createPokemon(id, name, sprite, types)



  // console.log(name)
  // console.log(sprite)
  // types.map(item => (console.log(item.type.name)))
}
for (let i =1; i<=898; i++){
  poke(i)
  }


  