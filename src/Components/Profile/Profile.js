import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts posts={props.state.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;