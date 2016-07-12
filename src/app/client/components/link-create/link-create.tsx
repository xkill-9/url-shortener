import * as React from 'react';

// Component's properties interface
interface LinkCreateProps {}
// Component's state interface
interface LinkCreateState {
  error?: string
}
// Component's references to DOM Elements.
interface LinkCreateRefs {
  link?: HTMLInputElement
}

class LinkCreate extends React.Component<LinkCreateProps, LinkCreateState > {
  state: LinkCreateState;
  ctrls: LinkCreateRefs = {};
  constructor(props: LinkCreateProps) {
    super(props);

    this.state = {
      error: ''
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('links.insert', this.ctrls.link.value, (error) => {
      if(error) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.ctrls.link.value = '';
        this.setState({ error: '' });
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="">Link to shorten</label>
          <input ref={ input => this.ctrls.link = input } type="text" className="form-control"/>
        </div>
        <div className="text-danger">{ this.state.error }</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
}

export default LinkCreate;