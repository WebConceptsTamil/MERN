import AddPost from "./components/AddPost";
import NotFound from "./components/NotFound";
import PostList from "./components/PostList";
import UpdatePost from "./components/UpdatePost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {index: true, element: <PostList />},
  {path: "/create", element: <AddPost />},
  {path: "/update/:postid", element: <UpdatePost />},
  {path: "*", element: <NotFound />},
])

function App() {
  return <RouterProvider router={router} />
}
export default App;
