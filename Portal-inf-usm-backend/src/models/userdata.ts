import { Schema, model } from 'mongoose';
import { UserData } from '@/lib/types';

const UserDataSchema = new Schema<UserData>({
	name: { type: String, required: true },
	ramos: [{ ref: 'Ramos' }],
	alertas: [{ ref: 'Events' }],
});

export const UserDataModel = model<UserData>('UserData', UserDataSchema);
