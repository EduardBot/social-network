import classes from './style.module.css'

const Post = (props) => {
    return (
        <li className={classes.post}>
            <img className={classes.post__icon} src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png' alt='avatar'/>
            {props.message}
            <div className={classes.like}>
                <span>{`likes = ${props.likesCount}`}</span>
            </div>
        </li>
    );
}
 
export default Post;