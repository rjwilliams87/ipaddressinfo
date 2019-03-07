import React from 'react';

const Results = props => {
  const { data } = props;
  if (!data) {
    return null;
  }
  if (data.done.json.ErrorMessage) {
    return <div>{data.done.json.ErrorMessage.msg}</div>;
  }
  const { registrant } = data.done.json.WhoisRecord;
  return (
    <div>
      <h3>Organization</h3>
      <p>{registrant.organization}</p>
    </div>
  );
};

export default Results;
