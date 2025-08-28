/*import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Reg Comp render');
    return (
      <div>
        Regular Componet{this.props.name} 
      </div>
    )
  }
}

export default RegComp
*/

import React, { Component } from 'react'

class RegComp extends Component {
  render() {
      console.log("Normal Component rendered");
      return <h2>Normal Component-{this.props.name}</h2>
  }
}
export default RegComp