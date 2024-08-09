import { hash } from 'bcryptjs';
import { AuthModel } from '@/models/auth';
import { UserDataModel } from '@/models/userdata';
import { UserData } from './types';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from 'public.env';

export const log = (msg: string | Array<string>, indent: number) => {
	const spacing = '   '.repeat(indent);
	if (typeof msg === 'string') {
		console.log(spacing + msg);
		return;
	}
	console.log(spacing + msg.join(' '));
};

export const isEmail = (str: String): boolean => {
	return !!str
		.toLowerCase()
		.match(
			/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
		);
};

export const generateToken = (name: string, email: string): string => {
	return sign(
		{
			iss: 'portals-inf-usm',
			sub: '',
		},
		SECRET_KEY
	);
};

export const createNewUser = async ({
	email,
	passw,
}: {
	email: string;
	passw: string;
}): Promise<string | false> => {
	const hashPassword = await hash(passw, 12);
	const name = email.substring(0, email.indexOf('@'));

	const data_account = await UserDataModel.create({
		name: name,
	});
	const account = await AuthModel.create({
		email: email,
		password: hashPassword,
		ref: data_account,
	});

	try {
		await data_account.save();
		await account.save();
	} catch {
		return false;
	}

	const token = generateToken(data_account.name, account.email);
	return token;
};
