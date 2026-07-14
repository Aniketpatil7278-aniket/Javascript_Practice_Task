import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Fundamentals Task
        </Typography>

        <Box className="hidden md:flex gap-4">
          <Button color="inherit" onClick={() => navigate("/")}>
            Calculator
          </Button>

          <Button color="inherit" onClick={() => navigate("/AgeCalculator")}>
            Age Calculator
          </Button>

          <Button color="inherit" onClick={() => navigate("/task")}>
            Task
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
