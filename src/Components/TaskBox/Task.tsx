import React, { useEffect, useState } from 'react';
import { IconButton, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { pin, remove } from '../../Global/Slice/TaskSlice';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { TaskState } from '../../Global/Types/SliceTypes';

export interface TaskProps {
    title: string
    id: string
    date: string
    state: TaskState
}

export const Task: React.FC<TaskProps> = ({ title, id, date, state }) => {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    useEffect(() => {
        state === TaskState.pinned ? setCheck(true) : setCheck(false);
    }, [state, setCheck])
    const checkHandle = () => {
        dispatch((pin({ id })))
    }

    return (
        <ListItem>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        onChange={() => { dispatch((remove({ id }))) }}
                        name="checked"
                        indeterminate
                    />
                }
                label=""
            />
            <ListItemText primary={title} secondary={date} />
            <IconButton onClick={checkHandle} color="inherit">
                {check ? <Favorite color="primary" /> : <FavoriteBorder />}
            </IconButton>

        </ListItem>
    )
}

export default Task;