import './App.css';
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


class Main extends React.Component{
    render(){
        return(
            
            <Container>
                <Card>
                    {data.map((element) => {
return <HornedBeast title={element.title} src={element.image_url} discreption={element.description} />
                    })}
              </Card>
              </Container>
           
        )
    }
}
export default Main;