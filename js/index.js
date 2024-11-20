const Quotes = [
    {'author': 'Cersei Lannister', 
     'quote': "{Power is power.}"
    },
    {'author': 'Jaime Lannister', 
     'quote': "{By what right does the wolf judge the lion?}"
    },
    {'author': 'Roose Bolton', 
     'quote': "{The Lannisters send their regards.}"
    },
    {'author': 'Eddard Stark', 
     'quote': "{Winter is coming.}"
    },
    {'author': 'Tyrion Lannister', 
     'quote': "{Never forget what you are. The rest of the world will not.}"
    },
    {'author': 'Tywin Lannister', 
     'quote': "{Any man who must say 'I am the king' is no true king.}"
    },
]

function GOT_Quote(){
    const random = Number.parseInt( Math.random()*Quotes.length + 1 );
    document.querySelector('#quoteText').textContent = `${Quotes[random].quote}`;
    document.querySelector('#authorOutput').textContent = `--${Quotes[random].author}`;
}