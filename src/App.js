import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

function App() {
    return (
        <div>
            <Dropdown options={options} />
        </div>
    );
}

export default App;
