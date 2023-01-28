import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [term, setTerm] = useState('');

    useEffect(() => {
        // OPTION 1
        // const search = async () => {
        //     await axios.get('https://wiki....');
        // };
        // search();

        // OPTION 2
        // (async () => {
        //     await axios.get('https://wiki....');
        // })();

        // OPTION 3
        axios.get('https://wiki....').then((response) => {
            console.log(response);
        });
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search;
