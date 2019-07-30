import React from 'react';
import './styles.less'
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddButton = withStyles({
    root: {
        background: '#4c754b',
        bottom: '5px',
        position: 'absolute',
        right: '8px',
        '&:hover': {
            background: "#314e31",
        },
    }
})(Fab);


class ButtonAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AddButton color="primary" aria-label="add">
                <AddIcon/>
            </AddButton>
        );
    }
}

export default ButtonAdd;