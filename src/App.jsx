import { useState } from "react"
import './App.css'

const App = () => {

  const [team ,setTeam ] = useState([])
  const [money ,setMoney ] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])
let totalStrength 
let totalAgility


function handleAddFighter(fighter){
  if(money>= fighter.price){
    const newTeam  = [...team,fighter]
    setTeam(newTeam)
    const newZombiefighters = zombieFighters.filter(OGfighter => {return fighter.id !== OGfighter.id })
    setZombieFighters(newZombiefighters)
    setMoney(money - fighter.price)

  }else{
    console.log('Not enough money')
  }


}

 function handleremoveFighter(fighter){
  const newTeam = team.filter( member => { return fighter.id !== member.id})
  setTeam(newTeam)
  const newZombiefighters = [...zombieFighters,fighter]
  setZombieFighters(newZombiefighters)
  setMoney(money+fighter.price)


 }


  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: {money}</h3>
    <h3>Team Strength: {totalStrength = team.reduce((acc, current) => acc+current.strength,0)}</h3>
    <h3>Team Agility: {totalAgility = team.reduce((acc,current)=> acc+current.agility,0)}</h3>
    <h2>Team</h2>
    <ul>

    {team.length!==0 ?  team.map(fighter => {
      return(
      <li key={fighter.id}>
        <img src={fighter.img} />
        <h3>{fighter.name}</h3>
        <p>price: {fighter.price}</p>
        <p>strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={()=> handleremoveFighter(fighter)}>Remove</button>

      </li>
      )} )
      : <p>Pick some team members!</p>

    }
  
    </ul>

    <h2>Fighters</h2>
    <ul>
    {zombieFighters.map((fighter) => {
      return(
      <li key={fighter.id}>
        <img src={fighter.img} />
        <h3>{fighter.name}</h3>
        <p>price: {fighter.price}</p>
        <p>strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => handleAddFighter(fighter) }>Add</button>

      </li>

      )

    })}

    </ul>
    
    </>
  )

}

export default App