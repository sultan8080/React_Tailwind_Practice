import React from 'react'



const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

export default function Card(props) {

    const { title, descText } = props;
    return (

        <div className='w-15 shadow-md bg-sky-800 p-5 h-auto'>
            <h3 className='p-3 m-0 text-yellow-500 text-center font-bold '> {title}</h3>
            <p className='p-3 m-0 text-white text-justify'> {descText}</p>
            <h4 className='p-3 m-0 text-center text-yellow-200'> {dateName + '/' + monthName + '/' + currentYear}</h4>
        </div>


    )
}
