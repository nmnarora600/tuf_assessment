const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();


// creating connection pool ==================================================>
const pool = mysql.createPool({
  connectionLimit: process.env.CONNECTION_LIMIT || 10, // Adjust as needed
  host: process.env.HOST,
  port: process.env.PORT || 3306,
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",

});

//functions to check the database and tables=======================================>
const preConnect = async () => {
  await createDB();

  console.log("created database / database exists");
  await selectDB();

  console.log("selected tuf database");

  await createTable();

  console.log("created tuf table");
  await insertData();
  console.log("Data Inserted");

};

const createDB = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`,
      (createErr, results) => {
        if (createErr) {
          console.error("Error creating database:", createErr);
          reject(createErr);
          return;
        }
        resolve(results);
      }
    );
  });
};
const selectDB = () => {
  return new Promise((resolve, reject) => {
    pool.query(`USE ${process.env.DATABASE}`, (error, results) => {
      if (error) {
        console.error("Error selecting database:", error);
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};
const createTable = () => {
  return new Promise((resolve, reject) => {
    pool.query(
    `CREATE TABLE IF NOT EXISTS tuftable (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        bludesc TEXT,
        showBanner TINYINT(1),
        closetime INT,
        weblink TEXT
      );`,
      (error, results) => {
        if (error) {
          console.error("Error creating database:", error);
          reject(error);
          return;
        }
        resolve();
      }
    );
  });
};

// checking and creating database and tables


// functions for CRUD operations ======================================================>
    const insertData = async (title, description, bludesc, showBanner, closetime, webLink) => {
        return new Promise((resolve, reject) => {
          pool.query(
            "DELETE FROM tuftable WHERE id != 1",
            (error, results) => {
              if (error) {
                reject(error);
                return;
              }
      
              // After deletion, insert the new record
              pool.query(
                `INSERT INTO tuftable (id, title, description, bludesc, showBanner, closetime, weblink) 
   VALUES (1, 'TakeUForward', 'Focus on time complexity', 'let AI handle the intricacy.', 1, 10,'https://www.namanarora.in')
   ON DUPLICATE KEY UPDATE 
   title = VALUES(title), description = VALUES(description), bludesc = VALUES(bludesc), 
   showBanner = VALUES(showBanner), closetime = VALUES(closetime), weblink=VALUES(weblink);`,
                [title, description, bludesc, showBanner, closetime, webLink],
                (error, results) => {
                  if (error) {
                    reject(error);
                    return;
                  }
      
                  resolve(results.insertId); // Resolve with the inserted data
                }
              );
            }
          );
        });
      };
      
 preConnect();

 const updateData = (title, description, bludesc, showBanner, closetime, webLink) => {
  return new Promise((resolve, reject) => {
    // First, perform the DELETE operation
    pool.query(`USE ${process.env.DATABASE}`, (selectError, results) => {
      if (selectError) {
        console.error("Error during DELETE operation:", selectError);
        return reject(selectError);
      }
    pool.query("DELETE FROM tuftable WHERE id != 1", (deleteError, deleteResults) => {
      if (deleteError) {
        console.error("Error during DELETE operation:", deleteError);
        return reject(deleteError);
      }
      
      // Then, perform the INSERT operation
      pool.query(
        `INSERT INTO tuftable (id,title, description, bludesc, showBanner, closetime, weblink) 
        VALUES (1,?, ?, ?, ?, ?,?)
        ON DUPLICATE KEY UPDATE 
        title = VALUES(title), description = VALUES(description), bludesc = VALUES(bludesc), 
        showBanner = VALUES(showBanner), closetime = VALUES(closetime) , weblink=VALUES(weblink);`,
        [title, description, bludesc, showBanner, closetime, webLink],
        (insertError, insertResults) => {
          if (insertError) {
            console.error("Error during INSERT operation:", insertError);
            return reject(insertError);
          }
         
          resolve(insertResults.insertId); // Resolve with the inserted data
        }
      );
    });
  });
  });
};



const getData = () => {
  return new Promise((resolve, reject) => {
    pool.query(`USE ${process.env.DATABASE}`, (error) => {
      if (error) {
        console.error("Error selecting database:", error);
        reject(error);
        return;
      }

      // Second query to select data from the table
      pool.query("SELECT * FROM tuftable", (error, results, fields) => {
        if (error) {
          console.error("Error fetching data:", error);
          reject(error);
          return;
        }

        resolve(results); // Resolve with the fetched data
      });
    });
  });

};

// All Routes=========================================================================>

//ROUTE to fetch all existing notes
router.get("/fetch", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    //catch
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});


//ROUTE: to update exisiting note
router.post("/update", async (req, res) => {
  const { title, description, bludesc, showBanner, closetime, webLink } = req.body;
 
  try {
    let r = await updateData( title, description, bludesc, showBanner, closetime, webLink);

    return res.json({ data: "updated" });
  } catch (error) {

    return res.status(404).send("Not Found");
  }
});



module.exports = router;