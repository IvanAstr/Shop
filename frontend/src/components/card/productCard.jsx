
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export const Products= ({id, title, description}) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem', marginBottom: "40px", margin:"15px" }}>
      <Card.Img variant="top" src="../img/card03.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/product/${id}`)}>Подробнее</Button>
      </Card.Body>
    </Card>
  );
}
