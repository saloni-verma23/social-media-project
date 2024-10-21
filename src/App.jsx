import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import StickyNote from "./components/StickyNote";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <Header
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Header>

        {selectedTab === "Home" ? (
          <div className="d-flex">
            <div className="inner">
              <PostList></PostList>
            </div>
            <StickyNote setSelectedTab={setSelectedTab}></StickyNote>
          </div>
        ) : (
          <CreatePost></CreatePost>
        )}

        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
