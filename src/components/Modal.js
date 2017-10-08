import { h } from 'preact';

const Modal = props => {
  return (
    <div id="modal" style={props.modalOpen ? "display:inline" : "display:none"}>
      <div id="close" onClick={props.closeModal}>
        &times;
      </div>
      <input
        id="modal__title"
        value={props.selectedNote.title}
        onChange={props.updateTitle}
      />
      <textarea
        id="modal__body"
        value={props.selectedNote.body}
        onChange={props.updateBody}
        ></textarea>
    </div>
  );
};

module.exports = Modal;