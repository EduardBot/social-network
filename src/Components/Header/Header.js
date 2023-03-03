import classes from './style.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src='https://u7.uidownload.com/vector/578/373/vector-graphics-logotype-element-vector-ai-eps-thumbnail.jpg' alt='какая-то картинка' />
        </header>

    );
}
 
export default Header;