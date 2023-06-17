import { createKysely } from '@vercel/postgres-kysely';
import type { Generated } from 'kysely';
import { POSTGRES_URL } from '$env/static/private';

interface Userstable {
	UserId: Generated<Number>;
	Username: string;
	Password: string;
}

// Keys of this interface are table names.
interface Database {
	users: Userstable;
}

export const db = createKysely<Database>({
	connectionString: POSTGRES_URL
});

//await db.insertInto('users').values({ UserName: 'Catto', Password: 'cat' }).execute();
