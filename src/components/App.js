import React from 'react';
import axios from 'axios';
import TextDetail from './text-details';
import Loader from './loader';
import '../style.css'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.inputRef= React.createRef()
        this.OpRef= React.createRef();

        
    }
    state = {
        type: 'all meat',
        text: ''
    }
   
    onConvert = async () => {
         const response =  await axios.get('https://baconipsum.com/api/',{
            params : {
                type: this.state.type,
                paras : this.inputRef.value,
                format : this.onFormat()
                
                

            }
            
        }
        
        )
        this.setState({text: response.data})
        
        
        
    }

    onFormat = ()=> {
        if(this.OpRef.value ==='html') {
            return 'html';
        }else{
            return 'text';
        }
    }

    

    render() {
        console.log(this.OpRef.value)
        return (
            <div className='ui container'>
                <h1 className='ui header'>
                Random text generator
            </h1>
            <div>
                <span className='ui header'>Format:</span>
            <select className="ui dropdown" ref={OpRef=>this.OpRef=OpRef}>
                <option  >html</option>
                <option >Text</option>
            </select>
            <span className='ui header'>Paragraph:</span>
            <div className="ui input">
                
                <input type="number" placeholder="0" ref={inputRef => this.inputRef = inputRef}/>
            </div>
                <button className="ui primary button" onClick={this.onConvert}>
                    Generate
                </button>
            </div>
             <TextDetail  text={this.state.text}/>
            
                
            
            </div>
            
        )
    }
}
export default App;