import mysql from 'mysql2/promise';
import config from '../config/mysql2';

export default async function dbhander(sql: string, params: Array<string> = []) {
    const connection = await mysql.createConnection(config.db)
    //deconstruct
    const [results] = await connection.execute(sql, params)
    return results
}