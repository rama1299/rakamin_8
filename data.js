const express = require("express");
const router = express.Router();
const pool = require("./queries");

router.get("/film", (req, res) => {
  pool.query("SELECT * FROM film", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/category", (req, res) => {
  pool.query("SELECT * FROM category", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/:id", (req, res) => {
  pool.query(
    `SELECT * FROM film WHERE film_id = ${req.params.id}`,
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

router.get("/film/category/:id", (req, res) => {
  pool.query(
    `SELECT * FROM film_category
    FULL JOIN film
    ON film_category.film_id = film.film_id
    WHERE film_category.category_id = ${req.params.id}`,
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

module.exports = router;
