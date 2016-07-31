import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './VideoWrapper.scss';


function Header() {
  return (
    <div className={ styles.videoWrapper }>
      <video id="homepage-video" preload="auto" poster="http://weareduo.co.uk/img/video-img.jpg" autoPlay
             loop webkit-playsinline muted>
        <source src="http://weareduo.co.uk/assets/video/homepage-loop.mp4" type="video/mp4"/>
        <source src="http://weareduo.co.uk/assets/video/homepage-loop.webm" type="video/webm"/>
        <source src="http://weareduo.co.uk/assets/video/homepage-loop.ogg" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default withStyles(styles)(Header);