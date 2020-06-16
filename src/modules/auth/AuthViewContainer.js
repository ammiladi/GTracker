import { connect } from 'react-redux';
import { compose } from 'recompose';
import { login } from './AuthState';
import AuthScreen from './AuthView';

export default compose(
    connect(
        state => ({
            isLoading: state.auth.isLoading,
            isLoggedIn: state.auth.isLoggedIn,
        }),
        (dispatch, prop) => ({
            login: () => dispatch(login(prop.username, prop.password)),
        }),

    ),
)(AuthScreen);
