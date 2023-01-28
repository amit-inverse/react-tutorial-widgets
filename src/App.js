import { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework.',
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS libarary among engineers.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.',
    },
];

const options = [
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Blue',
        value: 'blue',
    },
    {
        label: 'Green',
        value: 'green',
    },
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
};

function App() {
    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    );
}

export default App;
