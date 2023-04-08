import React, { useState } from 'react';
import './App.css';
import { Box, Tab, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';
import MovingIcon from '@mui/icons-material/Moving';

function App() {
  const [value, setValue] = useState("1")
  const handleChange = (event: React.SyntheticEvent, newvalue : string) =>{
    setValue(newvalue)
  }
  var [doneCard, setdoneCard] = useState([
    {'id':1, 'title': "Card1 title", "description" : "this is card1 decscription"},
    {'id':2, 'title': "Card2 title", "description" : "this is card2 decscription"},
    {'id':3, 'title': "Card3 title", "description" : "this is card3 decscription"}
])

  var [doingCard, setdoingCard] = useState([
    {'id':4, 'title': "Card4 title", "description" : "this is card4 decscription"},
    {'id':5, 'title': "Card5 title", "description" : "this is card5 decscription"},
    {'id':6, 'title': "Card6 title", "description" : "this is card6 decscription"}
])

  const handleMovetoDone = (card) => {
    setdoingCard(doingCard.filter(c => c.id !== card.id))
    setdoneCard([...doneCard, card])
  }
  const handleMovetoDoing = (card) => {
    setdoneCard(doneCard.filter(c => c.id !== card.id))
    setdoingCard([...doingCard, card])
  }
  return (
<>
  <TabContext value={value}>
<Box sx={{ borderColor: 'divider', borderBottom:0.5 }}>
  <TabList color="primary" onChange={handleChange} textColor='secondary' indicatorColor='secondary' centered>
<Tab  label="All" value='1'/>
<Tab  label="Doing" value='2' />
<Tab  label="Done" value='3'/>
  </TabList>
</Box>

<TabPanel value="1"><>
<Grid container spacing={4}>
  {doingCard.map((card) => 
<Grid item xs={3}>
  <Card key={card.id}>
    <CardMedia component='img' height='140' image="https://source.unsplash.com/random"></CardMedia>
    <CardContent>
      <Typography gutterbottom variant='h4'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
  </Card>
</Grid>
)}
  {doneCard.map((card) =>
<Grid item xs={3}>
  <Card key={card.id}>
  <CardMedia component='img' height='140' image="https://source.unsplash.com/random"></CardMedia>
    <CardContent>
      <Typography gutterbottom variant='h4'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
  </Card>
</Grid>
)}
</Grid>
</>
</TabPanel>

<TabPanel value="2">
<Grid container spacing={4}>
{doingCard.map((card) =>
<Grid item xs={3}>
  <Card key={card.id}>
  <CardMedia component='img' height='140' image="https://source.unsplash.com/random"></CardMedia>
    <CardContent>
      <Typography gutterbottom variant='h4'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
    <CardActions>
    <Button size='small' variant='contained' color='secondary' startIcon={<MovingIcon/>} onClick={() => {handleMovetoDone(card)}}> Move to Done!</Button>
    </CardActions>
  </Card>
</Grid>
)}
</Grid>
</TabPanel>

<TabPanel value="3">
<Grid container spacing={4}>
{doneCard.map((card) => 
<Grid item xs={3}>
  <Card key={card.id}>
  <CardMedia component='img' height='140' image="https://source.unsplash.com/random"></CardMedia>
    <CardContent>
      <Typography gutterbottom variant='h4'>{card.title}</Typography>
      <Typography gutterbottom variant='body2' >{card.description}</Typography>
    </CardContent>
    <CardActions>
    <Button size='small' variant='contained' startIcon={<MovingIcon/>} color='secondary' onClick={() => {handleMovetoDoing(card)}}> Move to Doing!</Button>
    </CardActions>
  </Card>
  </Grid>
)}
</Grid>
</TabPanel>
  </TabContext>
</>
  );
}

export default App;
