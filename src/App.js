import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario'

class App extends Component {

  state = {
      noticas : []
  }

   componentDidMount () {
        this.consultarNoticias()  
   }

   consultarNoticias = async (categoria = 'general') => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d347195b82da488b9b9a198f0a7ad4b2`

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
                <Formulario 
                    consultarNoticias = {this.consultarNoticias}
                />
                <ListaNoticias 
                    noticias = {this.state.noticas}
                />
            </div>
        </Fragment>
    );
  }
}

export default App;