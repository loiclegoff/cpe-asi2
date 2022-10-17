import React, { useEffect, useState } from 'react';
import { CardRobot } from './components/CardRobot';
import { CardPart } from './components/CardPart';

import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  const [robots, setRobots] = useState([]);
  const [parts, setParts] = useState([]);
  const [selectedPartIds, setSelectedPartIds] = useState([]);

  useEffect(() => {
    fetch('https://pure-temple-56604.herokuapp.com/robots')
      .then((resp) => resp.json())
      .then((values) => setRobots(values));
  }, []);

  useEffect(() => {
    fetch('https://pure-temple-56604.herokuapp.com/parts')
      .then((resp) => resp.json())
      .then((values) => setParts(values));
  }, []);

  console.log(selectedPartIds);

  return (
    <Row>
      <Col md={4} lg={4}>
        {robots.map((robot) => (
          <CardRobot
            key={robot.id}
            id={robot.id}
            title={robot.title}
            visualType={robot.visual_type}
            visualSrc={robot.visual_src}
            partIds={robot.parts}
            onSelectRobot={(partIds) => setSelectedPartIds(partIds)}
          />
        ))}
      </Col>
      <Col md={4} lg={4}>
        {parts
          .filter((part) => selectedPartIds.includes(part.id))
          .map((part) => (
            <CardPart key={part.id} part={part} />
          ))}
      </Col>
      <Col md={4} lg={4}></Col>
    </Row>
  );
}

export default App;
