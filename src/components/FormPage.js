import { h } from 'preact';
import Form from './Form';

const FormPage = props => {
  return (
    <div>
      <h3>New Note</h3>
      <Form
        note={props.note}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        setTitle={props.setTitle}
        setBody={props.setBody}
      />
    </div>
  );
};

module.exports = FormPage;