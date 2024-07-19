import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


const Dashboard = () => {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/student/get-student");
                const data = await response.json();
                setStudent(data);
            } catch (error) {
                console.error("Error fetching students:", error.message);
            }
        };

        fetchStudent();
    }, []);

    const handleDelete = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/student/delete-student/${studentId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setStudent((prevStudents) => prevStudents.filter(student => student.id !== studentId));
                console.log(`Student with ID ${studentId} deleted successfully`);
            } else {
                console.error(`Failed to delete student with ID ${studentId}`);
            }
        } catch (error) {
            console.error("Error deleting student:", error.message);
        }
    };

    const handleUpdate = (studentId) =>{
        navigate('/student/ ${studentId}');
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Students List</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.username}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <Button variant="outline-secondary" onClick={()=>handleUpdate(student.id)}>Update</Button>{" "}
                                            <Button variant="outline-danger" onClick={() => handleDelete(student.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
