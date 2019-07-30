import React from 'react';
import { connect } from 'react-redux';
import { addSticker, removeSticker } from './redux/actions';

import './assets/styles/main.less';
import 'typeface-roboto';

import Board from './components/Board'

function App() {
    return (
        <div className='App'>
            <Board/>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    addSticker: () => dispatch(addSticker()),
    removeSticker: () => dispatch(removeSticker())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
