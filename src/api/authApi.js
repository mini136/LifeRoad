import axios from 'axios';

const API_URL = 'http://46.13.167.200:30001/auth'; // nebo tvá produkční URL

// Funkce pro registraci
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data; // Pokud úspěch, vrací data
  } catch (error) {
    throw error; // Pokud chyba, hodí chybu dál
  }
};

// Funkce pro přihlášení
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
