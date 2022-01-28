const hero_name = document.querySelector('#hero_name');
const image = document.querySelector('#image');
const actor_name = document.querySelector('#actor_name');
const nation = document.querySelector('#nation');
const cell_phone = document.querySelector('#cell_phone');

//const table_hero = document.getElementById('row-heros');

showHero();
//showPokemons();
async function showHero() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = Object.fromEntries(urlSearchParams.entries()).id;
    const response = await fetch(`backend/heroes/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const hero = await response.json();
    hero_name.innerHTML = hero.hero_name;
    image.innerHTML = `<img class="hero-image" src="backend\\${hero.image}" alt="${hero.hero_name}"></img>`;
    actor_name.innerHTML = hero.actor_name;
    nation.innerHTML = hero.nation;
    cell_phone.innerHTML = hero.cell_phone;
  };