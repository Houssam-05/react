import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ajouter des styles personnalisés ici

function App() {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const addTask = (event) => {
        event.preventDefault();
        const newTask = {
            name: event.target.name.value,
            description: event.target.description.value,
            category: event.target.category.value,
            date: event.target.date.value,
            time: event.target.time.value,
            priority: event.target.priority.value,
            fulfillment: event.target.fulfillment.value
        };
        setTasks([...tasks, newTask]);
        handleCloseModal();
    };

    return (
        <Container>
            <h2 className="text-center my-4">Liste de Tâches React</h2>
            <Row className="mb-4">
                <Col>
                    <Button onClick={handleShowModal}>Ajouter une nouvelle tâche</Button>
                    <Button className="ml-2">Toutes</Button>
                    <Button className="ml-2">À faire</Button>
                    <Button className="ml-2">Terminées</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tâche</th>
                                <th>Description</th>
                                <th>Catégorie</th>
                                <th>Quand</th>
                                <th>Priorité</th>
                                <th>Achèvement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td>{task.category}</td>
                                    <td>{task.date} {task.time}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.fulfillment}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une nouvelle tâche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addTask}>
                        <Form.Group controlId="name">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom de la tâche" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Entrez une description de la tâche" />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Control type="text" placeholder="e.g. maison, travail" />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group controlId="time">
                            <Form.Label>Heure</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label>Priorité</Form.Label>
                            <Form.Control as="select">
                                <option>Haute</option>
                                <option>Moyenne</option>
                                <option>Basse</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="fulfillment">
                            <Form.Label>Achèvement</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Sauvegarder</Button>
                        <Button variant="secondary" onClick={handleCloseModal} className="ml-2">Annuler</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default App;