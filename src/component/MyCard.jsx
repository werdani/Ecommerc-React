import React, { Component } from 'react' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MyCard extends Component {
   render () {
    return(
               <Card>
                  
                        <Card.Img variant="top" src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9086.png" />
                        <Card.Body>
                        <Card.Title>T shirt</Card.Title>
                        <Card.Text>
                           bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
               </Card>
               
    )
  }
}

