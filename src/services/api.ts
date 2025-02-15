import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const uploadFiles = async (currentYear: File, previousYear?: File) => {
  const formData = new FormData();
  formData.append('currentYear', currentYear);
  if (previousYear) {
    formData.append('previousYear', previousYear);
  }

  const response = await axios.post(`${API_URL}/secret-santa/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};