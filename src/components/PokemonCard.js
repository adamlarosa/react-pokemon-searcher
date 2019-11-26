import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      front: true
    }
  }

  changeImage = () => {
    this.state.front ? 
      this.setState({front: false}) : this.setState({front: true})
  }

  render() {
    const {name, sprites, stats} = this.props.pokemon
    return (
      <Card>
        <div>
          <div onClick={this.changeImage} className="image">
            <img src={this.state.front ?
              sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* POKEMON HP HERE hp */}
              {stats.map(stat => 
                stat['name'] === 'hp' && `${stat['value']} ${stat['name']}`
              )}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}
export default PokemonCard
