import React, { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormControl, Grid, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";


interface SalaryProps {
formData: FormData;
setFormData: (Data: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

const Salary: React.FC<SalaryProps> = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, salary: e.target.value });
    setError('')
  };

  const handleSubmit = () => {
    if (!formData.salary) {
      setError('Please select a salary range');
    } else {
      navigate('/summary');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Salary Indication</FormLabel>
          <RadioGroup name="salary" value={formData.salary} onChange={handleChange}>
            <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
            <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
            <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
            <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
            <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
          </RadioGroup>
          {error}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Button onClick={() => navigate('/')} variant="contained" fullWidth>
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Salary;
