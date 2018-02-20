import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import LogoImg from 'YOUR_PATH/logo.png';

export default function Table({
    id, name, type, players, maxPlayers, warning, onClick, src}) {
    return (
      <div className={
             classNames( 'game-table',
               { 'game-table_warning': warning },
               { 'game-table_warning-animation': warning },
               { 'game-table_active': players >= 1 },
             )
           }
      >
        <div> <img src={`app/assets/images/${src}.png`} title={type} width={16} /> </div>
        <div>{name}</div>
        <div> {type}</div>

        <div className="game-table-players"><span>{players}</span>/{maxPlayers}</div>
        { warning && <div>
          <button value={id}
                  onClick={onClick}
          >Fix</button>
        </div> }
      </div>
    );
}

Table.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    players: PropTypes.number,
    maxPlayers: PropTypes.number,
    warning: PropTypes.bool,
    src: PropTypes.number,
    onClick: PropTypes.func,
};
