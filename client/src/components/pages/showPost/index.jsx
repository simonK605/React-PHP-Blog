import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
// import './colors.module.scss';

// Utils
import request from "../../../utils/request";

const ShowPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        request('GET', `posts.php?id=${id}`)
            .then((response) => {
                if (response.status === 200) {
                    setPost(response.data);
                } else {
                    console.error('Error fetching post:', response);
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
            });
    }, [id]);

    const handleDelete = () => {
        // TODO: Need to implement delete
    };

    const removePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowPost;