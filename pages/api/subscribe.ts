import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const { email, list } = req.body;

      // You need to replace 'your-audience-id' with your actual audience ID
      // and 'your-api-key' with your actual Mailchimp API key.
      const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
      const MAILCHIMP_AUDIENCE_ID = list === 'waitlist' ? process.env.MAILCHIMP_WAITLIST_ID : process.env.MAILCHIMP_NEWSLETTER_ID;

      const data = {
        email_address: email,
        status: 'subscribed'
      };

      await axios({
        method: 'post',
        url: `https://us21.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
        data,
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      res.status(200).json({ message: 'Success' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred when trying to subscribe to the list.' });
  }
}

