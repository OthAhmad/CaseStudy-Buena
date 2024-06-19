import React, { FC } from 'react';


interface SummaryProps {
  formData: FormData;
}
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

const Summary: FC<SummaryProps> = ({formData}) => (
  <div>
    Summary Component
  </div>
);

export default Summary;
