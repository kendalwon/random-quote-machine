import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "I'm not sure if I was the first man in space or the last dog.",
          author: "Yuri Gagarin"
        },
        {
          quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
          author: "Bill Watterson"
        },
        {
          quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
          author: "Neil Gaiman"
        },
        {
          quote: "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
          author: "Alexandre Dumas"
        },
        {
          quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
          author: "Douglas Adams"
        }
    ],
      quote: "Never let your sense of morals prevent you from doing what is right.",
      author: "Isaac Asimov"
    }
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({quotes: json.quotes}))
      .catch(error => console.log(error));
  }

  pickQuote = () => {
    const { quotes } = this.state;
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index].quote;
    const author = quotes[index].author;
    this.setState({ quote, author });
  }

  render() {
    console.log(this.state);
    const { quote, author } = this.state;
    return (
      <div id="app">
        <div id="quote-box">
          <h1 id="text">{quote}</h1>
          <h2 id="author">- {author}</h2>
          <div id="flex">
            <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="tweet" icon={faTwitter} /></a>
            <button id="new-quote" onClick={this.pickQuote}>New Quote</button>   
          </div>
        </div>
      </div> 
    );
  }  
}

export default App;
