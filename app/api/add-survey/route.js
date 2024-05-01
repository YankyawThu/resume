import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const seeker = searchParams.get('seeker')

    const client = await sql.connect();
    const data = await client.sql `SELECT seeker, not_seeker FROM surveys WHERE id=1;`
    
    try {
        if(seeker == 'y') {
            await client.sql `UPDATE surveys SET seeker=${data.rows[0].seeker + 1} WHERE id=1;`
        }
        else {
            await client.sql `UPDATE surveys SET not_seeker=${data.rows[0].not_seeker + 1} WHERE id=1;`
        }
        client.release()
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ msg: 'success' }, { status: 200 })
}