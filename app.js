import express from 'express';
import fetch from 'node-fetch';
require('dotenv').config();

const app = express();
const port = 3000;
// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = process.env.AUTH_TOKEN;

app.get('/', (req, res) => {
    res.send('Root is running');
  });

// Example route for fetching user details
app.get('/user/:user_id', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/users/${req.params.user_id}/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
      console.log(`Request body:${req.body}, Response body:${res.body}, Data:${data}`)
    } catch (error) {
      res.status(500).send('Error fetching user details');
    }
  });

// Example route for fetching event details
app.get('/events/:event_id', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/events/${req.params.event_id}/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).send('Error fetching event details');
    }
  });

// Example route for fetching ticket class details
app.get('/events/:event_id/ticket_classes', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/events/${req.params.event_id}/ticket_classes/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).send('Error fetching ticket class details');
    }
  });


// Example route for fetching order details
app.get('/orders/:order_id', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/orders/${req.params.order_id}/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).send('Error fetching order details');
    }
  });

// Example route for fetching venue details
app.get('/venues/:venue_id', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/venues/${req.params.venue_id}/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).send('Error fetching venue details');
    }
  });

// Example route for fetching organizer details
app.get('/organizers/:organizer_id', async (req, res) => {
    try {
      const response = await fetch(`https://www.eventbriteapi.com/v3/organizers/${req.params.organizer_id}/`, {
        headers: { 'Authorization': `Bearer ${oauthToken}` }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).send('Error fetching organizer details');
    }
  });

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
