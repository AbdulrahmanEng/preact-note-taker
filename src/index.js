import { h, render, Component } from 'preact';

class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], text: '' };
  }
  render() {
    return (
    <div>
    <h3>Notes</h3>
    </div>);
  }
}

render(<NoteApp />, document.getElementById('app'));