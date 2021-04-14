import React from 'react'
import Cage from './Cage'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      filteredPets: [],
      isCaged: false
    }
  }

  componentDidMount(){
    const endpoint =  '/api/pets'

    fetch(endpoint)
    .then(res => res.json())
    // .then(json => this.setState({pets: json}))
    .then(pets => this.setState({pets: pets, filteredPets: pets}))
  }



  onAdoptPet = (id) =>{
    // const pets = [...this.state.pets]
    // this.setState({pets:pets.map(pet => pet.id !== id? pet : {...pet, isAdopted: true})})
    const filteredPets = [...this.state.filteredPets]
    this.setState({filteredPets:filteredPets.map(pet => pet.id !== id? pet : {...pet, isAdopted: true})})
    
  }

  onChangeType = (type) =>{

    this.setState({filters:{type: type}})
    // this.setState({filters:{type: e.target.value}})

  }

  onFindPetsClick = () =>{
    // let endpoint
    const type = this.state.filters.type
    // if(type === "all"){
    //   endpoint = '/api/pets'
    // }else{
    //   endpoint = `/api/pets?type=${type}`
    // }
    let filterPets
    if(type === "all"){
      filterPets = [...this.state.pets]
    }else{
      filterPets = this.state.pets.filter(pet => pet.type === type)
    }
    this.setState({filteredPets: filterPets})

    // this.setState({filteredPets: this.state.pets.filter(pet => type ==="all"? true : pet.type === type)})

    // fetch(endpoint)
    // .then(res => res.json())
    // .then(json => this.setState({pets: json}))

  }

  setCaged = () =>{
    this.setState({isCaged: !this.state.isCaged})
  }


  render() {
  
    return <>
       {this.state.isCaged ? <Cage /> : null}

      <div className="ui container">
       {/* {this.state.isCaged ? <Cage /> : null} */}
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
              <br/><br/>
              <button  onClick={this.setCaged} className="ui secondary button cage-btn" >
                  Toggle Cage
              </button>
            </div>
            <div className="twelve wide column">
             {/* filter={this.state.filters.type} */}
              {/* <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} /> */}
              <PetBrowser pets={this.state.filteredPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
      </>     
  }
}

export default App
