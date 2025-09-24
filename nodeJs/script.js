import express from 'express'
import cors from 'cors';
//import data from './data/menu.json' assert { type: 'json' }
import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});

const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000
let ORDERS=[]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/menus', async (req,res)=>{
    try {
    
  const resultat = await pool.query("SELECT id, plate, description, image FROM menu_items");
  res.json(resultat.rows);

      
      
    } catch (error) {
      console.error("Erreur lors de la récupération des menus:", error);
        res.status(500).json({error: "Erreur serveur"});
    }
   
    
})

app.post('/orders', async (req, res) => {
  try {
    const { name, menu_item_id } = req.body; 
    console.log(name,menu_item_id)
    if (!name || !Number.isInteger(menu_item_id)) {
      return res.status(400).json({ error: 'name ou menu_item_id invalide' });
    }

    const result = await pool.query(
      `INSERT INTO orders (name, menu_item_id)
       VALUES ($1, $2)
       RETURNING id, name, menu_item_id, created_at`,
      [name, menu_item_id]
    );

    return res.status(200).json({ order: result.rows[0] });
  } catch (err) {
    console.error('POST /orders', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


app.get('/orders', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        o.id,
        o.name,
        o.created_at,
        m.id        AS menu_item_id,
        m.plate,
        m.description,
        m.image
      FROM orders o
      JOIN menu_items m ON m.id = o.menu_item_id
      ORDER BY o.id DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('GET /orders', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


app.delete('/orders/:id',async (req,res)=>{
  try {
    const id = Number(req.params.id);
   


    const result = await pool.query(
      'DELETE FROM orders WHERE id = $1 RETURNING *',
      [id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('DELETE /orders/:id', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})