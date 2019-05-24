import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { isNullOrUndefined } from 'util';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

class TableView extends Component {
    render(){
        const {rows, columns} = this.props;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns ?
                                columns.map((col, i) => {
                                    return (
                                        <TableCell key={i}>{col.label}</TableCell>
                                    )
                                })
                            : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ?
                            rows.map((row, i) => {
                                return (
                                    <TableRow>

                                    {
                                        columns.map((col, colIndex) => {
                                            return (
                                                <TableCell>
                                                    {col.name === 'id' ?
                                                        <Link to={`/admin/posts/edit/${row[col.name]}`} component={RouterLink}>{row[col.name]}</Link>
                                                        : row[col.name]
                                                    }
                                                    
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                                )
                                
                            
                                
                            })
                        : null}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TableView;