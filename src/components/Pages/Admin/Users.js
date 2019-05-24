import React, {Component} from 'react';
import TableView from '../../Common/TableView';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';

const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Email', name: 'email'},
    {label: 'Name', name: 'name'}
]

class Users extends Component {

    componentDidMount(){
        this.props.getUsers(this.props.auth.token);
    }

    render(){
        const users = this.props.admin.users;

        return (
            <div>
                <h1>Users</h1>
                <TableView
                    columns={columns}
                    rows={users}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (token) => {
            dispatch(AdminActions.getUsers(token));
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);