import { createContext, useReducer } from "react";
export const PostList = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  },
]);
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, mediaPath, postName, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        imgPath: mediaPath,
        title: postName,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    imgPath: "/willy.jpg", // Path to an image of Willy playing
    title: "Willy's Playtime Adventures",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam possimus libero perspiciatis neque. Pariatur veniam iure. Natus laboriosam laborum mollitia aspernatur totam!",
    reactions: 20,
    userId: "not_willi_wonka",
    tags: ["cat", "playtime", "Willy"],
  },
  {
    id: "2",
    imgPath: "/max.jpg",
    title: "Max's Sneaky Hideaway",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elineque. Pariatur veniam iure. Natus laboriosam laborum mollitia aspernatur totam!",
    reactions: 115,
    userId: "maxy_max",
    tags: ["cat", "shy", "Max"],
  },
  {
    id: "3",
    imgPath: "/vini.jpg",
    title: "Vini the Curious Spy Cat",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem commodi aut voluptate sit doloremque quos ducimus tempore tempora tenetur.",
    reactions: 245,
    userId: "vinis_home",
    tags: ["cat", "spy", "Vini"],
  },
  {
    id: "4",
    imgPath: "/mii-chan.jpg",
    title: "Mii-chan: The Calm and Quirky Cat!",
    body: "Architecto, explicabo, inventore repellat quasi laboriosam neque sint quod consequatur similique vel sapiente debitis, possimus molestiae quisquam impedit eaque. Accusantium, eveniet.",
    reactions: 118,
    userId: "mii_chan",
    tags: ["cat", "funny", "Mii-chan", "quirky"],
  },
  {
    id: "5",
    imgPath: "/rise.jpg",
    title: "Rise: The Tech-Savvy Cat!",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam, ipsam, dolore veritatis debitis voluptatem, rem nulla quos odio eos iure a?",
    reactions: 222,
    userId: "rise_here",
    tags: ["cat", "tech", "Rise", "curious"],
  },
];
