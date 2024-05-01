import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
    try {
        await sql `CREATE TABLE surveys ( id INT, seeker INT, not_seeker INT );`;
        const result = await sql `INSERT INTO surveys (id, seeker, not_seeker) VALUES (1,0,0);`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}