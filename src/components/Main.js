import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup'


class Main extends React.Component{
    render(){
        return(
            
            <CardGroup>
                  
                 {this.props.Beasts.map(beast => {
                  return (<HornedBeast
                    imageUrl={beast.image_url}
                    title={beast.title}
                    description={beast.description}
                    keyword={beast.keyword}
                    ShowModal={this.props.ShowModal}
                    horns={beast.horns}/>
                    )
                 })
               }  
                  </CardGroup>
           
        )
    }
}
export default Main;