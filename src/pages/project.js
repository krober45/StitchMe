import React, { useEffect, useState }from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import project from './images/MH-project-pic.jpg';
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Project(props) {
    const { id } = useParams();
    const [projectData, setProjectData] = useState();
    const [userData, setUserData] = useState();

    const [formData, setFormData] = useState({
        todoText:"",
        username:""
    })
    const [stepData, setStepData] = useState({
        stepText:"",
        username:""
    })

    useEffect(()=>{
        API.getOneProject(id).then((data) =>{
            if (data.project) {
                console.log("get one project",data.project)
                setProjectData(data.project)  
            }
        })
    }, []);

    const stephandleChange= e =>{
        const {name,value} = e.target;
        setStepData({
            ...stepData,
            [name]:value
        })
    }

    const handleChange= e =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const anotherFormSubmit = e =>{
        console.log("clicked")
        e.preventDefault();
        API.createStep(stepData,id).then(res => {
            setStepData({
                stepText:"",
                username:""
            })
            API.getOneProject(id).then((data) => {
                if(data.project) {
                    setProjectData(data.project)
                }
            })
        })
    }

    const formSubmit = e =>{
        console.log("clicked")
        e.preventDefault();
        API.createTodo(formData,id).then(res => {
            setFormData({
                todoText:"",
                username:""
            })
            API.getOneProject(id).then((data) => {
                if(data.project) {
                    setProjectData(data.project)
                }
            })
        })
    }
    return (
        <div>
            {!projectData ? (
                <h3>loading...</h3>
            ) : (
                <>
                <h1>{projectData.title}</h1>
        <Container>
            <Row>
                <Col>
                    <img src={project} alt="MH chaotic gore mangala" />
                </Col>
                <Col>
                    <h2>To-do:</h2>
                    {projectData.todos.map((todo) => (
                             <p key={`${todo.todoText}`}>{todo.todoText}</p>  
                            ))}
                            <form onSubmit={formSubmit}>
                                <input name="todoText" value={formData.todoText} onChange={handleChange} />
                                by {formData.username = projectData.username}!
                                <Button type="submit">Add To-do</Button>
                            </form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Steps:</h2>
                    {projectData.steps.map((step) => (
                             <p key={`${projectData.steps}`}>{step.stepText}</p>  
                            ))}
                            <form onSubmit={anotherFormSubmit}>
                                <input name="stepText" value={stepData.stepText} onChange={stephandleChange} />
                                by {formData.username = projectData.username}!
                                <Button type="submit">Add Step</Button>
                            </form>
                </Col>

                <Col>
                    {/* a carousel would be neat but i dunno if that would actually work with cloudinary?? */}
                </Col>
            </Row>


        </Container>
        </>
        )}
        </div>
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