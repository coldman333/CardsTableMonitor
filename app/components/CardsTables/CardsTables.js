import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mock } from '../../mock/mock.js';
import { mockUpdate, fixWarning } from '../../actions';
import Table from './Table';

import './CardsTables.less';

import * as dataManipulation  from '../../actions';

const GAME_TYPES = ['Poker', 'Solitaire', 'Shuffling', 'Deal', 'BloodWars'];


class CardsTables extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = props;
        this.state = {};
        this.boundActionCreators = bindActionCreators(dataManipulation, dispatch);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        mock.subscribe( val => {
            dispatch(mockUpdate(val));
        });
    }

    handleFixTable = (event) => {
      //  console.log(event.target.value );
        this.props.dispatch(fixWarning(parseInt(event.target.value,10)));
    }

    getSrc = (type) => {
        return GAME_TYPES.indexOf(type) + 1;
    }


    renderTable() {
        return this.props.items.map(row => {
            const { id, name, type, players, maxPlayers, warning } = row;
            return (
              <Table
                  key={`game-table_${id}`}
                  id={id}
                  name={name}
                  type={type}
                  players={players}
                  maxPlayers={maxPlayers}
                  warning={warning}
                  src={this.getSrc(type)}
                  onClick={this.handleFixTable}
              />
            );
        });
    }

    render() {
        // todo generate header from obj keys
        return (
      <div className={'cardTables'}>
          {this.renderTable()}
      </div>);
    }
}

function mapPropsToState(state) {
    return {
        items: state.CardTableState.items,
    };
}

export default connect(mapPropsToState)(CardsTables);


CardsTables.propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func
};
