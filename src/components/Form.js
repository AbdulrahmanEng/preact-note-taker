import { h } from 'preact';

const Form = props => {
  return (
    <form id="form" onSubmit={props.handleSubmit}>
      <div>
        <h4>Title</h4>
        <input id="form__title" value={props.note.title} onChange={props.setTitle} />
      </div>
      <div>
        <h4>Body</h4>
        <textarea id="form__body" value={props.note.body} onChange={props.setBody} />
      </div>
      <button id="form__button">Save</button>
    </form>
  );
};

module.exports = Form;