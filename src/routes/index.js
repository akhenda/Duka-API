import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to Duka API. Query products quickly. Keep track of all our products.' });
});

router.post('/', (req, res) => {
  const message = `hello ${req.body.to}!`;
  res.json({ status: 'ok', message });
});

export default router;
