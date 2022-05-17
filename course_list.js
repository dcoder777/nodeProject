const express = require('express');
const app = express();
const courses = [
    {id:1, name:'First_Course'},
    {id:2, name:'Second_Course'},
    {id:3, name:'Third_course'}
];
app.get('/', (req,res)=>{
    res.send('<a href="/api/courseList/">Course List</a>');
});
app.get('/api/courseList',(req,res)=>{
    res.send(courses);
    
})
app.get('/api/courseList/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course not found!!');
    res.send(course);
})

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Running on port ${port}......`);
})