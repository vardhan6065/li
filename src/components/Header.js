import React,{Fragment} from 'react';
import classes from './Header.module.css';
import logoImg from '../assets/logo.jpg';
import login from '../assets/login.jpg';
import Button from '@mui/material/Button';


const Header = (props) => {

    return (
      <Fragment>
        <header className={classes.header}>
          <div className={classes['logo-title']}>
            <div className={classes['logo-div']}>
                <img src={logoImg} alt='logo'/>
            </div>
            <h2 className={classes['title-nam']}>Stringar</h2>  
          </div>
          {/* <div className={classes.dropdown}> */}
            <div className={classes.options}>
              <Button variant="text"><a>Home</a></Button>
              <Button variant="text"><a>Games</a></Button>
              <Button variant="text"><a>Explore</a></Button>
              <Button variant="text"><a>user Guide</a></Button>
              <Button variant="text"><a>Our Work</a></Button>
              <Button variant="text"><a>Contact Us</a></Button>
            </div>
          {/* </div> */}
          <div className={classes.user}>
              <div className={classes.userpoints}>
              <span>
                Vardhan
              </span>
              <span>
                16 Points
              </span>
              </div>
              <span>
                <img src={login} className={classes.loginimg} />
              </span>
          </div>
        </header>
      </Fragment>
    );
  };
  
export default Header;
