import { NavLink } from "react-router-dom";
import classes from "./style.module.css";

const isActive = ({ isActive }) => `${classes.link} ${(isActive ? classes.active : '')}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
            <NavLink to='/' className={isActive}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
            <NavLink to='/dialogs' className={isActive}>Message</NavLink>
        </li>
        <li className={classes.nav__item}>
            <NavLink to='/news' className={isActive}>News</NavLink>
        </li>
        <li className={classes.nav__item}>
            <NavLink to='/music' className={isActive}>Music</NavLink>
        </li>
        <li className={classes.nav__item}>
            <NavLink to='/settings' className={isActive}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
