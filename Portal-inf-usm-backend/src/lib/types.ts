import { type ObjectId } from 'mongoose';

export type UserAuth = {
	_id: ObjectId;
	name: string;
	email: string;
    password: string;
};

