import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts posts={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;