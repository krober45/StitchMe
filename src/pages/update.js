// import React from "react";
// import { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button'

// function Update(props) {
//     const [username, setUser] = useState("");

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <h1>Update Username</h1>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form>
//                         <Form.Group className="mb-3" controlId="formBasicText">
//                             <Form.Label>Username</Form.Label>
//                             <Form.Control type="text"
//                                 onChange={(e) => setUser(e.target.value)} />
//                         </Form.Group>
//                     </Form>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form>
//                         <Button variant="primary" type="submit">
//                             Change
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Update;