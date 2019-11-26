import React, { Component, Fragment } from 'react';
import Header from './components/Header';
class App extends Component {

  state = {
      noticas : []
  }

   componentDidMount () {
        this.consultarNoticias()  
   }

   consultarNoticias = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=d347195b82da488b9b9a198f0a7ad4b2`

        const respuesta = await fetch(url)
        const noticas = await respuesta.json();


        this.setState({
            noticas : noticas.articles
        })

   }
  render() {
    return (
        <Fragment>
            <Header 
                titulo = 'Noticias React API'
            />
            <div className="container white contenedor-noticias">
                
            </div>
        </Fragment>
    );
  }
}

export default App;