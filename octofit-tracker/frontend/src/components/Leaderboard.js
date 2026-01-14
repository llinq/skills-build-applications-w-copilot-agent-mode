import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', results);
      });
  }, [endpoint]);

    return (
      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h2" className="mb-3">Leaderboard</Card.Title>
          <Table striped bordered hover responsive>
            <thead className="table-primary">
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{leader.name}</td>
                  <td>{leader.points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
};

export default Leaderboard;
