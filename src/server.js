const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const port = 5000;

const app = express();


app.use(express.json());
app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quanlythuoc'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

/* API Chức năng login*/
app.post('/signup', (req, res) => {
  const sql = `INSERT INTO user (email, password, chucvu) VALUE (?)`;
  const values = [
    req.body.email,
    req.body.password,
    req.body.chucvu
  ]
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.post('/user', (req, res) => {
  const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  connection.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json('Error');
    if (data.length > 0) {
      return res.json("Login Successfully")
    }
    else {
      return res.json("No Record")
    };



  });
});




/* API Hiển thị thuốc */
app.get('/thuoc', (req, res) => {
  const sql = 'SELECT * FROM thuoc';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* Thần kinh não */
app.get('/thuoc/than-kinh-nao', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 1 `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });

});

/* Vitamin */
app.get('/thuoc-vitamin', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 2`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* Sức khỏe tim mạch  */
app.get('/thuoc-suc-khoe-tim-mach', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 3`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* Tăng sức đề kháng*/
app.get('/thuoc-tang-suc-de-khang', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 4`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* Hỗ trợ tiêu hóa*/
app.get('/thuoc-ho-tro-tieu-hoa', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 5`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* Hỗ trợ tiêu hóa*/
app.get('/thuoc-sinh-ly-noi-tiet-to', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE loai = 6`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});


/** API Chi tiết thuốc */

app.get('/Product-detail/:id', (req, res) => {
  const sql = `SELECT * FROM thuoc WHERE id = ?`;
  const id = req.params.id;
  connection.query(sql, [id], (err, data) => {
    if (err) throw err;
    res.send(data);
  })
})

/** Giỏ hàng */

app.get('/Cart', (req, res) => {
  const sql = `SELECT id, hinh, tenthuoc, gia FROM giohang`;
  connection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
})


app.post('/Add', (req, res) => {
  const sql = `INSERT INTO giohang (id,tenthuoc,loai,chitiet,hinh,gia) VALUES (?,?,?,?,?,?)`;
  const values = [
    req.body.id,
    req.body.tenthuoc,
    req.body.loai,
    req.body.chitiet,
    req.body.hinh,
    req.body.gia
  ]
  connection.query(sql, [...values], (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  })
})

app.delete('/delete-cart/:id', (req, res) => {
  const sql = `DELETE FROM giohang WHERE id = ?`;
  const id = req.params.id;
  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})



/*  API Quản lý thuốc */
app.post('/create', (req, res) => {
  const sql = `INSERT INTO thuoc (tenthuoc,loai,chitiet,hinh,gia) VALUES (?)`;
  const values = [
    req.body.tenthuoc,
    req.body.loai,
    req.body.chitiet,
    req.body.hinh,
    req.body.gia
  ]
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.put('/update/:id', (req, res) => {
  const sql = `UPDATE thuoc SET tenthuoc = ?, loai = ?, chitiet = ?, hinh = ?, gia = ? WHERE id = ?`;
  const values = [
    req.body.tenthuoc,
    req.body.loai,
    req.body.chitiet,
    req.body.hinh,
    req.body.gia
  ]
  const id = req.params.id;
  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.delete('/thuoc/:id', (req, res) => {
  const sql = `DELETE FROM thuoc WHERE id = ?`;
  const id = req.params.id;
  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

/** Hiển thị User */

app.get('/user', (req, res) => {
  const sql = 'SELECT * FROM user';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});


app.delete('/user/:id', (req, res) => {
  const sql = `DELETE FROM user WHERE UserID = ?`;
  const UserID = req.params.id;
  connection.query(sql, [UserID], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})


app.put('/update-user/:id', (req, res) => {
  const sql = `UPDATE user SET email = ?, password = ?, chucvu = ? WHERE UserID = ?`;
  const values = [
    req.body.email,
    req.body.password,
    req.body.chucvu,

  ]
  const id = req.params.id;
  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})


app.listen(port, () =>
  console.log(`Server started on port ${port}`));
