import { Router } from 'express';
import { AuthModel } from '@/models/auth';
import { createNewUser, isEmail } from '@/lib/funcs';

const router = Router();

interface AuthData {
	email: string;
	passw: string;
}

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
router.post('/register', async (req, res) => {
	const data: AuthData = req.body;

	if (!data.passw || !isEmail(data.email)) {
		res.json({ status: false, msg: 'not valid fields' });
		return;
	}

	const emailExists = await AuthModel.countDocuments({ email: data.email });
	if (emailExists) {
		res.json({ status: false, msg: 'email already registered' });
		return;
	}

	const result = await createNewUser(data);
	if (!result) {
		res.json({ status: false, msg: 'error creating account' });
		return;
	}

	res.json({
		status: true,
		msg: 'registration succesfully',
		redirect: '/home',
		token: result,
	});
});

export default router;
