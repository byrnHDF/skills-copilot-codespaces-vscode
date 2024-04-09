// Create web server and listen on port 3000
// Load the comments.json file
// Create a route that returns all comments
// Create a route that returns a single comment
// Create a route that adds a new comment
// Create a route that updates a comment
// Create a route that deletes a comment
// Create a route that returns all comments for a specific post

var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var comments = require('./comments.json');
var _ = require('lodash');

app.use(bodyParser.json());

app.get('/comments', function(req, res){
    res.json(comments);
});

app.get('/comments/:id', function(req, res){
    var comment = _.find(comments, {id: parseInt(req.params.id)});
    res.json(comment || {});
});

app.post('/comments', function(req, res){
    var comment = {
        id: comments.length + 1,
