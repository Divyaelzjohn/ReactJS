// import React, { PureComponent } from 'react'

// class PureComp extends PureComponent {
//   render() {
//     console.log('Pure Comp render');
//     return (
//       <div>
//         Pure Component{this.props.name}
//       </div>
//     )
//   }
// }
// export default PureComp


import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render');
    return (
      <h2>
        Pure Component{this.props.name}
      </h2>
    )
  }

  // render(){
  //   console.log("Profile rendered");
  //   return <h2>{this.props.name}</h2>
  // }
}
export default PureComp
