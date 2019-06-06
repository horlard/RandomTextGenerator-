import React from 'react';
import axios from 'axios';
class App extends React.Component{
    state = {
        paras: 4,
        type: 'all meat',
        format: 'text',
        text: ''
    }
    componentDidMount= async () =>{
         const response =  await axios.get('https://baconipsum.com/api/',{
            params : {
                type: this.state.type,
                paras : this.state.paras,
                format : this.state.format
                
                

            }
            
        }
        
        )
        console.log(response.data);
        
    }

    render() {
        return <div></div>
    }
}
export default App;