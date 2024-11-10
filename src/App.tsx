import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Typography, Paper, Grid} from '@mui/material';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
// import { Button } from '../components/user/Button';
import { Card } from './components/user/Card';
// import { Text } from '../components/user/Text';


function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
          <Container padding={5} background="#eee">
            <Card background={"#f5f5f5"}/>
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              <SettingsPanel />
          </Paper>          
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
