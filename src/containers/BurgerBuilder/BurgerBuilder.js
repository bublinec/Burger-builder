import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component{
    state = {
        ingredients: {
            meat: 1,
            sala: 1,
            bacon: 0,
            cheese: 1
        }
    }


    render () {

        return (
            <Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>

                <div>
                    Building Controls
                </div>
            </Fragment>
        )
    }
}

export default BurgerBuilder;