import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import Main from "./components/common/main";
import Wrapper from "./components/common/wrapper";
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
            <Header/>
                <Main>
                    <Wrapper>
                        <Routes>
                            <Route index path="/" element={<Home posts={posts}/>}/>
                            <Route path="/posts/new" element={<CreatePost handlePostCreate={handlePostCreate}/>}/>
                            <Route path="/posts/:id" element={<ShowPost posts={posts} setPosts={setPosts}/>}/>
                        </Routes>
                    </Wrapper>
                </Main>
        </div>
    );
}

export default App;
