import { Schema, model } from 'mongoose';
import { Evento } from '@/lib/types';

const EventsSchema = new Schema<Evento>({
	importance: { type: Number, required: true },
	title: { type: String, required: true },
	description: { type: String, required: false, default: '...' },
});

export const EventsModel = model<Evento>('Events', EventsSchema);
