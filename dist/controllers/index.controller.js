"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = async (req, res) => {
    try {
        const response = await database_1.pool.query('SELECT * FROM users');
        // console.log(response.rows);
        // res.send('users');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Error al obtener usuarios: ${error}` });
    }
};
exports.getUsers = getUsers;
const getUserbyId = async (req, res) => {
    // console.log(req.params.id);
    // res.send('recived')
    const id = parseInt(req.params.id);
    // const response: QueryResult = await pool.query("SELECT name, id FROM users LIMIT 1 OFFSET 1");
    const response = await database_1.pool.query("SELECT name FROM users WHERE id = $1", [id]);
    return res.json(response.rows);
};
exports.getUserbyId = getUserbyId;
const createUser = async (req, res) => {
    // console.log(req.body);
    const { name, email } = req.body;
    // console.log(name, email);
    const response = await database_1.pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
    // res.send('recived')
    return res.json({
        message: 'User created Successfuly',
        body: {
            user: {
                name,
                email
            }
        }
    });
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    await database_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    return res.json(`User ${id} Updated Successfuly`);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    await database_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
    // res.send('deleting');
    return res.json(`User ${id} deleted Successfuly`);
};
exports.deleteUser = deleteUser;
