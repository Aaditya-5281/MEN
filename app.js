const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const UserModel = require('./models/user');
const connectDB = require('./config/db');

app.set('view engine', 'ejs');

connectDB();

// Add middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/',
    (req,res,next)=>{
    const a = 50;
    const b = 40;
    const c = a + b;
    console.log(c);
    next();

}, (req, res) => {
    res.render('home');
});

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send('data received');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/api/products', (req, res) => {
    res.send('Products page');
});



app.get('/register', (req, res) => {
    res.render('register');
});


// Create Operation
app.post('/register', (req, res) => {
    
    const { name, number, gender, date, text } = req.body;

    const user = new UserModel({
        name,
        number,
        gender,
        date,
        text
    });

    user.save().then(() => {
        res.send('user registered successfully');
    }).catch((error) => {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user');
    });
});



// Read Operation
app.get('/get_users', (req, res) => {
    UserModel.find().then((users) => {
        res.send(users);
    }).catch((error) => {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    });
});

// Update Operation
app.get('/update', (req, res) => {
    res.render('update');
});

app.post('/update_user', async (req, res) => {
    try {
        const { name, number, gender, date, text } = req.body;
        
        // Only include fields that are provided in the update
        const updateFields = {};
        if (number) updateFields.number = number;
        if (gender) updateFields.gender = gender;
        if (date) updateFields.date = date;
        if (text) updateFields.text = text;
        
        const user = await UserModel.findOneAndUpdate(
            { name }, 
            updateFields,
            { new: true } // Return the updated document
        );
        
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        res.redirect('/update');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
});

// Delete Operation
app.get('/delete', (req, res) => {
    res.render('delete');
});

app.post('/delete_user', async (req, res) => {
    try {
        const { name } = req.body;
        
        const user = await UserModel.findOneAndDelete({ name });
        
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        res.redirect('/delete');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
