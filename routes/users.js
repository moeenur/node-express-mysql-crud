var express = require('express');
var db = require('../model/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query('SELECT * FROM users', function (err, rows, fields) {
        if (err)
            throw err;
        
        res.render('users/index', {title: 'A Simple CRUD Application', users: rows});
    });
});

/* GET user add form. */
router.get('/add', function (req, res) {
    res.render('users/add', {title: 'A Simple CRUD Application'});
});

/* POST data to add user. */
router.post('/add', function (req, res) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone

    };
    db.query('INSERT INTO users SET ?', data, function (err, rows, fields) {
        if (err)
            throw err;
        
        // redirect to index page
        res.redirect('/');
    });
});

/* GET user update form with user detail. */
router.get('/update/:id', function (req, res) {
    db.query('SELECT * FROM users WHERE id = ?', req.params.id, function (err, row) {
        if (err)
            throw err;
        
        res.render('users/update', {title: 'A Simple CRUD Application', user: row});
    });
});

/* POST data to update user. */
router.post('/update/:id', function (req, res) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone

    };
    db.query('UPDATE users SET ? WHERE id = ? ', [data, req.params.id], function (err, rows, fields) {
        if (err)
            throw err;
        
        // redirect to index page
        res.redirect('/');
    });
});

/* GET user to delete. */
router.get('/delete/:id', function (req, res) {
    db.query('DELETE FROM users WHERE id = ?', req.params.id, function (err, row) {
        if (err)
            throw err;
        
        // redirect to index page
        res.redirect('/');
    });
});

module.exports = router;
