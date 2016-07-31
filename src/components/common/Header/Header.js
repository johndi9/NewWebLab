import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Header.scss';
//import Link from '../Link';
//import Navigation from '../Navigation';
import VideoWrapper from '../Video/VideoWrapper/VideoWrapper';
import VideoText from '../Video/VideoText/VideoText';

function Header() {
  return (
    <nav class="navbar navbar-static-top container" role="banner">
      <div>
        <VideoWrapper/>
        <VideoText/>
      </div>
    </nav>
  );
}


export default withStyles(styles)(Header);
