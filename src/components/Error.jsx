import React from 'react';

const Error = ({ message }) => (
  <div className="p-4 bg-red-500 text-white rounded-md">
    <p>{message}</p>
  </div>
);

export default Error;