import React from 'react'

class Pet extends React.Component {

//   constructor(props) {
//     super()
//     this.state= {
//       adopted: props.isAdopted
//     }
// }

//   handleAdoption = () => {
//     this.setState({
//       adopted: true
//     })
//   }

  // handleClick = () => {
  //   this.props.onAdoptPet(this.props.id)
  //   // this.setState({
  //   //   adopted: true
  //   // })
  // }

  render() {
    let {id, type, gender, age, weight, name, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender=== 'male' ? '♂ ' : '♀ '}
            {name}
          </a>
          <div className="meta">
    <span className="date">PET TYPE: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button>}
          
         
        </div>
      </div>
    )
  }
}

export default Pet

// id: '2c902312-dfa3-446f-8b4b-5e115170d807',
// type: 'cat',
// gender: 'male',
// age: 3,
// weight: 1,
// name: 'Teddy',
// isAdopted: false,