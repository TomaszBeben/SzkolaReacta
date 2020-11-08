import React, {useState} from 'react';
import './App.css';

const posts = [
    { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
    { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
    {
        id: 3, title: 'Adam Małysz Zgolił wąs',
        intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
    }
];

const Form = (props) => {
    const { title, intro } = props;

    const [limit, setLimit]= useState(25);
    const [dots, setDots]= useState('...');

    const limitOfLetters = intro.slice(0,limit);
    const toggle = () =>{
        if(limit === 25){
            return( setLimit(intro.length) ||
                setDots(''))
        }else {
            setLimit(25) || setDots("...")
        }
    }
    return (
        <>
            <div>
                <h2 className='clicker' onClick={toggle}>{title}</h2>
                <p>{limitOfLetters + dots}</p>
            </div>
        </>
    )
}

const ClickBait = () => {
    return (
        <>
            {posts.map((elem, index) => (
                <Form key={index} title={elem.title} intro={elem.intro} />
            ))}
        </>
    )
}
export default ClickBait;