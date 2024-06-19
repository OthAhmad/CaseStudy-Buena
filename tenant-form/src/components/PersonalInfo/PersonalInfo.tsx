import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Grid } from "@mui/material";


interface PersonalInfoProps {
formData: FormData;
setFormData: (Data: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}


const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({ fullName: '', email: '', phoneNumber: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = { fullName: '', email: '', phoneNumber: '' };
    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Required';
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validate()) {
      navigate('/salary');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" fullWidth>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
