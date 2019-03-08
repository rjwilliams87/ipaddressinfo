// makes call to API Gateway

const fetchIpData = userInput => {
  return fetch('https://qwo6ei9p45.execute-api.us-east-1.amazonaws.com/dev/', {
    method: 'POST',
    mode: 'cors',
    body: userInput
  }).then(res => res.json());
};

export default fetchIpData;
