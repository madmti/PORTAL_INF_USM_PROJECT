import { Schema, model } from 'mongoose';
import { UserAuth } from '@/lib/types';

const AuthSchema = new Schema<UserAuth>({
	email: { type: String, required: true },
	password: { type: String, required: true },
});

export const AuthModel = model<UserAuth>('Auth', AuthSchema);
