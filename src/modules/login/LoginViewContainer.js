// @flow
import {compose, lifecycle, withReducer, withState, withHandlers} from 'recompose';

import LoginView from './LoginView';
import {connect} from "react-redux";
import {loadImages, refreshImages} from "../gallery/GalleryState";

export default compose(
    withState('username', 'setUsername', ""),
    withState('password', 'setPassword', ""),
    withReducer(
        "token",
        "dispatch",
        (state, action) => {
            switch (action.type) {
                case "LOGIN":
                    state = "hdhdhdhh";
                    console.log("OKKKKKK")
                    return state ;
                default:
                    return state;
            }
        },
        0
    ),
    withHandlers({login: ({ dispatch }) => e => dispatch({ type: "LOGIN" }),})/*
    connect(
        state => ({
           // isLoading: state.login.isLoading,
          //  token  : state.login.token,
          //  fail : state.login.fail,
        }),
        dispatch => ({
            login: () => dispatch({ type: "LOGIN" }),
        }),
    ),
    lifecycle({
        componentDidMount() {
        },
    }),*/
)(LoginView);
