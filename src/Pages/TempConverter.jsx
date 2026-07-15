import { Box,Button,Card, CardContent, MenuItem, Select, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { use, useState } from "react";

import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} from "../utils/temperatureUtils";


const TempConverter=()=>{

    const [temp, setTemp] =useState("");
    const [conversion, setConversion] =useState("");
    const [emsg , setEmsg]= useState("");
    const [result, setResult] =useState("");

    const handleConvert= ()=>{
      if(temp === ""){
        setEmsg("Please enter the Temp.");
        setResult("");
        return;
      }

      if(conversion === ""){
        setEmsg("Please select the conversion option");
        setResult("");
        return;
      }

      const temperature =Number(temp);
      let convertedValue;


      switch(conversion){
        case "CtoF" : convertedValue= celsiusToFahrenheit(temperature).toFixed(2);
                      setResult(`${convertedValue} °F`);
                      break;
        case  "FtoC" : convertedValue = fahrenheitToCelsius(temperature).toFixed(2);
                       setResult(`${convertedValue} °C`);
                       break;
        default:
                setEmsg("Invalid conversion option.");
                setResult("");
                return;
      }
      setEmsg("");

    };


    return (
      <>
        <Navbar />
        <Box className="min-h-screen items-center justify-center bg-gray-100 flex">
          <Card className="w-full max-w-md shadow-xl border-2 border-black ">
            <CardContent className="flex flex-col gap-4 p-6">
              <Typography
                variant="h4"
                align="center"
                sx={{ color: "orange", fontWeight: "bold", mb: 2 }}
              >
                Temperature Converter
              </Typography>

              <TextField
                fullWidth
                required
                label="Enter the Temperature"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              />

              <Typography variant="body2" color="textSecondary">
                Select Conversion
              </Typography>
              <Select
                fullWidth
                required
                value={conversion}
                onChange={(e) => setConversion(e.target.value)}
              >
                <MenuItem value="CtoF"> Celsius → Fahrenheit</MenuItem>
                <MenuItem value="FtoC"> Fahrenheit → Celsius</MenuItem>
              </Select>

              <Button variant="contained" color="success" onClick={handleConvert}>
                Convert Temperature
              </Button>

              <Box className="border border-gray-500 text-2xl p-4 rounded-2xl text-green-800 items-center justify-center">
                <Typography variant="h6" align="center" color="textSecondary">
                  Result
                </Typography>
                <Typography variant="h5" align="center">
                  {result}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </>
    );
}
export default TempConverter;;