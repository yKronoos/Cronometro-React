import React,{Component} from "react";
import './style.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
       numero: 0,
       botao: "Vai"
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'Vai'
    }else{
      this.timer = setInterval(() => {
        state.numero+= 0.1
        this.setState(state)
      }, 100)
      state.botao = 'Pausar'
    }

    this.setState(state)
  }

  limpar(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
    
    state.numero = 0;
    state.botao = 'Vai'
    this.setState(state)
  }

  render(){
    return (
      <div className="container">
        <img className="img" src={require('./assets/66175.png')}></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    )
  }
}

export default App