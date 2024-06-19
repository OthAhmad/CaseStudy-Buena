import React, { FC } from 'react';


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

const Salary: FC<SalaryProps> = ({formData, setFormData}) => (
  <div>
    Salary Component
  </div>
);

export default Salary;
