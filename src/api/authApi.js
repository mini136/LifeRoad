import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://46.13.167.200:30001"; // nebo tvá produkční URL

// Funkce pro registraci
export const register = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name,
    });
    return response.data; // Pokud úspěch, vrací data
  } catch (error) {
    throw error; // Pokud chyba, hodí chybu dál
  }
};

// Funkce pro přihlášení
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const { token } = response.data; // Předpokládám, že token je součástí odpovědi
    // Uložení tokenu do AsyncStorage
    await AsyncStorage.setItem("authToken", token);
    return response.data; // Vrátí data z odpovědi
  } catch (error) {
    throw error; // Pokud chyba, hodí chybu dál
  }
};

// Funkce pro uložení "mood" uživatele
export const saveMood = async (mood, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/mood`, // API endpoint pro mood
      { mood }, // Tělo požadavku obsahuje pouze mood (email už je v tokenu)
      { headers: { Authorization: `Bearer ${token}` } } // Přidání tokenu do hlavičky
    );
    return response.data; // Vrátí data z odpovědi (např. potvrzení o uložení moodu)
  } catch (error) {
    console.error(
      "Error saving mood:",
      error.response ? error.response.data : error.message
    );
    throw error; // Pokud nastane chyba, hodí chybu zpět
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken"); // Získání uloženého tokenu
    return token; // Pokud token existuje, vrátí ho
  } catch (error) {
    console.error("Error retrieving token", error); // Pokud došlo k chybě při získávání tokenu
    return null;
  }
};

// Funkce pro získání moodu (příklad volání saveMood s tokenem)
export const saveUserMood = async (mood) => {
  try {
    const token = await getToken(); // Načteme token z AsyncStorage
    if (token) {
      const response = await saveMood(mood, token); // Zavoláme saveMood s tokenem
      console.log("Mood saved:", response); // Potvrzení, že mood byl uložen
    } else {
      console.log("No token found, user needs to log in.");
    }
  } catch (error) {
    console.error("Error saving mood:", error); // Zpracování chyby
  }
};

// Funkce pro získání všech písniček
export const getAllSongs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/songs`); // API endpoint pro získání všech písniček
    return response.data; // Vrátí seznam písniček
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Pokud dojde k chybě, hodí chybu zpět
  }
};

// Funkce pro získání písničky podle názvu
export const getSongByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/api/songs/${title}`); // API endpoint pro získání písničky podle názvu
    return response.data; // Vrátí data písničky
  } catch (error) {
    console.error("Error fetching song:", error);
    throw error; // Pokud dojde k chybě, hodí chybu zpět
  }
};

// Funkce pro získání písniček podle moodu
export const getSongsByMood = async (mood) => {
  try {
    const response = await axios.get(`${API_URL}/api/songs/mood`, {
      params: { mood }, // Parametr pro hledání podle moodu
    });
    return response.data; // Vrátí seznam písniček, které odpovídají moodu
  } catch (error) {
    console.error("Error fetching songs by mood:", error);
    throw error; // Pokud dojde k chybě, hodí chybu zpět
  }
};

// Funkce pro získání audio souboru písničky podle názvu
export const getSongFileByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/api/songs/${title}/file`, {
      responseType: "arraybuffer", // Požadujeme binární data pro soubor
    });
    return response.data; // Vrátí binární data souboru
  } catch (error) {
    console.error("Error fetching song file:", error);
    throw error; // Pokud dojde k chybě, hodí chybu zpět
  }
};

export const getAllFunFacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/funfacts`); // API endpoint pro získání všech písniček
    return response.data; // Vrátí seznam písniček
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Pokud dojde k chybě, hodí chybu zpět
  }
};

export const getRandomFunFact = async () => {
  try {
    const funFacts = await getAllFunFacts(); // Získání všech fun facts

    if (funFacts.length === 0) {
      throw new Error("Žádné fun facts nejsou dostupné.");
    }

    const randomIndex = Math.floor(Math.random() * funFacts.length); // Náhodný index
    return funFacts[randomIndex]; // Vrácení náhodného objektu
  } catch (error) {
    console.error("Chyba při získávání náhodného FunFact:", error);
    throw error; // Pokud nastane chyba, předej ji dál
  }
};
