import React from 'react';
import axios from 'axios';
class App extends React.Component{
    state = {
        paras: 4,
        type: 'hipster-latin',
        html: true
    }
    componentDidMount(){
        async const response =  await axios.get('http://hipsterjesus.com/api/',{
            params : {
                paras : this.state.paras,
                type: this.state.type,
                html: this.state.html

            }
        })
        console.log(response);
    }

    render() {
        return <div></div>
    }
}
export default App;