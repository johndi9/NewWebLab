import React from 'react';
import classNames from 'classnames';

class IconFont extends React.Component {

  static propTypes = {
    icon: React.PropTypes.string.isRequired
  };

  render() {
    const classes = classNames('fa', 'fa-' + this.props.icon);

    return (<i className={classes}></i>);
  }

}

export default IconFont;