import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Beastdata : data,
      show: false,
      selected: {}, 
      Horns: 'ALL',
    }
  }
  ShowModal=(title) =>{
    // eslint-disable-next-line array-callback-return
    const selectedbeast=data.find(horned => 
      {
        if (horned.title===title)
        {
          return horned; 
        }
      })

      this.setState({
        selected :selectedbeast ,
        show:true
      }) 
    } 

   CloseModal = () => {
    this.setState({ show: false });
   }
  update=(newHorn)=>{
this.setState({
  Beastdata:newHorn

})
  }
    render(){
    return(
      <div>
      <Header/>     
      <Main update={this.update} ShowModal={this.ShowModal} Beasts={this.state.Beastdata}/>      
      <SelectedBeast ShowModal={this.ShowModal} show={this.state.show} CloseModal={this.CloseModal} Selected={this.state.selected}/>
      <Footer/>
    </div>
      )
}
}
export default App;