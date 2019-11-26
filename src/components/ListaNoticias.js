import React from 'react';
import Noticia from './Noticia'
import PropTypes from 'prop-types'
const ListaNoticias = ({noticias}) => {
    return (
        <div className = "row">
            {noticias.map(noticia => (
                    <Noticia 
                        key = {noticia.url} 
                        noticia = {noticia}
                    />
            ))}
        </div>
    );
};

Noticia.proptypes = {
    noticia : PropTypes.array.isRequired
}
export default ListaNoticias;