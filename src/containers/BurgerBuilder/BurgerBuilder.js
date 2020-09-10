import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
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