import React    from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles   from './VideoText.scss';
import Markup   from '../../Markup/Markup';
import IconFont from '../../IconFont/IconFont';

export default class VideoText extends React.Component {
  render() {
    return (
      <div className={styles.videoTextContainer}>
        <div className={styles.content}>
          <IconFont icon={'area-chart'} />
          <Markup class={styles.videoText} markupText={'Hello, I\'m Juan Diego'} />
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(VideoText);