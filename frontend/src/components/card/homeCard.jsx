import Card from 'react-bootstrap/Card';

export const HomeCardComponent = () => {
    return (
        <>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src="img/card01.jpg" />
                <Card.Body>
                    <Card.Title>Товары 1</Card.Title>
                    <Card.Text>
                        Красота
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top2" src="img/card02.jpg" />
                <Card.Body>
                    <Card.Title>Товары 2</Card.Title>
                    <Card.Text>
                    Красота 2
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top3" src="img/card03.jpg" />
                <Card.Body>
                    <Card.Title>Товары 3</Card.Title>
                    <Card.Text>
                    Красота 3
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top4" src="img/card04.jpg" />
                <Card.Body>
                    <Card.Title>Товары 4</Card.Title>
                    <Card.Text>
                    Красота 4
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top5" src="img/card05.jpg" />
                <Card.Body>
                    <Card.Title>Товары 5</Card.Title>
                    <Card.Text>
                    Красота 5
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top6" src="img/card06.jpg" />
                <Card.Body>
                    <Card.Title>Товары 6</Card.Title>
                    <Card.Text>
                    Красота 6
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
