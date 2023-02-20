import express from 'express';
import { currentUser } from '@von_ticket/common';

const router = express.Router();

// router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
router.get('/api/users/currentuser', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };