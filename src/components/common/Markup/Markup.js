import React from 'react';

class Markup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={this.props.class} dangerouslySetInnerHTML={{__html: this.props.markupText}}/>
    );
  }

}

export default Markup;