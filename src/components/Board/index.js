import React from 'react';
import './styles.less'
import ButtonAdd from '../Button-add-sticker'
import ModalAddSticker from '../Modal-add-sticker'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        };
    }

    handleOpenModal = () => {
        this.setState({
            openModal: true
        })
    };

    render() {
        return (
            <div className='board'>
                <ButtonAdd openModal={this.handleOpenModal}/>
                {this.state.openModal && <ModalAddSticker/>}
            </div>
        );
    }
}

export default Board;