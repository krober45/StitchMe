import React, { useEffect, useState, } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { useParams, Link } from "react-router-dom";
import API from "../utils/API";


function Profile(props) {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [formData, setFormData] = useState({
        title: "",
        username: ""
    })

    useEffect(() => {
        API.getOneUser(id).then((data) => {
            if (data.user) {
                console.log("get one user", data.user)
                setUserData(data.user)
            }
        })
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const formSubmit = e => {
        console.log("clicked")
        e.preventDefault();
        API.createProject(formData).then(res => {
            setFormData({
                title: "",
                username: ""
            })
            API.getOneUser(id).then((data) => {
                if (data.user) {
                    setUserData(data.user)
                }
            })
        })
    }
    return (
        <div>
            {!userData ? (
                <h3>loading...</h3>
            ) : (
                <>
                    <h1 id="welcome">Welcome  {userData.username}!</h1>

                    <Container>
                        <Row>
                            <>
                                <Col>
                                    <Stack>
                                        {userData.projects.map((project) => (
                                            <Link id="project-button" key={`${project.title}`} to={`/project/${project._id}`}>{project.title}</Link>
                                        ))}
                                        <div id="add-project">
                                            <form onSubmit={formSubmit}>
                                                <input id="input" name="title" value={formData.title} onChange={handleChange} placeholder="title" />
                                                by {formData.username = userData.username}!
                                                <Button id="add-button" type="submit" >Add Project</Button>
                                            </form>
                                        </div>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack>
                                        <Link id="theme-button" to={`/themes/${id}`}>Themes</Link>
                                    </Stack>
                                </Col>
                            </>
                        </Row>
                    </Container>
                </>
            )}
        </div>
    );
};

export default Profile;