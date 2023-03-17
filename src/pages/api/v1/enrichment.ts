import { NextApiRequest, NextApiResponse } from 'next';

// an object with dummy whois data
const whoisData = {
  'example.com': {
    registrant: {
      name: 'John Doe',
      email: '',
    },
    admin: {
      name: 'Jane Doe',
      email: '',
    },
    tech: {
      name: 'John Doe',
      email: '',
    },
    billing: {
      name: 'John Doe',
      email: '',
    },
    registrar: {
      name: 'John Doe',
      email: '',
    },
    created: '2021-01-01',
    updated: '2021-01-01',
    expires: '2021-01-01',
    status: 'active',
    nameservers: ['ns1.example.com', 'ns2.example.com'],
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { data } = body;

  // do something with the data
  // ...

  // return the enriched data
  res.status(200).json({ data: whoisData });
}
