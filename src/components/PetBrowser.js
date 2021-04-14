import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  adoptRandom = () => {
    const idx = Math.floor(Math.random() * this.props.pets.length);
    const id = this.props.pets[idx].id;
    this.props.onAdoptPet(id);
  };

  componentDidMount(){
    // this.timer = setInterval(() => {
    //   this.adoptRandom()
    // },2000)
    setInterval(() => {
      this.adoptRandom()
    },2000)
  }


  //setinterval is triggering componentDidUpdate so the alert continues to show

  componentDidUpdate(prevProps){
    const prevUnAdoptedPets = prevProps.pets.filter(pet => !pet.isAdopted)
    const unAdoptedPets = this.props.pets.filter(pet => !pet.isAdopted)

    if(unAdoptedPets.length === 0 && prevUnAdoptedPets.length){
      alert('you loose')
      // clearInterval(this.timer)
    }
    
  }

  render(){
    // const filteredPets = this.props.pets.filter(pet => pet.type === this.props.filter)
    return (<div className="ui cards">
       {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)}
    </div>
    )
  }
}


export default PetBrowser
