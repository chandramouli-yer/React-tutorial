import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state={videos:[],selectedVideo:null}

    componentDidMount(){
        this.onFormSubmit('Code');
    }
    onSelectedVideo=(video)=>{
        this.setState({selectedVideo:video})
    }
     onFormSubmit=async (term)=>{
         if(term!==''){
     const response= await youtube.get("/search",{
            params:{
                q:term
            }
        })
      this.setState({videos:response.data.items,
    selectedVideo:response.data.items[0]})
    }
    }
    render(){
        return(
            <div className="ui container">
               
                <SearchBar onTermSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ui eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="ui five wide column">
                <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos}/>
                </div>
                </div>
                </div>
                </div>
        )
    }
}

export default App;