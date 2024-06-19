import React, { useState } from 'react';
import { BrowserRouter as Router, Routes , Route}  from 'react-router-dom'
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Salary from "./components/Salary/Salary";
import Summary from "./components/Summary/Summary";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo formData={formData} setFormData={setFormData} />} />
        <Route path="/salary" element={<Salary formData={formData} setFormData={setFormData} />} />
        <Route path="/summary" element={<Summary formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
