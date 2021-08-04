import React from 'react';
import Horned from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Beastdata from './data.json';


class Main extends React.Component{
  selectHorns=(event)=>{

    let numHorns= event.target.value
    let allHorns=Beastdata
    let newHorns
    if (numHorns){
      // eslint-disable-next-line array-callback-return
      newHorns=allHorns.filter((item)=>{
        // eslint-disable-next-line eqeqeq
        if(item.horns==numHorns){
        return item; }
        })
    }
    else {
     newHorns=allHorns;  
    }
    this.props.update(newHorns);

}


render(){
 return(

  <div>
      <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Number of horns : </Form.Label>
            <Form.Control as="select" custom name='HornsNum' onChange={this.selectHorns} style = {{width: '10rem'}} centerd>
                        <option value='1'>One Horn</option>
                        <option value='2'>Two Horns</option>
                        <option value='3' >Three Horns</option>
                        <option value='100'> One Hundered Horns</option>
                        <option value=''>All Available Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardGroup>
                 {this.props.Beasts.map(beast => {
                    return (<Horned
                    imageUrl={beast.image_url}
                    title={beast.title}
                    description={beast.description}
                    keyword={beast.keyword}
                    ShowModal={this.props.ShowModal}
                    horns={beast.horns}
                    />
                   
                    )
                 })
                 }
              </CardGroup>
         </div>
            
     

      )
}
}
export default Main;