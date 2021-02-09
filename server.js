const express = require('express');
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')


const app = express()
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true,useUnifiedTopology: true})
//Settings
app.set('view engine', 'ejs')

//Routes
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    //res.send('Hola esto funka mono')
    const articles = [{
        title:'Test article 1',
        createAt: new Date(),
        description:'Test Description'
    },
    {
        title:'Test article 2',
        createAt: new Date(),
        description:'Test Description 2'
    }]
    res.render('articles/index',{ articles:articles})
})

app.use('/articles', articleRouter)

app.listen(5000)