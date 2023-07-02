import { useLoaderData, useNavigation } from 'react-router-dom'

const Pokemons = () => {
  const pokemons: any = useLoaderData()
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>
  }

  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  return (
    <div className="Home">
      <h1>Pokemons</h1>

      {pokemons.map((pokemon: any, index: number) => (
        <div key={pokemon.name}>
          <h2>{index + 1} {pokemon.name}</h2>

          <img
            src={`${imgUrl}/${pokemon.url.split('/').slice(-2, -1)}.png`}
            alt={pokemon.name}
          />

          <p>
            <a href={pokemon.url} target="_blank" rel="noreferrer">
              {pokemon.url}
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export const dataLoader = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  
  return data.results
}
  
export default Pokemons