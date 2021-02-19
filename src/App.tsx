import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AddTask from './Components/TaskBox/AddTask';
import TaskBox from './Components/TaskBox/TaskBox';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import { State } from './Global/Types/SliceTypes';

function App() {

  const islit = useSelector((state: State) => state.themes.value);

  const theme = createMuiTheme({
    palette: {
      type: islit ? "light" : "dark",
    },
  });

  return (
    <div>
      <Header title="TaskBox" />
      <ThemeProvider theme={theme}>
        <div className="App">
          <AddTask />
          <TaskBox />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
