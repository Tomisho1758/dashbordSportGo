import axios from "axios";
import { useState, useEffect } from "react";

export const useCategories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products/api/categories");
        setCategory(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategory([]);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { category, loading };
};