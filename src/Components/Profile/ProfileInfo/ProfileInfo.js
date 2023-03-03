import Banner from '../Banner/Banner';
import classes from './style.module.css';

const ProfileInfo = () => {
  return (
    <>
      <Banner />
      <div className={classes.description}>ava + description</div>
    </>
  );
};

export default ProfileInfo;
