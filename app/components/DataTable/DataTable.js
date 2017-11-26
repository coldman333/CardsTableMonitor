import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DateConverter from '../../lib/DateConverter';
// import { mock } from '../../mock/mock.js';

import * as dataManipulation  from '../../actions';


class DataTable extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = props;
        this.state = {};
        this.boundActionCreators = bindActionCreators(dataManipulation, dispatch);
    }

    componentDidMount() {
      //  const { dispatch } = this.props;
      //  mock.subscribe( val => {
           // dispatch({ type: 'UPDATE_ITEMS', val});
      //  });
    }

    handleSortBy(by) {
        const { dispatch } = this.props;
        dispatch({ type: 'SORT_BY', by}); // todo list of constants
    }

    renderRows() {
        return this.props.items.map(row => {
            const lastUpdate = DateConverter(row.lastUpdate);
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.assetName}</td>
                    <td>{row.price}</td>
                    <td>{lastUpdate}</td>
                    <td>{row.type}</td>
                    <th><button>*</button></th>
                </tr>
            );
        });
    }

    render() {
        // todo generate header from obj keys
        return (
      <table className={'dataTable'}>
          <thead>
              <tr>
                  <th>#id <button onClick={() => this.handleSortBy('id')}>^</button></th>
                  <th>Name <button onClick={() => this.handleSortBy('assetName')} >^</button></th>
                  <th>Price <button onClick={() => this.handleSortBy('price')} >^</button></th>
                  <th>Last Update <button onClick={() => this.handleSortBy('lastUpdate')} >^</button></th>
                  <th>type <button onClick={() => this.handleSortBy('type')} >^</button></th>
                  <th>favorite * </th>
              </tr>
          </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>);
    }
}

function mapPropsToState(state) {
    return {
        items: state.DataTableState.items,
    };
}

export default connect(mapPropsToState)(DataTable);


// export default DataTable;

DataTable.propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func
};
