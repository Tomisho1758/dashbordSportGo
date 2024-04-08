


// import axios from "axios";
// import { useState, useEffect } from "react";

// export const editUser = () => {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetch = async (id) => {
//       try {
//         const response = await axios.put(`http://localhost:3000/users/api/${id}`)
//         setUser(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error updating user:", error);
//         setUser([]);
//         setLoading(false);
//       }
//     };

//     fetch();
//   }, []);

//   return { user, loading };
// };