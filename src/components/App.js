import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    console.log(value)
    this.setState({
      ...this.state, filters: {type: value}
    })
  }

  onFindPetsClick= () => {
    if(this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then( results => {
        this.setState({
          ...this.state, pets: results
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then( results => {
        this.setState({
          ...this.state, pets: results
        })
      })
    }

  }


  onAdoptPet= (id) => {
    console.log(id)
    const pets = [...this.state.pets]

    this.setState({pets: pets.map(pet => pet.id !== id ? pet : {...pet, isAdopted: true})})
    // console.log(this.state.pets.find(pet => pet.id === e.id).isAdopted)
    // this.state.pets.find(pet => pet.id === e.id).isAdopted = true
    // pet.isAdopted = true
    // console.log(this.state.pets.find(pet => pet.id === e.id))
    // e.setState({
    //   isAdopted: true
    // })

  }

  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
