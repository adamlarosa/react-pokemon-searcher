import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  nameChange = (e) => {this.setState({name: e.target.value})}
  hpChange = (e) => {this.setState({hp: e.target.value})}
  frontChange = (e) => {this.setState({frontUrl: e.target.value})}
  backChange = (e) => {this.setState({backUrl: e.target.value})}

  handleSubmit = () => {
    // console.log(this.state)
    /* FETCH POST GOES HERE??!?! */

    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
          "Content-type": 'application/json',
          "Accept": 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          stats: [{value: this.state.hp, name: 'hp'}],
          sprites: {front: this.state.frontUrl, back: this.state.backUrl}
      })
    })
      .then(resp => resp.json())
      .then(json => {
        //console.log(json)
        this.props.addNewPokemon(json)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              onChange={this.nameChange} 
              fluid label="Name" 
              placeholder="Name" 
              name="name" />
            <Form.Input 
              onChange={this.hpChange} 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" />
            <Form.Input 
              onChange={this.frontChange} 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl" />
            <Form.Input 
              onChange={this.backChange} 
              fluid label="Back Image URL" 
              placeholder="url" 
              name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
