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
      <div>
        <h2>{registryData.domainName}</h2>
        {registrant ? (
          <div>
            <h3>Registrant Info</h3>
            <ul>
              <li>Company: {registrant.organization}</li>
              <li>Coutnry: {registrant.country}</li>
            </ul>
          </div>
        ) : null}
        {registryData ? (
          <div>
            <h3>Registry Data</h3>
            <ul>
              <li>Registrar name: {registrarName}</li>
              <li>Created: {registryData.createdDate}</li>
              <li>Updated: {registryData.updatedDate}</li>
              <li>Expires: {registryData.expiresDate}</li>
            </ul>
          </div>
        ) : null}
        {technicalContact ? (
          <div>
            <h3>Technical Contact</h3>
            <ul>
              <li>Organization: {technicalContact.organization}</li>
              <li>Contact: {technicalContact.name}</li>
              <li>Email: {technicalContact.email}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
