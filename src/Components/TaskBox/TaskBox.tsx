import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Task from './Task';
import { useSelector } from 'react-redux';
import { State, TaskState } from '../../Global/Types/SliceTypes';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minWidth: 380,
      backgroundColor: theme.palette.background.paper,
    },
    rootQuery: {
      width: '100%',
      minWidth: 305,
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      marginTop: '10px',
      marginLeft: '10px',
    },
    LightList: {
      backgroundColor: 'hsl(227deg 100% 97%)',
    },
  }),
);

export default function TaskBox() {
  const classes = useStyles();
  const tasks = useSelector((state: State) => state.task.tasks);
  const islit = useSelector((state: State) => state.themes.value);
  const matches = useMediaQuery('(max-width:380px)');

  const sortedTasks = [
    ...tasks.filter((task) => task.state === TaskState.pinned),
    ...tasks.filter((task) => task.state === TaskState.normal)
  ]

  if (tasks.length !== 0) {
    return (
      <div>
        {sortedTasks.map((task, index) =>
          <List key={index} className={`${matches ? classes.rootQuery : classes.root} ${classes.list} ${islit ? classes.LightList : ''} `}>
            <Task title={task.title} id={task.id} date={task.date} state={task.state}/>
          </List>
        )}
      </div>
    );
  }

  else {
    return <h1 style={{ textTransform: 'uppercase' }}>Add Tasks to View</h1>
  }
}
