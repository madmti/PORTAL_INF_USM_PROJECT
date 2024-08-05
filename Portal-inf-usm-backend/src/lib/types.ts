import { type ObjectId } from 'mongoose';

export type Evento = {
	_id: ObjectId;
	importance: number;
	title: string;
	description: string;
};

export type Slot = {
	_id: ObjectId;
	tipo: 'catedra' | 'ayudantia' | 'laboratorio' | 'taller';
	bloque: string;
};

export type Ramo = {
	_id: ObjectId;
	name: string;
	code: string;
	par: number;
	horario: ObjectId[] | Slot[];
	eventos: ObjectId[] | Evento[];
};

export type UserData = {
	_id: ObjectId;
	name: string;
	ramos: ObjectId[] | Ramo[];
	alertas: ObjectId[] | Event[];
};

export type UserAuth = {
	_id: ObjectId;
	email: string;
	password: string;
	ref: ObjectId | UserData;
};
