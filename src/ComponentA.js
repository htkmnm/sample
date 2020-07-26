import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentA = () => {

    return (
        <>
            <h1>Menu</h1>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='componentb' >ComponentB</Link></li>
                <li><Link to='componentc' >ComponentC</Link></li>
            </ul>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Card.Link href='#'>Card Link</Card.Link>
                        <Card.Link href='#'>Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>ComponentA</div>
            <Link to='/componentb' >ComponentBへ移動</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default ComponentA;