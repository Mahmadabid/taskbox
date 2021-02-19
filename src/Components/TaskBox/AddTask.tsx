import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Global/Slice/TaskSlice';
import { State, TaskState } from '../../Global/Types/SliceTypes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '10px',
            '& > *': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
        button: {
            background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 40,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px var(--box-shadow)',
            marginTop: '15px'
        },
    }),
);

const blue = {
    '--background-start': '#2196F3',
    '--background-end': '#21CBF3',
    '--box-shadow': 'rgba(33, 203, 243, .3)',
  } as React.CSSProperties;

export default function AddTask() {
    const classes = useStyles();
    var color = blue;
    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.task.tasks);
    const [title, setTitle] = React.useState('');
    
    var objToday = new Date(),
	weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = objToday.getDate(),
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds()
	
    var today: string = curHour + ":" + curMinute + "." + curSeconds + " " + dayOfWeek.substring(0,3) + " " + curMonth.substring(0,3) + " " + dayOfMonth + " " + curYear;

    const newTask = {
        id: tasks.length !== 0 ? (parseInt(tasks[tasks.length-1].id) + 1).toString() : '1',
        title,
        state: TaskState.normal,
        date: today
    }

    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        dispatch(add({task: newTask}));
        setTitle('');
    }

    return (
        <div>
        <form className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
            <TextField style={{ width: '300px' }} id="outlined-basic" label="Task Name" value={title} variant="outlined" onChange = {(e) => {setTitle(e.target.value)}} required />
            <Button className={classes.button} style={color} type="submit">Add Task</Button>
        </form>
        </div>
    );
}
