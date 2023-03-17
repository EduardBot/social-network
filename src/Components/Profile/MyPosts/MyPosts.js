import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import classes from "./style.module.css";

const MyPosts = (props) => {
let postList = props.posts.map ( post => <Post message={post.message} likesCount={post.likesCount} /> );

  return (
    <ul className={classes.posts}>
      <CreatePost addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} />
      {postList}
    </ul>
  );
};

export default MyPosts;