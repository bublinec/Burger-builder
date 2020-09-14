import React, { Fragment, Component } from 'react';
import Modal from '../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }


        componentDidMount() {
            // Clear state from error when sending a new request
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            // Check each response for error, set state if there is one
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }
        
        errorDismissHandler = () => {
            this.setState({error: null});
        }

        
        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} hideModal={this.errorDismissHandler}>
                        <h2 style={{color: '#800020'}}>Something went wrong...</h2>
                        <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Fragment>
                )
        };
    };
};
 
export default withErrorHandler;