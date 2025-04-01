require("dotenv").config();
const express = require('express');
const app = express();
const session = require("express-session");
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const md5 = require('md5'); // Replace with bcrypt later

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SessionKey || "fallback-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true for HTTPS
}));
app.use(express.static("public"));

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB
});

connection.connect(() => {
    console.log("Connected to database!");
});

function isAuthenticated(req, res, next) {
    if (req.session.user != undefined) {
        return true
    } else {
        return false
    }
}



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login/login.html");
});

app.post('/loginAdmin', (req, res) => {
    let user = req.body.mail;
    let password = md5(req.body.pass);
    connection.execute(
        `SELECT email FROM ClampCompany.user WHERE email = ? AND password = ?`,
        [user, password],
        (err, request) => {
            if (err) {
                console.error("Query error:", err);
                return res.status(500).send({ message: "Database error", status: false });
            }
            if (request.length > 0 && (request[0].email === "gusarov.timur@gmail.com" || request[0].email === "asjer.bereket@icloud.com")) {
                req.session.user = { email: request[0].email };
                console.log("Access granted to " + request[0].email);
                return res.status(200).send({ message: "Access granted to " + request[0].email, status: true });
            } else {
                console.log("Invalid login attempt for " + req.body.mail);
                return res.status(401).send({ message: "Invalid credentials", status: false });
            }
        }
    );
});

app.get('/dashboard', (req, res) => {
    console.log("Is the user auth? " + isAuthenticated(req));
    if (!isAuthenticated(req)) {
        res.redirect('/login')
        return
    }
    res.sendFile(__dirname + "/public/Dashboard/index.html");
});
app.post('/getClampOrders', (req, res) => {
    if (!isAuthenticated(req) == true) {
        console.log("redirect");
        return res.status(200).json({ message: "not auth" })
    }
    connection.execute(
        'SELECT firstname, lastname, company, Description, plan, email, phone, date FROM ClampCompany.Orders',
        (error, result, fields) => {
            if (error) {
                console.error('Query error:', error);
                return res.status(500).json({ message: 'Database error', error });
            }
            console.log('Sending result:', result);
            res.status(200).json({ email: req.session.user, result, message: "Success" });
        }
    );
});
app.post('/send/order', (req, res) => {
    console.log('Request body:', req.body);
    let date = new Date()
    let dateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    // Validate input
    const { first, last, comp, wish, plan, mail, Phone } = req.body;
    if (!first || !last || !comp || !wish || !plan || !mail || !Phone) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

    connection.execute('INSERT INTO ClampCompany.Orders (firstname, lastname, company, Description, plan, email, phone, Date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [first, last, comp, wish, plan, mail, Phone, dateString], (error, result, fields) => {
        if (error) {
            console.error('Query error:', error);
            res.status(500).json({ message: 'Database error', error });
        }
        console.log('Insert result:', result);
        res.status(200).json({
            email: req.session.user?.email || 'unknown',
            result,
            message: 'Success'
        });
    }
    );
});
app.post('/send/email', (req, res) => {
    console.log('Request body:', req.body);
    let date = new Date()
    let dateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    // Validate input
    const { first, last, comp, wish, plan, mail, Phone } = req.body;
    if (!first || !last || !comp || !wish|| !mail || !Phone) {
        console.log("Not enough fields");
        
            return res.status(400).json({ message: 'Missing required fields' });
        }

    connection.execute('INSERT INTO ClampCompany.emails (Fullname, company, content, sender, phoneNumber, timestamp) VALUES (?, ?, ?, ?, ?, ?)', [first + " " + last, comp, wish, mail, Phone, dateString], (error, result, fields) => {
        if (error) {
            console.error('Query error:', error);
            res.status(500).json({ message: 'Database error', error });
        }
        console.log('Insert result:', result);
        res.status(200).json({
            email: req.session.user?.email || 'unknown',
            result,
            message: 'Success'
        });
    }
    );
});





app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Kunne ikke logge ut", status: false });
        }
        res.status(200).json({ message: "Logget ut", status: true });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));