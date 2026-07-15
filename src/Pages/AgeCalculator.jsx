import { Alert, Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import {calculateAge } from "../utils/ageUtils";

const AgeCalculator = () => {
  const [year, setYear]=useState("");
  const [result , setResult]=useState("");
  const [emsg, setEmsg] = useState("");

  const handlecal=()=>{
    const currentYear= new Date().getFullYear();

    if(year === ""){
        setEmsg("Please enter the brith age.");
        setResult("");
        return;
    }
    if(!/^\d{4}$/.test(year)){
        setEmsg("Please enter valid 4-digit year.")
        setResult("");
        return;
    }

    const byera=Number(year);
    
    if(byera <1900){
        setEmsg("Birth year must be 1900 or later.");
        setResult("");
        return;
    }

    if(byera >currentYear){
        setEmsg("Brith year connot be in the future.");
        setResult("");
    }

    const ans = calculateAge(byera);
    setResult(ans);
    setEmsg("");
  }
    return (
      <>
        <Navbar />
        <Box className="min-h-screen bg-gray-100 flex items-center justify-center">
          <Card className="w-full max-w-md shadow-xl border-2 border-black">
            <CardContent className="flex flex-col gap-4 p-6">
              <Typography
                variant="h4"
                align="center"
                sx={{ color: "orange", fontWeight: "bold", mb: 2 }}
              >
                Age Calculator
              </Typography>

              <TextField
                fullWidth
                type="number"
                label="Enter the Brith Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />

              {emsg && (<Alert severity="error" variant="filled">{emsg}</Alert>)}

              <Button variant="contained" color="success" fullWidth onClick={handlecal}>
                Show Curret age
              </Button>

              <Box className="border border-gray-500 text-2xl p-4 rounded-2xl text-green-800 items-center justify-center">
                <Typography variant="h6" color="textSecondary" align="center">
                    Current Age 
                </Typography>

                <Typography variant="h4" align="center">{result}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </>
    );
};
export default AgeCalculator;
