import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{

    state={lat:null,errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                    this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({ errorMessage:err.message })
            }
        )
    }
    renderBody(){
        if(this.state.lat&&!this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else if(!this.state.lat&&this.state.errorMessage){
            return <div>Error:{this.state.errorMessage}</div>
        }
        else{
            return <Spinner message="Please accept the allow request" />
        }
    }
    render(){
        return  (
       <div>
        {this.renderBody()}
       </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));