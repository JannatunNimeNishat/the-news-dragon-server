const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
//categories
const categories = require('./data/categories.json');
//news
const news = require('./data/news.json')



//cors
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon News is running');
})

//categories
app.get('/categories', (req, res) => {
    res.send(categories);
})

//all news
app.get('/news', (req, res) => {
    res.send(news);
})

// single news
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id, typeof id);
    const singleNews = news.find(singleNews => singleNews._id === id);
    res.send(singleNews)
})

//category wise news
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '0') {
        res.send(news);
    }
    else {
        const category_wise_news = news.filter(categoryNews => categoryNews.category_id === id);
        res.send(category_wise_news);

    }
})

app.listen(port, () => {
    console.log(`Dragon news API is running on Port: ${port}`)
})

