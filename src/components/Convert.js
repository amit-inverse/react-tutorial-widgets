import { useState, useEffect } from 'react';

function Convert({ language, text }) {
    useEffect(() => {
        console.log('New language or text');
    }, [language, text]);

    return <div />;
}

export default Convert;
