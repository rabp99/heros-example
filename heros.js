const table_hero = document.querySelector('#row-heros');
const frm_new_hero = document.querySelector('#frm_new_hero');
const hero_name = document.querySelector('#hero_name');
const actor_name = document.querySelector('#actor_name');
const nation = document.querySelector('#nation');
const cell_phone = document.querySelector('#cell_phone');

//const table_hero = document.getElementById('row-heros');

showHeros();
//showPokemons();
async function showHeros() {
    const response = await fetch("backend/heroes", {
      method: "get",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const heros = await response.json();
  
    let filas = "";
    for (let hero of heros) {
      filas += `
              <tr>
                  <td><img class="hero-image" src="backend\\${hero.image}" alt="${hero.hero_name}"></td>
                  <td>${hero.hero_name}</td>
                  <td>${hero.actor_name}</td>
                  <td>${hero.nation}</td>
                  <td>${hero.cell_phone}</td>
                  <td>
                    <a href='detail.html?id=${hero.id}'>Ver detalles</a>
                    <button type="button" onclick="deleteHero(${hero.id})">Eliminar</button>
                  </td>
              </tr>
          `;
    }
    table_hero.innerHTML = filas;
  };

  async function showPokemons() {
    console.log('empezando');
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      method: "get",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    console.log('esperando respuesta', response);
    const heros = await response.json();
    console.log('respuesta obtenida', heros);
    let filas = "";
    for (let hero of heros.results) {
      filas += `
              <tr>
                  <td></td>                 
                  <td>${hero.name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          `;
    }
    table_hero.innerHTML = filas;
  };

  async function addHeroe() {
    let data = {
      hero_name: hero_name.value,
      actor_name: actor_name.value,
      nation: nation.value,
      cell_phone: cell_phone.value,
    }
    const response = await fetch("backend/heroes", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const message = await response.json();
    showHeros();
    alert(message);
    
    hero_name.value = '';
    actor_name.value = '';
    nation.value = '';
    cell_phone.value = '';
  };

  async function deleteHero(id) {
    if (!confirm('¿Está seguro de eliminar este héroe?')) {
      return;
    }
    const response = await fetch(`backend/heroes/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const message = await response.json();
    showHeros();
    alert(message);
  };

  frm_new_hero.addEventListener('submit', function(e) {
    e.preventDefault();
    addHeroe();
  });