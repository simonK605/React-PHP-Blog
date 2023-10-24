import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

// Styles
import styles from './home.module.scss';

const Home = ({ posts }) => {
    return (
        <div className={styles['home']}>
            {/* TODO: Need to move this to a component */}
            <Link className={styles['create__post']} to="/posts/new">Create New Post</Link>
            <ListGroup as="ul">
                {posts.map((post) => (
                    // TODO: Need to move this to a component
                    <ListGroup.Item key={post.id} as="li">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </ListGroup.Item>
                ))}

            </ListGroup>
            <ul>

            </ul>
        </div>
    );
};

export default Home;