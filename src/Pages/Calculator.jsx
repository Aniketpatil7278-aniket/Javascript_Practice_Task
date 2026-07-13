import { Alert, Box, Button, Card, CardContent, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] =useState("");
    const [num2, setNum2] =useState("");
    const [op, setOp]=useState("");
    const [emsg, setEmsg] =useState("");
    const [result, setresult] = useState("");


    const cal=()=>{
        if(num1 === "" || num2 === ""){
            setEmsg("enter the both numbers");
            return;
        }

        const first = Number(num1);
        const second = Number(num2); 


        let ans;

        switch(op) {
            case "+": ans=first + second;
                        break;
            case "-": ans = first - second;
                        break;
            case "*" : ans= first * second;
                        break;
            case "/" : 
                    if(num2 === 0){
                        setEmsg("Cannot divide by zero");
                        return;
                    }
                ans= first / second;
                break;
            default:
                setEmsg("Please select an operation");
                return;
        }
        setEmsg("");

        setresult(ans);

    };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl border-2 border-black">
        <CardContent className="flex flex-col gap-4 p-6">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "orange", fontWeight: "bold", mb: 2 }}
          >
            Calculator
          </Typography>
          <TextField
            fullWidth
            required
            label="Enter the First Number"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Enter the Second Number"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <Typography variant="body2" color="textSecondary">
            Select the Operation
          </Typography>
          <Select
            fullWidth
            required
            defaultValue="+"
            displayEmpty
            value={op}
            onChange={(e) => setOp(e.target.value)}
          >
            <MenuItem value="+">Addition (+)</MenuItem>
            <MenuItem value="-">Subtraction (-)</MenuItem>
            <MenuItem value="*">Multiplication (*)</MenuItem>
            <MenuItem value="/">Division (/)</MenuItem>{" "}
          </Select>

          {emsg && (
            <Alert variant="filled" severity="error">
              {emsg}
            </Alert>
          )}

          <Button variant="contained" color="success" fullWidth onClick={cal}>
            Show Result
          </Button>
          <Box className="text-2xl text-green-500 items-center justify-center border border-gray-400 p-4">
            <Typography variant="h6" color="textSecondary" align="center">
              Result
            </Typography>
            <Typography variant="h5" align="center">
              {result}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
export default Calculator;
