import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'R.Sanchez',
          id: '1',
          email: 'robododo@losers.com'
        },
        {
          name: 'A.Disasi',
          id: '2',
          email: 'aledodo@losers.com'
        },
        {
          name: 'T.Silva',
          id: '6',
          email: 'tiadodod@losers.com'
        },
        {
          name: 'L.Colwill',
          id: '26',
          email: 'lewidodo@losers.com'
        },
        {
          name: 'M.Gusto',
          id: '27',
          email: 'malododo@losers.com'
        },
        {
          name: 'C.Gallagher',
          id: '23',
          email: 'conododo@losers.com'
        },
        {
          name: 'M.Caicedo',
          id: '25',
          email: 'moisedoddo@losers.com'
        },
        {
          name: 'B.Chiwell',
          id: '21',
          email: 'bendodo@losers.com'
        },
        {
          name: 'R.Sterling',
          id: '7',
          email: 'rahedodo@losers.com'
        },
        {
          name: 'E.Fernandez',
          id: '8',
          email: 'enzododo@losers.com'
        },
        {
          name: 'N.Jackson',
          id: '27',
          email: 'nicododo@losers.com'
        },
        {
          name: 'M.Mudryk',
          id: '10',
          email: 'mykadodo@losers.com'
        },
        {
          name: 'N.Madueke',
          id: '11',
          email: 'nonidodo@losers.com'
        },
        {
          name: 'C.Palmer',
          id: '20',
          email: 'cododo@losers.com'
        },
        {
          name: 'I.Maatsen',
          id: '29',
          email: 'iandodo@losers.com'
        },
        {
          name: 'M.Cucurella',
          id: '3',
          email: 'mardodo@losers.com'
        },
        {
          name: 'L.Ugochukwu',
          id: '16',
          email: 'lesdodo@losers.com'
        },
        {
          name: 'D.Petrovic',
          id: '28',
          email: 'dordodo@losers.com'
        },
        {
          name: 'D.Washington',
          id: '36',
          email: 'deidodo@losers.com'
        },
        {
          name: 'L.Bergstrom',
          id: '47',
          email: 'lucadodo@losers.com'
        }
      ],
      searchField : ''
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json)
  //     .then((users) => this.setState(() => {
  //       return(
  //         {monsters: users}
  //       )
  //     }))
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json)
  //     .then((users) => this.setState(() => {
  //       return(
  //         {monsters: users}
  //       )
  //     }))
  // }

  onSearchField = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return(
        {searchField}
      )
    })
  }

  render() {
    const { onSearchField } = this;

    const filteredSearch = this.state.monsters.filter((monster) => {
      return (
        monster.name.toLocaleLowerCase().includes(this.state.searchField)
        )
    })
    
    return(
      <div className='App'>
        <h1 className='app-title'>Chelsea Clowns</h1>

        <SearchBox 
          onSearchChange = {onSearchField} 
          newClassName = 'search-box' 
          newPlaceHolder = {'Search Players'} 
        />
        <CardList monsters = {filteredSearch} />
      </div>
    )
  }
}

export default App;