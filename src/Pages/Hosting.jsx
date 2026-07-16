import { Card, CardContent, Paper, Typography,Box, Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

const Hosting = () => {
  const handle = () => {
    // 1. Hoisting with var

    console.log("var value before declaration:", a);
    var a = 10;
    console.log("var value after declaration:", a);

    // Output:
    // undefined
    // 10

    // Hoisting with let

    try {
      console.log(b);
    } catch (error) {
      console.log(error.message);
    }

    let b = 20;

    console.log("let value:", b);

    // Output:
    // Cannot access 'b' before initialization
    // 20

    // ==========================================
    // Hoisting with const
    try {
      console.log(c);
    } catch (error) {
      console.log(error.message);
    }

    const c = 30;

    console.log("const value:", c);

    // Output:
    // Cannot access 'c' before initialization
    // 30

    // ==========================================
    // Function Declaration
    // Function declarations are completely hoisted.

    greet();
    console.log(greet);
    function greet() {
      console.log("Hello from Function Declaration");
    }

    // Output:
    // Hello from Function Declaration

    // ==========================================
    // Function Expression

    // Variable is hoisted as undefined.
    // Function is NOT initialized until assignment.

    try {
      sayHello();
    } catch (error) {
      console.log(error.message);
    }

    var sayHello = function () {
      console.log("Hello from Function Expression");
    };

    sayHello();

    // Output:
    // sayHello is not a function
    // Hello from Function Expression

    // ==========================================
    // Arrow Function
    // Arrow function behaves like function expression.

    try {
      add();
    } catch (error) {
      console.log(error.message);
    }

    const add = () => {
      console.log("Arrow Function Executed");
    };

    add();

    // Output:
    // Cannot access 'add' before initialization
    // Arrow Function Executed

    // ==========================================
    // Global Scope

    var company = "OpenAI";

    function showCompany() {
      console.log(company);
    }
    showCompany();
    console.log(company);

    // Output:
    // OpenAI
    //OpenAI

    // ==========================================
    //  Function Scope

    function employee() {
      var empName = "Aniket";

      console.log(empName);
    }
    employee();

    try {
      console.log(empName);
    } catch (error) {
      console.log(error.message);
    }

    // Output:
    // Aniket
    // empName is not defined

    // ==========================================
    //  Block Scope

    if (true) {
      let city = "Pune";

      const state = "Maharashtra";

      var country = "India";

      console.log(city);
      console.log(state);
      console.log(country);
    }

    console.log(country);

    try {
      console.log(city);
    } catch (error) {
      console.log(error.message);
    }

    try {
      console.log(state);
    } catch (error) {
      console.log(error.message);
    }

    // Output:
    // Pune
    // Maharashtra
    // India
    // India
    // city is not defined
    // state is not defined
  };
  return (
    <>
      <Navbar />
      <Box className="min-h-screen items-center justify-center bg-gray-100 flex">
          <Card className="w-full max-w-md shadow-xl border-2 border-black ">
          <CardContent className="flex flex-col gap-4 p-6">
            <Typography align="center" variant="h4">
              Hosting
            </Typography>
            <Button variant="contained" onClick={handle}>Click me </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default Hosting;
