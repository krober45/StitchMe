import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import Button from 'react-bootstrap/Button'
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from "./images/examples/progress-1.jpg"
import Pic2 from "./images/examples/progress-2.jpg"
import Pic3 from "./images/examples/progress-3.jpg"
import Pic4 from "./images/examples/progress-4.jpg"
import Pic5 from "./images/examples/progress-5.jpg"
import Pic6 from "./images/examples/progress-6.jpg"

function Project(props) {
    const { id } = useParams();
    const [projectData, setProjectData] = useState();

    const [imageData, setImageData] = useState({
        imageURL: "",
    });

    const [formData, setFormData] = useState({
        todoText: "",
        username: ""
    })
    const [stepData, setStepData] = useState({
        stepText: "",
        username: ""
    })

    useEffect(() => {
        API.getOneProject(id).then((data) => {
            if (data.project) {
                console.log("get one project", data.project)
                setProjectData(data.project)
            }
        })
    }, []);

    const stephandleChange = e => {
        const { name, value } = e.target;
        setStepData({
            ...stepData,
            [name]: value
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const imageFormSubmit = (image) => {
        console.log("clicked")
        API.createImage(image, id, projectData.username).then(res => {
            setImageData({
                imageURL: "",
            })
            API.getOneProject(id).then((data) => {
                if (data.project) {
                    setProjectData(data.project)
                }
            })
        })
    }

    const anotherFormSubmit = e => {
        console.log("clicked")
        e.preventDefault();
        API.createStep(stepData, id).then(res => {
            setStepData({
                stepText: "",
                username: ""
            })
            API.getOneProject(id).then((data) => {
                if (data.project) {
                    setProjectData(data.project)
                }
            })
        })
    }

    const formSubmit = e => {
        console.log("clicked")
        e.preventDefault();
        API.createTodo(formData, id).then(res => {
            setFormData({
                todoText: "",
                username: ""
            })
            API.getOneProject(id).then((data) => {
                if (data.project) {
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
                    <h1 id="project-title">{projectData.title}</h1>
                    <Container>
                        <Row>
                            <Col id="pic-area">
                                <img
                                    id="uploadedimage"
                                    src="">
                                </img>
                                <Row>
                                    <CloudinaryUploadWidget setImageData={setImageData} imageFormSubmit={imageFormSubmit} id={id} username={projectData.username} />
                                    {projectData.images.map((image) => (
                                        <img id="uploadedimage" src={image.imageURL} alt=""></img>
                                    ))}
                                </Row>
                            </Col>

                            <Col id="note-text">
                                <h2>Notes:</h2>
                                {projectData.todos.map((todo) => (
                                    <li id="note-bullet" key={`${todo.todoText}`}>{todo.todoText}</li>
                                ))}
                                <form onSubmit={formSubmit}>
                                    <input id="note" name="todoText" value={formData.todoText} onChange={handleChange} />
                                    by {formData.username = projectData.username}!
                                    <Button id="note-button" type="submit">Add Note</Button>
                                </form>
                            </Col>
                        </Row>

                        <Row>
                            <Col id="step-text">
                                <h2>Steps:</h2>
                                {projectData.steps.map((step) => (
                                    <li id="step-bullet" key={`${projectData.steps._id}`}>{step.stepText}</li>
                                ))}
                                <form onSubmit={anotherFormSubmit}>
                                    <input id="step" name="stepText" value={stepData.stepText} onChange={stephandleChange} />
                                    by {formData.username = projectData.username}!
                                    <Button id="step-button" type="submit">Add Step</Button>
                                </form>
                            </Col>

                            <Col>
                                <Carousel id="carousel-box">
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic1}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic2}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic3}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic4}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic5}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img id="carousel-image"
                                            className="d-block w-100"
                                            src={Pic6}
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </div>
    );
}

export default Project;