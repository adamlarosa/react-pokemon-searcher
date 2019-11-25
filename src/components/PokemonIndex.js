import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      filteredPoke: []
    }
  }
  componentDidMount() {
    this.pokemonFetch();
  }
  pokemonFetch = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemons: json,
          filteredPoke: json
        })
      })
  }
  
  searchBarChange = (e) => {
    //console.log('🤔')
    this.setState({
      filteredPoke: this.state.pokemons.filter(pokemon => pokemon.name.includes(e.target.value))
    })
  }
  
  addNewPokemon = (newPoke) => {
    this.setState({
      pokemons: [...this.state.pokemons, newPoke],
      filteredPoke: [...this.state.filteredPoke, newPoke]
    })
  }

  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={(e) => this.searchBarChange(e)} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPoke}/>
      </Container>
    )
  }
}
export default PokemonPage
