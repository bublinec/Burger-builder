import React, {Component} from 'react';
import styled from 'styled-components';
import Order from '../components/Order/Order';
import axios from '../axios-orders';

class Orders extends Component {
    state = { 
        orders: [],
        loading: true
     }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const orders = [];
                for(let key in res.data){
                    orders.push({
                        ...(res.data[key]),
                        id: key
                    })
                }
                this.setState({
                    orders: orders,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    loading: false       
                });
            });
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.orders.map(order => (
                        <Order 
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}/>
                    ))
                }
            </div>
         );
    }
}
 
export default Orders;