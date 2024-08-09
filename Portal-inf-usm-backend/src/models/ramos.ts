import { Schema, model } from 'mongoose';
import { Ramo } from '@/lib/types';

const RamoSchema = new Schema<Ramo>({
	name: { type: String, required: true },
	code: { type: String, required: true },
	par: { type: Number, required: true },
	horario: [{ ref: 'Slots' }],
	eventos: [{ ref: 'Events' }],
});

export const RamoModel = model<Ramo>('Ramos', RamoSchema);
