import React from "react";
import "./styles.less"
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ColorPicker from 'material-ui-color-picker'

class ModalAddSticker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date('2019-08-20T21:11:54')
        };
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
    };

    render() {
        return (
            <div className="modal-add-sticker">
                <header>
                    <h1 className='title-modal'>Add your sticker</h1>
                    <button className="close-modal">✘</button>
                    <button className="creat-sticker-modal">✔</button>
                </header>
                <TextField
                    id="standard-dense"
                    label="Title"
                    margin="dense"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Deadline"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Duration"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    id="standard-dense"
                    label="Task description"
                    margin="dense"
                    multiline={true}
                    rows={5}
                    rowsMax={7}
                />
                <ColorPicker
                    name='color'
                    defaultValue='#000'
                />
            </div>
        );
    }
}

export default ModalAddSticker;