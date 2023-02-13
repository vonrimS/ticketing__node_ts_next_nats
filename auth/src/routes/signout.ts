import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('wow, sign out works');
});

export { router as signOutRouter };