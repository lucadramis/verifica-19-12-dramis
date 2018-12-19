import React from 'react';
import '../css/body.css'


export default class Photo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {                   //creazione array di nome post definita vuota
            post: []
        }

    }
    componentDidMount() {                                       //componente per inviare dati al Dom
        fetch('https://jsonplaceholder.typicode.com/photos/50')  //con l'API fetch vado a esportare dal link 
            .then(response => response.json())                  // in un oggetto formattato json data e lo passo al mio array
            .then(data => this.setState({ post: data }))          // usando setState  
        //.then(data => console.log(this.state.post.title)); //ho verificato con console.log che ci siano i dati 

    }


    render() {


        return (


            <div id="post">

                {/*this.state.post.map((item, index) => {
                    if (index < 10) {
                        console.log(item)    
                    }
                        return (
                            <div id="container">
                                <img id="thumb" src={item.thumbnailUrl} />
                            </div>
                        )
                    })
                */}

                <p><img id="thumb" src={this.state.post.thumbnailUrl} /></p>
                <p><div id="albumid">Album ID:{this.state.post.id}</div></p>
                <br />
                <div id="title">Title:{this.state.post.title}</div>
                <br />
                <div ><img id="id" src={this.state.post.url} /></div>

            </div>
            // ho creato div e indentazioni per visualizzare i dati richiesti
        );
    }
}