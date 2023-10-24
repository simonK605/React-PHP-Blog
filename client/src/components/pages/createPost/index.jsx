import { Button, Form } from "react-bootstrap";
import { useState } from "react";

// Styles
import styles from './createPost.module.scss';

const CreatePost = ({ handlePostCreate }) => {
    const [post, setPost] = useState({ title: "", content: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePostCreate(e, post);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group name="content" className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="content"
                    value={post.content}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CreatePost;