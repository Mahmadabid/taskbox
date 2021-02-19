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

export interface HeaderProps {
  title?: string;
  BarColor?: string;
  BarBackground?: string;
  bodyColor?: string;
  bodyBackground?: string;
}

const Header: React.FC<HeaderProps> = ({title, BarColor, BarBackground, bodyColor, bodyBackground}) => {
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
      backgroundColor: BarBackground? BarBackground: 'hsl(227deg 22% 20%)',
      color: BarColor? BarColor: 'white',
    },
    body: {
      backgroundColor: bodyBackground? bodyBackground: 'hsl(226, 23%, 11%)',
      color: bodyColor? bodyColor: 'white',
    },
  }),
);
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