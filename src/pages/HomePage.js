import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'The best place in the World?',
        author: 'John Peters',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum impedit. Perferendis modi ut totam a adipisci sapiente atque neque unde, sint deserunt quae, cumque maxime blanditiis aperiam quis fugiat!'
    },
    {
        id: 2,
        title: 'Cars and bikes',
        author: 'Paul Arron',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum impedit. Perferendis modi ut totam a adipisci sapiente atque neque unde, sint deserunt quae, cumque maxime blanditiis aperiam quis fugiat!'
    },
    {
        id: 3,
        title: 'Technology and computers',
        author: 'Dave Lee',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum impedit. Perferendis modi ut totam a adipisci sapiente atque neque unde, sint deserunt quae, cumque maxime blanditiis aperiam quis fugiat!'
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return(
        <div className="home">
            {artList}
        </div>
    )
}
export default HomePage;