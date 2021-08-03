import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

class HornedBeast extends React.Component{
    constructor(){
        super();
        this.state={
        vote:0,
        }
    }
    setVote=()=>{
        this.setState({
            vote:this.state.vote+1,
        })
    }

    // rendering function
    render(){
        return(
            <Card style={{ width: '50rem' }}>
            <Card.Img  src={this.props.src} alt={this.props.title} title={this.props.title} width='500px' height='500px' />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              {this.props.discreption}
              </Card.Text>
              <Button onClick={this.setVote}>{this.state.vote} ✔✔</Button>
            </Card.Body>
          </Card>
        )
    }
}
export default HornedBeast;