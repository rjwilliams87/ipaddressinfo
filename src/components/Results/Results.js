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
  // below I check for that with ternary operators
  // if nothing comes back I just return null

  // TODO: normalize responses to those that all domains have
  //  to cut down on bloated/nested logic

  return (
    <div className="results__container">
      <h2 className="results__header">
        showing results for {registryData.domainName}
      </h2>
      <div className="flex-container">
        {registrant ? (
          <div className="col">
            <h3 className="col__header">Registrant Info</h3>
            <ul>
              <li>
                <span className="bold">Company:</span>{' '}
                {registrant.organization ? registrant.organization : null}
              </li>
              <li>
                <span className="bold">Coutnry:</span>{' '}
                {registrant.country ? registrant.country : null}
              </li>
            </ul>
          </div>
        ) : null}
        {registryData ? (
          <div className="col">
            <h3 className="col__header">Registry Data</h3>
            <ul>
              <li>
                <span className="bold">Registrar:</span> {registrarName || null}
              </li>
              <li>
                <span className="bold">Created:</span>{' '}
                {registryData.createdDate
                  ? registryData.createdDate.replace(/T.*$/, '')
                  : null}
              </li>
              <li>
                <span className="bold">Updated:</span>{' '}
                {registryData.updatedDate
                  ? registryData.updatedDate.replace(/T.*$/, '')
                  : null}
              </li>
              <li>
                <span className="bold">Expires:</span>{' '}
                {registryData.expiresDate
                  ? registryData.expiresDate.replace(/T.*$/, '')
                  : null}
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
                {technicalContact.organization
                  ? technicalContact.organization
                  : null}
              </li>
              <li>
                <span className="bold">Contact:</span>{' '}
                {technicalContact.name ? technicalContact.name : null}
              </li>
              <li>
                <span className="bold">Email:</span>{' '}
                {technicalContact.email ? technicalContact.email : null}
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
