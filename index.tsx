import { Component, FC } from 'react';
import * as React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { StyledEngineProvider } from '@mui/material/styles';

interface AppProps {}
interface AppState {
  name: string;
}

const App: FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const greeting = {
    name: 'Shuaibu',
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Hello name={greeting.name} />
        </TabPanel>
        <TabPanel value="2">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.getElementById('root')
);
