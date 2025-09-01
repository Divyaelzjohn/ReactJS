import React from 'react'

const withData=(wrappedComponent, url)=>{
  return class extends React.Component{
    state={data:[],loading:true}
    async componentDidMount(){
      const res=await fetch(url);
      const data =await res.json();
      this.setState({data, loading:false})
    }
    render(){
      if(this.state.loading) return <p>Loading...</p>;
      return <wrappedComponent data={this.state.data} {...this.props}/>;
    }
  }
}
export default withData
