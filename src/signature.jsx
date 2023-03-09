import React, { useState } from 'react';


export default function Signature() {

    const [name, setName] = useState('');

    function onChangeEvent(event) {
        const newvalue = event.target.value;
        setName(newvalue);
    };

    const [date, setDate] = useState('');

    function onChangeDate(event) {
        const newvalue = event.target.value;
        setDate(newvalue);
    };

    return (
        <div>
            <main>
                <h1> {!name? 'Title': name} </h1>
                <h1> {!date? 'Date': 'Date: ' + date} </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sapiente hic numquam nihil sint quo ex corporis, cumque nisi! Quibusdam minima provident tempore harum quis laboriosam quasi id ducimus facilis?</p>
            </main>
            <footer>
                <input type="date" value = {date} onChange = {onChangeDate}/>
                <input type="text" value={name} onChange={onChangeEvent} />
            </footer>
        </div>
    )
}
