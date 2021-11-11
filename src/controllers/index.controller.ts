import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        // console.log(response.rows);
        // res.send('users');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Error al obtener usuarios: ${error}` });
    }
}

export const getUserbyId = async (req: Request, res: Response): Promise<Response> => {
    // console.log(req.params.id);
    // res.send('recived')
    const id = parseInt(req.params.id);
    // const response: QueryResult = await pool.query("SELECT name, id FROM users LIMIT 1 OFFSET 1");
    const response: QueryResult = await pool.query("SELECT name FROM users WHERE id = $1", [id]);
    return res.json(response.rows);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    // console.log(req.body);
    const { name, email } = req.body;
    // console.log(name, email);
    const response: QueryResult = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email])
    // res.send('recived')
    return res.json({
        message: 'User created Successfuly',
        body: {
            user: {
                name,
                email
            }
        }
    })
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const { name, email} = req.body;

    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    return res.json(`User ${id} Updated Successfuly`);
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    // res.send('deleting');
    return res.json(`User ${id} deleted Successfuly`);
}