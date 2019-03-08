import React from 'react';
import './Results.css';

const Results = props => {
  const { data } = props;
  if (!data) {
    return null;
  }
  if (data.done.json.ErrorMessage) {
    return (
      <div className="results__container">
        <div className="error">
          <p>{data.done.json.ErrorMessage.msg}</p>
        </div>
      </div>
    );
  }
  const {
    registrant,
    registryData,
    technicalContact,
    registrarName
  } = data.done.json.WhoisRecord;

  // not every domain comes back with completed info so
  // below I use I check for that with 3 ternary operators
  // if nothing comes back I just return null

  return (
    <div className="results__container">
      <h2 className="results__header">
        showing results for {registryData.domainName}
      </h2>
      <div className="flex-container--row">
        {registrant ? (
          <div className="col">
            <h3 className="col__header">Registrant Info</h3>
            <ul>
              <li>
                <span className="bold">Company:</span> {registrant.organization}
              </li>
              <li>
                <span className="bold">Coutnry:</span> {registrant.country}
              </li>
            </ul>
          </div>
        ) : null}
        {registryData ? (
          <div className="col">
            <h3 className="col__header">Registry Data</h3>
            <ul>
              <li>
                <span className="bold">Registrar:</span> {registrarName}
              </li>
              <li>
                <span className="bold">Created:</span>{' '}
                {registryData.createdDate.replace(/T.*$/, '')}
              </li>
              <li>
                <span className="bold">Updated:</span>{' '}
                {registryData.updatedDate.replace(/T.*$/, '')}
              </li>
              <li>
                <span className="bold">Expires:</span>{' '}
                {registryData.expiresDate.replace(/T.*$/, '')}
              </li>
            </ul>
          </div>
        ) : null}
        {technicalContact ? (
          <div className="col">
            <h3 className="col__header">Technical Contact</h3>
            <ul>
              <li>
                <span className="bold">Organization:</span>{' '}
                {technicalContact.organization}
              </li>
              <li>
                <span className="bold">Contact:</span> {technicalContact.name}
              </li>
              <li>
                <span className="bold">Email:</span> {technicalContact.email}
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
