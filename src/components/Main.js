import { h, Component } from 'preact';
import { Router, Link, route } from 'preact-router';
import FormPage from './FormPage';
import AllPage from './AllPage';
import Error from './Error';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: JSON.parse(window.localStorage.getItem("notes")) || [],
      note: { title: "", body: "" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }
  setTitle(e) {
    this.setState({ note: { title: e.target.value } });
  }
  setBody(e) {
    this.setState(prevState => ({
      note: { title: prevState.note.title, body: e.target.value }
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.note.title && !this.state.note.body) {
      return;
    }
    else {
      const newNote = {
        title: this.state.note.title,
        body: this.state.note.body,
        id: Date.now()
      };
      this.setState(prevState => {
        //         Add item to local storage notes.
        const newNotes = prevState.notes.concat(newNote);
        window.localStorage.setItem("notes", JSON.stringify(newNotes));
        const localStorageNotes = JSON.parse(window.localStorage.getItem("notes"));
        return {
          notes: localStorageNotes,
          note: { title: "", body: "" }
        };
      });
      this.setState({ navigate: true });
      route("all", true);
    }
  }
  updateNotes(notes) {
    this.setState({ notes: notes });
  }
  render({}, state) {
    return (
      <div>
        <ul id="navigation">
          <li>
            <Link href="/">New</Link>
          </li>
          <li>
            <Link href="/all">All</Link>
          </li>
        </ul>
        <hr />
        <Router>
          <FormPage
            note={state.note}
            handleSubmit={this.handleSubmit}
            setTitle={this.setTitle}
            setBody={this.setBody}
            path="/"
          />
          <AllPage
            notes={state.notes}
            updateNotes={this.updateNotes}
            path="/all"
          />
          <Error type="404" default />
        </Router>
      </div>
    );
  }
}

module.exports = Main;