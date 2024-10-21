import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
import styles from "./Post.module.css";
import { RxCross1 } from "react-icons/rx";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className={`card ${styles.postCard}`}>
        <div
          class={`card-header bg-transparent border-success ${styles.postHeader}`}
        >
          <img
            src={post.imgPath}
            alt="rise-post"
            className="user-pic rounded-circle"
          />
          {post.userId}
          <RxCross1
            className={styles.postCross}
            onClick={() => deletePost(post.id)}
          />
        </div>
        <img
          src={post.imgPath}
          class="card-img-top feed-img"
          alt="rise-post"
        ></img>
        <div className="card-body">
          <h5 className={`card-title ${styles.postTitle}`}>{post.title}</h5>
          {post.tags.map((tag) => (
            <span className="badge hashtag rounded-pill post-tags" key={tag}>
              {tag}
            </span>
          ))}
          <p className={`card-text ${styles.postBody}`}>{post.body}</p>
          <p className={styles.postReactions}>
            +{post.reactions - 1} people reacted on this post
          </p>
        </div>
      </div>
    </>
  );
};
export default Post;
