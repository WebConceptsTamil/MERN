import AddPost from "./components/AddPost";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";
import PostList from "./components/PostList";
import UpdatePost from "./components/UpdatePost";



function App() {
  return (
    <>
      <AddPost />
      {/* <UpdatePost /> */}
      {/* <PostList /> */}
      {/* <NotFound /> */}
      <LoadingSpinner />
    </>
  );
}
export default App;
