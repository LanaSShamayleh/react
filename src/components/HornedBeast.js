import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Horned extends React.Component{


  constructor(){ 
    super()
    this.state={
      vote: 0,
      show:false,
        }
  }
  HornedPlus=()=> {
    this.setState({
    vote: this.state.vote+1,
   })
  //  this.ShowModal();
  }
  ShowModalMethod = () => {
    this.props.ShowModal(this.props.title)
  }
  CloseModal = () => {
    this.setState({ show: false });
  }
render(){
    return(
    <div>
<Card className='card-name'style={{ width: '18rem', height:'40rem' } } onClick={this.ShowModalMethod}>
  <Card.Img variant="top" onClick={this.HornedPlus}
  src={this.props.imageUrl}  alt={this.props.keyword} width='400px' height='400px' />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    Number of votes ={this.state.vote}
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    {this.props.keyword}
    </Card.Text>
    <Card.Text>
    Horns={this.props.horns}
    </Card.Text>
    <Button onClick={this.HornedPlus} variant="info">Vote</Button>
  </Card.Body>
</Card>       
</div> 
    )
  }
}
export default Horned ;

