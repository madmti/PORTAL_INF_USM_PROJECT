import { Router } from 'express';
import { AuthModel } from '@/models/auth';

const router = Router();

interface AuthData {
	email: string;
	passw: string;
};

// LOGIN
router.post('/login', (req, res) => {
	const data: AuthData = req.body;
	res.json({
		status: false,
		msg: 'message',
		token: 'token',
	});
});

// REGISTER
router.post('/register', (req, res) => {
	const data: AuthData = req.body;
	res.json({
		status: false,
		msg: 'message',
		token: 'token',
	});
});

export default router;
