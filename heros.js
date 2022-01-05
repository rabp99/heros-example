const table_hero = document.querySelector('#row-heros');
//const table_hero = document.getElementById('row-heros');

showHeros();
//showPokemons();
async function showHeros() {
    const response = await fetch("backend/heroes/get-heroes.php", {
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