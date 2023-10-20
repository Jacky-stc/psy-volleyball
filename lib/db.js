import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  post: process.env.DB_POST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 10,
  waitForConnections: true,
});

export async function query({ query, values = [] }) {
  const promisePool = pool.promise();
  try {
    const [results] = await promisePool.query(query, values);
    promisePool.releaseConnection();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
