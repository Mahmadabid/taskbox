import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Global/Slice/ThemeSlice';
import { State } from '../../Global/Types/SliceTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100vw',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    appBar: {
      backgroundColor: 'hsl(227deg 22% 20%)',
    },
    body: {
      backgroundColor: 'hsl(226, 23%, 11%)',
      color: 'white',
    },
  }),
);

export interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const islit = useSelector((state: State) => state.themes.value );

  const themeHandle = () => {
    dispatch(setTheme())
    var element = document.body;
    element.classList.toggle(classes.body);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={islit? '': classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title?title:"Add title"}
          </Typography>
          <IconButton onClick={themeHandle} color="inherit">
            {islit ? <Brightness7Icon />: <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;