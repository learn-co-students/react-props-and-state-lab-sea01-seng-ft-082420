import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  buildPetCard=() => {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)}
      </div>
    // this.props.pets.map( pet => (

    //  <Pet
    //   key= {pet.id}
    //   id= {pet.id}
    //   type ={pet.type}
    //   gender = {pet.gender}
    //   age = {pet.age}
    //   weight = {pet.weight}
    //   name = {pet.name}
    //   isAdopted = {pet.isAdopted}
    //   onAdoptPet= {this.props.onAdoptPet}
    //  />
    )

  }

  // id: '2c902312-dfa3-446f-8b4b-5e115170d807',
  // type: 'cat',
  // gender: 'male',
  // age: 3,
  // weight: 1,
  // name: 'Teddy',
  // isAdopted: false,

  render() {
  return <div className="ui cards">{this.buildPetCard()}</div>
  }
}

export default PetBrowser
