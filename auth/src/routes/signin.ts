import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send('wow, sign in works');
});

export { router as signInRouter };