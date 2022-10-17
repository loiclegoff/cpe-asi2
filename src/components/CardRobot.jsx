import { Card } from 'react-bootstrap';

export function CardRobot(props) {
  const { title, id, visualSrc, visualType, partIds, onSelectRobot } =
    props;
  return (
    <Card onClick={() => onSelectRobot(partIds)}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>ID : {id}</Card.Text>
        {visualType === 'img' ? (
          <Card.Img src={visualSrc}></Card.Img>
        ) : null}
      </Card.Body>
    </Card>
  );
}
