import React from 'react';

import Message from "../../components/Message";

import "./Home.scss"

const Home = () => (
    <section className="home">
        <Message avatar="https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg"
                 text="Салам, Брут! Чё, как, уничтожил флот галлов?"
                 date="2014-02-11T11:30:30"/>
        <Message avatar="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                 text="Hello, World!"
                 date="2014-02-11T11:30:30"
                 isMe={true}/>
    </section>
)

export default Home;