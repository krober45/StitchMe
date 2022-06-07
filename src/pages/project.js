import React, { useEffect, useState }from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
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
                    <CloudinaryUploadWidget />
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
                    <CloudinaryUploadWidget />
                </Col>
            </Row>


        </Container>
        </>
        )}
        </div>
    );
    }

export default Project;