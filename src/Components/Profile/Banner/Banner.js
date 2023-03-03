import classes from './style.module.css';

const Banner = () => {
  return (
    <div className={classes.banner__wrapper}>
      <img
        className={classes.banner}
        src="https://funart.pro/uploads/posts/2022-08/1660029978_29-funart-pro-p-gori-piksel-art-krasivo-33.png"
        alt="какая-то картинка"
      />
    </div>
  );
};

export default Banner;
