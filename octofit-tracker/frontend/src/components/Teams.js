import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      });
  }, [endpoint]);

    return (
      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h2" className="mb-3">Times</Card.Title>
          <Table striped bordered hover responsive>
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Membros</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.id}>
                  <td>{team.id}</td>
                  <td>{team.name}</td>
                  <td>{team.members.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="success">Criar Time</Button>
        </Card.Body>
      </Card>
    );
};

export default Teams;
