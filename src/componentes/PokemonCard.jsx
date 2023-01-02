import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/PokemonCard.css"
const PokemonCard = ({ pokemon }) => {
  const [datapokemon, setDatapokemon] = useState()
  const types = datapokemon?.types.map(type => type.type.name).join(" / ")
  const navigate = useNavigate()
  const handleClikPokemon = () => {
    navigate(`/pokedex/${datapokemon?.id}`)
  }
  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setDatapokemon(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <article onClick={handleClikPokemon} className={`pokeCard border-${datapokemon?.types[0].type.name}`}>

      <section className={`pokeCard__header bg-lg-${datapokemon?.types[0].type.name}`}></section>
      <section className='pokeCard__content'>
        <img className='pokeCard__img' src={datapokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h3 className='pokeCard__name'>{pokemon.name}</h3>
        <hr />
        <p className='pokeCard__types'>{types}</p>
        <p className='pokeCard__types-title'>type</p>
        <hr />
        <section className='pokeCard__stats'>
          {
            datapokemon?.stats.map(stat => (
              <div key={stat.stat.name} className='pokeCard__stat'>
                <p className='pokeCard__stat-name'>{stat.stat.name}</p>
                <p className='pokeCard__stat-value'>{stat.base_stat}</p>
              </div>
            ))
          }

        </section>
      </section>

    </article>
  )
}

export default PokemonCard