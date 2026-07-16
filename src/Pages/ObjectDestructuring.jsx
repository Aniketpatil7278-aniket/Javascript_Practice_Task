import { Card, CardContent, Typography,Box, Grid, TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const ObjectDestructuring=()=>{
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    email: "",
    city: "",
    state: "",
    country: "",
    java: "",
    react: "",
    mysql: "",
  });
  const [data, setData] = useState(null);

  //collect the data
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  //submit funcation
  const handleSubmit = () => {
    const studentObject = {
      id: Number(student.id),
      name: student.name,
      age: Number(student.age),
      course: student.course,
      email: student.email,
      address: {
        city: student.city,
        state: student.state,
        country: student.country,
      },
      marks: {
        java: Number(student.java),
        react: Number(student.react),
        mysql: Number(student.mysql),
      },
    };
    setData(studentObject);
    console.log(studentObject);

    // Destructuring the properties into variables
    console.log("--------Destructuring-------------");
    // const {id , name, address} =studentObject;
    // console.log("id: ", id);
    // console.log("name: ", name);
    // console.log("address: ",address);

    console.log("-----rename the varibale----------");
    const { name: stdname, age: stdage } = studentObject;
    console.log("std name:" ,stdname);
    console.log("std age:",stdage);


     console.log("-----Providing Default Values----------");
     const {phone="7894152630"} =studentObject;
     console.log(phone);

     

     console.log("---- Nested Object Destructuring---------");
     const {address :{city ,state}}=studentObject;
     console.log(city);
     console.log(state);

    //  const {city, country} = studentObject;
    //  console.log(city);

    console.log("------destructuring inside function parameters------ ");
    const displaydata=({id, name, course})=>{
        console.log(id);
        console.log(name);
        console.log(course);
    }
    displaydata(studentObject);


    console.log("-------nested destructuring funcation------");
    const displaydata1 = ({ address: { city, state, country } }) => {
        console.log(city);
        console.log(state);
        console.log(country);
    };
    displaydata1(studentObject);


    console.log("--------------rest op -----------");
    const { id, name, ...remainingProperties } = studentObject;
    console.log(id);
    console.log(name);
    console.log(remainingProperties);


    console.log("-------update vlaue--------");
    const updatedStudent = {
      ...studentObject,
      name: "Rahul",
      course: "M.Tech",
    };

    console.log("updated values :",updatedStudent);

    console.log("-----original data ");
    console.log(studentObject.name);
    console.log(studentObject.course);


    console.log("-------Update Nested Marks--------");
    const updatedStudentmarks = {
      ...studentObject,
      marks: {
        ...studentObject.marks,
        react: 95,
      },
    };

    console.log(updatedStudentmarks);

  };
  return (
    <>
      <Navbar />
      <Box className="bg-gray-50  py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent>
            <Typography variant="h4" align="center" className="mb-6">
              Student Details
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label=" Student id"
                  name="id"
                  value={student.id}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  value={student.age}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course"
                  name="course"
                  value={student.course}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={student.city}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={student.state}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={student.country}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Java Marks"
                  name="java"
                  value={student.java}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="React Marks"
                  name="react"
                  value={student.react}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="MYSQL Marks"
                  name="mysql"
                  value={student.mysql}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="bg-gray-50  py-8">
            <Card className="max-w-4xl mx-auto mt-5 p-5 border rounded bg-white">
              <CardContent>
                <Typography variant="h4" align="center">
                  Data
                </Typography>
                <pre> {data && JSON.stringify(data, null, 2)}</pre>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="bg-gray-50  py-8"></Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ObjectDestructuring;