import { Button } from "@mui/material";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsRoundedIcon/>} variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
