import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import Pill from './Pill.jsx'
import Barplot from './Barplot.jsx'

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];
{/*ideas: make pills for filtering
  can I add pictures?
  What we need to do:
  - add pills (need pill.jsx)
  - add filtering based on the pills
  - add styling for the cards
  - add pictures
  - can we add some filters on attack and hp?*/}

function App() {
  const uniqueTypes = [...new Set(pokemons.map(p => p.type))];
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filteredPokemons = selectedTypes.length === 0
    ? pokemons
    : pokemons.filter(p => selectedTypes.includes(p.type));

  return (
    <>
      <h1>Pokemon App</h1>
      <h3>You can filter the Pokemons by type using the pills below.</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", minWidth: "200px"}}>
        {uniqueTypes.map((type, i) => (
          <Pill key={i} type={type} isSelected={selectedTypes.includes(type)} onClick={() => toggleType(type)} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 300px)", gap: 12 }}>
        {filteredPokemons.map((row) => (
          <Card key={row.id} row={row} />
        ))}
      </div>
    </>
  )
}

export default App
