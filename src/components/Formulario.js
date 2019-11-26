import React, { Component } from 'react';

class Formulario extends Component {
    state  = {}
    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra noticas por categoria</h2>

                        <div className="input-field col s12 m8">
                            <select
                                onChange= {this.cambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;