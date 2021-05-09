import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import Details from './Details';


const Book = ( {book, i, loading} ) => {

    const [openDetails, setOpenDetails] = useState(false);
    
    if (loading) {
        return <h2 className="loading">Loading...</h2>;
    }

    const showComponent = (name) => {
        if (name === "openDetails") {
            setOpenDetails(!openDetails);
        }
    }

    let volume = book.volumeInfo;

    return (
        <div>
            <div key={i}>

            <Card className="card-item border-0 border-bottom border-5 p-2 py-md-4">    {/* border-0 */}
            <Container>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={volume.imageLinks.thumbnail} className="align-self-start mr-3 p-5 p-md-0"/>
                    </Col>
                    <Col md={10}>
                        <Card.Body>
                        <Card.Title>{volume.title}</Card.Title>
                        <Button onClick={() => showComponent("openDetails")} key={i} className="mt-2 mt-md-5">
                            {!openDetails ? 'Show more' : 'Show less'}
                        </Button>
                        { openDetails && <Details book={book} key={i} />}
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
            </Card>

            </div>           
        </div>
    );
}

export default Book;