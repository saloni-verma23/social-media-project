import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const selectMediaElement = useRef();
  const postNameElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const selectMedia = selectMediaElement.current.files[0];
    const postName = postNameElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    const mediaPath = selectMedia ? URL.createObjectURL(selectMedia) : "";

    addPost(userId, mediaPath, postName, postBody, reactions, tags);

    userIdElement.current.value = "";
    selectMediaElement.current.value = "";
    postNameElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <form className="create-post post_form" onSubmit={handleSubmit}>
        <br />
        <div className="mb-3">
          <label htmlFor="userId" className={`form-label ${styles.labelText}`}>
            User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className={`form-control ${styles.controlText}`}
            id="userId"
            placeholder="Enter your User Id"
          />
        </div>
        <div class="mb-3">
          <label for="formFile" className={`form-label ${styles.labelText}`}>
            Select media
          </label>
          <input
            className={`form-control ${styles.controlText}`}
            type="file"
            ref={selectMediaElement}
            id="formFile"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className={`form-label ${styles.labelText}`}>
            Post Title
          </label>
          <input
            type="text"
            ref={postNameElement}
            className={`form-control ${styles.controlText}`}
            id="title"
            placeholder="Wanna create something...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className={`form-label ${styles.labelText}`}>
            Post Description
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className={`form-control ${styles.controlText}`}
            id="body"
            placeholder="Tell us more about it...."
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="reactions"
            className={`form-label ${styles.labelText}`}
          >
            Number of reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className={`form-control ${styles.controlText}`}
            id="reactions"
            placeholder="How many reactions does this post got?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className={`form-label ${styles.labelText}`}>
            Enter your hashtags here...
          </label>
          <input
            type="text"
            ref={tagsElement}
            className={`form-control ${styles.controlText}`}
            id="tags"
            placeholder="Please separate them with spaces!!!"
          />
        </div>
        <button type="submit" className={`btn btn-primary ${styles.formBtn}`}>
          Post
        </button>
      </form>
      <br />
      <br />
      <br />
    </>
  );
};
export default CreatePost;
