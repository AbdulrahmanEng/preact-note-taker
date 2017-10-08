import { h, Component } from 'preact';
import Modal from './Modal';

class AllPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: {},
      modalOpen: false,
      update: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }
  openModal(note) {
    this.setState({ selectedNote: note });
    this.setState({ modalOpen: true });
  }
  // Updates note if change is made to note title or body.
  closeModal() {
    this.setState({ modalOpen: false });
    if (this.state.update) {
      // Updated note id.
      const noteId = this.state.selectedNote.id;
      const noteToUpdate = this.state.selectedNote;
      console.log(noteToUpdate);
      const oldNotes = JSON.parse(window.localStorage.getItem("notes"));
      console.log("old notes:", oldNotes);
      const newNotes = oldNotes.map(note => {
        if (note.id === noteId) {
          return {
            id: note.id,
            title: noteToUpdate.title,
            body: noteToUpdate.body
          };
        }
        else {
          return note;
        }
      });
      this.props.updateNotes(newNotes);
      window.localStorage.setItem("notes", JSON.stringify(newNotes));
      console.log("local storage notes:", window.localStorage.getItem("notes"));
    }
  }
  updateTitle(e) {
    this.setState(prevState => ({
      selectedNote: {
        id: prevState.selectedNote.id,
        title: e.target.value,
        body: prevState.selectedNote.body
      },
      update: true
    }));
  }
  updateBody(e) {
    this.setState(prevState => ({
      selectedNote: {
        id: prevState.selectedNote.id,
        title: prevState.selectedNote.title,
        body: e.target.value
      },
      update: true
    }));
  }
  render(props, state) {
    return (
      <div>
        <h3>List Of Notes</h3>
        <Modal
          modalOpen={state.modalOpen}
          selectedNote={state.selectedNote}
          closeModal={this.closeModal}
          updateTitle={this.updateTitle}
          updateBody={this.updateBody}
        />
        <div class={state.modalOpen ? "backdrop" : ""} />
        <div id="notes-container">
          <ul>
            {props.notes.map(note => {
              let noteDate = new Date(note.id).toLocaleString();
              return (
                <li key={note.id} onClick={() => this.openModal(note)}>
                  📝{note.title} (<span id="note-date">{noteDate}</span>)
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = AllPage;