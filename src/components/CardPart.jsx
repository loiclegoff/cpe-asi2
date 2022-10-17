import { Card, Badge } from 'react-bootstrap';

export function CardPart(props) {
  const { part } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{part.title}</Card.Title>
        <Card.Text>ID : {part.id}</Card.Text>
        Price <Badge bg="primary">{part.price}</Badge>
      </Card.Body>
    </Card>
  );
}
