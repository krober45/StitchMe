import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import project from './images/MH-project-pic.jpg';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Project() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={project} alt="MH chaotic gore mangala" />
                </Col>
                <Col>
                    <div>
                        <h2>Notes:</h2>
                        <li><h4>Embroidery Type: {type}</h4></li>
                        <li><h4>Project Use: {use}</h4></li>
                        <li><h4>Colors Used: {colors}</h4></li>
                        <li><h4>Fabric Used: {fabric}</h4></li>
                        <li><h4>Pattern Link: {link}</h4></li>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <h2>Directions/To-Do:</h2>
                        <li><h4>Add fabric to hoop</h4></li>
                        <li><h4>Wrap skeins around spools </h4></li>
                        <li><h4>Pick out needle</h4></li>
                        <li><h4>Decide which corner of pattern to start</h4></li>
                    </div>
                </Col>

                <Col>
                    {/* a carousel would be neat but i dunno if that would actually work with cloudinary?? */}
                </Col>
            </Row>


        </Container>
    );
    function Notes() {
        const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
        const [type, setType] = useState("");
        const [use, setUse] = useState("");
        const [colors, setColors] = useState("");
        const [fabric, setFabric] = useState("");
        const [link, setLink] = useState("");

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Edit Notes
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Notes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Emboridery Type:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Project Use</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setUse(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Colors Used:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setColors(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Fabric Used:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setFabric(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Pattern Link:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    // function List() {
    //     const [show, setShow] = useState(false);
    //     const handleShow = () => setShow(true);
    //     const handleClose = () => setShow(false);

    //     return (
    //         <>
    //             <Button variant="primary" onClick={handleShow}>
    //                 Edit List
    //             </Button>
    //             <Modal show={show} onHide={handleClose}>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>Todo List:</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <Form>
    //                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                             <Form.Control
    //                                 type="text"
    //                                 autoFocus
    //                                 onChange={(e) => setItem(e.target.value)}
    //                             />
    //                         </Form.Group>
    //                     </Form>
    //                 </Modal.Body>
    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                         Close
    //                     </Button>
    //                     <Button variant="primary" onClick={handleClose}>
    //                         Save Changes
    //                     </Button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     );
    // }
};

render(<Notes />);
// render(<List />);
export default Project;