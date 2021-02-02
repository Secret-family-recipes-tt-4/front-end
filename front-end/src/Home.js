import React from "react";
import { Card } from "react-bootstrap";

function Home() {
    return (
        <div>
            <h1>This is my Homepage</h1>
            <Card className='mb-10'>
                <Card.Body>
                    
                    <Card.Text>
                        <h1>This is a new recipie</h1>
                    </Card.Text>
                        <button className='editbtn' class='btn'>Edit</button>
                
                        <button className='deletebtn' class='btn'>Delete</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;
