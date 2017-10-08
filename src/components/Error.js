import { h } from 'preact';

const Error = ({ type, url }) => {
  return (
    <div>
      <p>{type} Error!</p>
      <p>{url} does not exist</p>
      <p>
        <a href="/">Home</a>
      </p>
    </div>
  );
};

module.exports = Error;