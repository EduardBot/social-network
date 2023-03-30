import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
      posts={props.profilePage.postsData}
      dispatchPost={props.dispatchPost}
      newPostText={props.profilePage.newPostText} />
    </div>
  );
};

export default Profile;