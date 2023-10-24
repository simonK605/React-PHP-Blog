import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Styles
import './colors.module.scss';
import './reset.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import Main from "./components/common/main";
import Header from "./components/common/header";
import Home from "./components/pages/home";
import CreatePost from "./components/pages/createPost";
import ShowPost from "./components/pages/showPost";

// Utils
import request from "./utils/request";

function App() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        request('GET', 'posts.php')
            .then((response) => {
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    console.error('Error fetching data:', response);
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
            });
    }, []);

    const handlePostCreate = (e, data) => {
        e.preventDefault();
        request('POST', 'posts.php', data)
            .then((response) => {
                if (response.status === 201) {
                    setPosts([...posts, response.data]);
                    navigate('/');
                } else {
                    console.error('Error creating post:', response);
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
            });
    }

    return (
        <div className="App">
            <Header />
            <Main>
                <Routes>
                    <Route index path="/" element={<Home posts={posts} />} />
                    <Route path="/posts/new" element={<CreatePost handlePostCreate={handlePostCreate} />} />
                    <Route path="/posts/:id" element={<ShowPost posts={posts} setPosts={setPosts} />} />
                </Routes>
            </Main>
        </div>
    );
}

export default App;
