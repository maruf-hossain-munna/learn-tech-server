const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const allCategories = require('./data/categories.json');
const allCourses = require('./data/allCourses.json');

app.get('/', (req, res) => {
    res.send(' Learn tech server  is running');
})

app.get('/categories', (req, res) => {
    res.send(allCategories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id == "06") {
        res.send(allCourses)
    }
    else {
        const courseCategory = allCourses.filter(course => course.category_id == id);
        res.send(courseCategory)
    }

})

app.get('/courses', (req, res) =>{
    res.send(allCourses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courses = allCourses.find(course => course.id == id);
    res.send(courses)
})


app.listen(port, () => {
    console.log('This server running on port', port);
})