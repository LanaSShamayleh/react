import React from 'react'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Beastdata from './components/data.json';
import SelectedBeast from './components/SelectedBeast.js';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Beastdata : Beastdata,
      show: false,
      selected: {}, 
    }
  }
  ShowModal=(title) =>{
    const selectedBeast=Beastdata.find(horned => 
      {
        if (horned.title===title)
        {
          return horned; 
        }
        console.log(Beastdata);
      })

      this.setState({
        selected :selectedBeast ,
        show:true
      }) 
    } 

   CloseModal = () => {
    this.setState({ show: false });
   }
    render(){
    return(
      <div>
      <Header/> 
      <Main ShowModal={this.ShowModal} Beasts={this.state.Beastdata}/>
      <SelectedBeast ShowModal={this.ShowModal} show={this.state.show} CloseModal={this.CloseModal} Selected={this.state.selected}/>
      <Footer/>
    </div>
      )
}
}
export default App;