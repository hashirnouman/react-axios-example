import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as api from "./services/postMethods.api";
import { Post } from "./@types/response";
import { toast, Toaster } from "react-hot-toast";
function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postInput, setPostInput] = useState<any>({
    body: "",
    title: "",
  });
  const getAllPost = async () => {
    const resp = await api.getAllPost();
    setPosts(resp);
  };
  const createPost = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const resp = await api.createPost({
        body: postInput.body,
        title: postInput.title,
      });
      if (resp.status != 201) {
        toast.error("Error could not create the post");
        setPostInput({ title: "", body: "" });
      } else {
        toast.success("post created");
        setPostInput({ title: "", body: "" });
      }
    } catch (error) {
      toast.error("Unknow error");
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={(e) => createPost(e)}>
        <input
          type="text"
          value={postInput.title}
          onChange={(e) => {
            setPostInput({ title: e.target.value });
          }}
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={postInput.body}
          onChange={(e) => {
            setPostInput({ body: e.target.value });
          }}
          required
        />
        <br />
        <br />
        <button type="submit"> create post</button>
      </form>
      <br />
      {posts.map((post, index) => {
        return (
          <div key={index} style={{ textAlign: "justify" }}>
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
