import { useState } from "react";
import "./PostUser.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const PostUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        address: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/student/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessMessage("Student successfully booked!");
                setFormData({
                    username: "",
                    email: "",
                    phone: "",
                    address: ""
                });
            } else {
                throw new Error("Failed to book student");
            }
        } catch (error) {
            console.log("Error booking student:", error.message);
        }
    }

    return (
        <>
            <div className="center-form">
                <h1>Booking Form</h1>
                {successMessage && <div className="success-message">{successMessage}</div>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Control
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                       Booking Now
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default PostUser;
