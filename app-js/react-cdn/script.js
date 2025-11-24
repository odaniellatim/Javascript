function List() {
    return (
        <ul>
            <li>Super Popular JS Library</li>
            <li>Will help me be even more employable</li>
            <li>React has a pretty cool logo</li>
        </ul>
    );
}

//App principal que renderiza na tela.
function MyApp() {
    return (
        <List />
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
