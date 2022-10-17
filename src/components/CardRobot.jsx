import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSelectedRobotId } from '../core/robots.actions';

export function CardRobot(props) {
  const { title, id, visualSrc, visualType } = props;

  const dispatch = useDispatch();
  const selectRobot = () => {
    dispatch(setSelectedRobotId(id));
  };

  return (
    <Card onClick={selectRobot}>
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
