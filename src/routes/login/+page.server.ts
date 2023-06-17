import { db } from '$lib/database/database';
import { sql } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

export function load({ cookies }) {
	console.log(POSTGRES_URL);
	return {
		test: ['1', '2', '3']
	};
}

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		return {
			success: true
		};
	},
	create: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		let userName = data.get('userName') as string;
		let password = data.get('password') as string;
		//await db.insertInto('users').values({ Username: userName, Password: password }).execute();
		await sql`INSERT INTO users (Username, Password) VALUES (${userName}, ${password})`;
		return {
			success: true
		};
	}
};
