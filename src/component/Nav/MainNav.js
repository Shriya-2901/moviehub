import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useNavigate} from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Paper from '@mui/material/Paper';
import TvIcon from '@mui/icons-material/Tv';
import List from '@mui/material/List';
import MovieIcon from '@mui/icons-material/Movie';
import { WhatshotOutlined } from '@mui/icons-material';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
const navigate=useNavigate()
React.useEffect(() => {
  if(value===0)
  navigate("/");
  else if(value===1)
  navigate("/movies");
  else if(value===2)
  navigate("/series");
  else if(value===3)
  navigate("/search");

}, [value,navigate]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
       
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trending" icon={<WhatshotOutlined />} />
          <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
          <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


