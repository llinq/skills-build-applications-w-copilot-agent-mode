import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      });
  }, [endpoint]);

    return (
      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h2" className="mb-3">Atividades</Card.Title>
          <Table striped bordered hover responsive>
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Duração</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.user}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="info">Adicionar Atividade</Button>
        </Card.Body>
      </Card>
    );
};

export default Activities;
