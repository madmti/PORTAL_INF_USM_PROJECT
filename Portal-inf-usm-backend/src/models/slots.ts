import { Schema, model } from 'mongoose';
import { Slot } from '@/lib/types';

const SlotsSchema = new Schema<Slot>({
	tipo: { type: String, required: true },
	bloque: { type: String, required: true },
});

export const SlotsModel = model<Slot>('Slots', SlotsSchema);
