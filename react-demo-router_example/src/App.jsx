import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Persons from "./routes/Persons.jsx";
import Root from "./routes/Root.jsx";
import Users from "./routes/Users.jsx";
import axios from "axios";
import Posts from "./routes/Posts.jsx";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29, location: "Helsinki" },
    { id: 2, name: "Kati", title: "developer", age: 25, location: "NY" },
    { id: 3, name: "Karin", title: "designer", age: 45, location: "Tartu" },
  ]);

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // GET users data
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  // GET posts data
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  // console.log(posts);

  const updatePostStatus = (id, published) => {
    axios
      .put(`http://localhost:3001/posts/${id}`, { published: !published })
      .then((res) => {
        // Assuming the response contains the updated post data, update the posts state
        setPosts(
          posts.map((post) =>
            post.id === id ? { ...post, published: !published } : post
          )
        );
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/persons", element: <Persons persons={persons} /> },
        { path: "/users", element: <Users users={users} /> },
        {
          path: "/posts",
          element: <Posts posts={posts} updatePostStatus={updatePostStatus} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
