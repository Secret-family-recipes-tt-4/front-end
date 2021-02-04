import React from "react";
import { Card } from "react-bootstrap";
function Home() {
    return (
        <div className="card-group">
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/7Sx0PYS/bf-welling.png"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            Gordon Ramsey's Beef Wellington
                        </Card.Title>
                        <Card.Text>
                            <p>
                                Don't be an idiot sandwich, go make yourself a
                                goddamned beef wellington! Come on, you see that
                                juicy motherf*cker up here. Just don't mess it
                                up!
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/jTLxPKj/cheesecake.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            Rachel and Chandler's cheesecake
                        </Card.Title>
                        <Card.Text>
                            <p>
                                Stop stealing your neighbor's cheesecake,
                                because we've got the recipe right here. It's so
                                good, you'll eat it off the floor!
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/gwNBpft/em-meatball.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            Eminem's Mom's Spaghetti
                        </Card.Title>
                        <Card.Text>
                            <p>
                                There will be no vomit on his sweater today,
                                with this delicious spaghetti and meatballs,
                                you'll be ready for the toughest of rap battles
                                at the shelter.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/8269kZ7/rachel.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            Rachel's English trifle
                        </Card.Title>
                        <Card.Text>
                            <p>
                                I piled a bunch of raspberries and ladyfingers
                                on top of each other, then dumped the entire pan
                                of beef sauteed with peas and onions onto
                                everything. I poured in more custard, obscuring
                                the beef, then added some bananas and topped it
                                all off with whipped cream.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/zrSTtDW/remy.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            Remy's Ratatouille
                        </Card.Title>
                        <Card.Text>
                            <p>
                                Also known as "Confit Byaldi", this dish will
                                bring you back to your provincial French
                                childhood, and even save your failing restaurant
                                for good measure. (Remy not included)
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="mb-11" style={{ width: "25rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/dpJb62H/Turkish.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="title">
                            White Witch's Turkish Delight
                        </Card.Title>
                        <Card.Text>
                            <p>
                                You don't need any of Jadis's magic potion to
                                make these delicious turkish delights!
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Home;
