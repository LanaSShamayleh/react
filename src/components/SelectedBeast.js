import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export class SelectedBeast extends Component {
    
    handleclose=()=> {
        this.props.CloseModal()
      }
    render() {

        return (
            <div>
                <Modal size="lg" ria-labelledby="contained-modal-title-vcenter" centered show={this.props.show} width='400px' height='400px'
      onHide={this.handleclose}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {this.props.Selected.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
           <Card.Img variant="top" src={this.props.Selected.image_url} alt={this.props.Selected.keyword} width='400px' height='400px'/>
           <Card.Title>{this.props.Selected.title}</Card.Title>
            <Card.Text>
              {this.props.Selected.description}
            </Card.Text>
            <Card.Text>
              {this.props.Selected.keyword}
            </Card.Text>
            <Card.Text>
              {this.props.Selected.horns}
            </Card.Text>
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleclose} >Close</Button>
      </Modal.Footer>
    </Modal> 
     
            </div>
        )
    }
}

export default SelectedBeast;
