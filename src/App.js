import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monstors: [],
            searchText: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ monstors: users });
            });
    }

    render() {
        const { monstors, searchText } = this.state;
        const filteredMonstors = monstors.filter(monstor =>
            monstor.name.toLowerCase().includes(searchText.toLowerCase())
        );
        return (
            <div className="App">
                <header className="App-header">
                    <SearchBox
                        placeholder="Search Pics"
                        handleChange={e =>
                            this.setState({
                                searchText: e.target.value
                            })
                        }
                    />
                    <CardList monstors={filteredMonstors} />
                </header>
            </div>
        );
    }
}

export default App;
