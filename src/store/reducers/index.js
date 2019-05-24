import {combineReducers} from 'redux';
import auth from './authReducer';
import admin from './adminReducer';
import site from './siteReducer';

export default combineReducers({
    auth,
    admin,
    site
})