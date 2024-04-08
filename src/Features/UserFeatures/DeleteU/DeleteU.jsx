const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/api/users/${userId}`);
      if (!response) {
        throw new Error('No se pudo eliminar el usuario');
      }
      // Actualiza la lista de usuarios después de eliminar el usuario
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };
  export default {deleteUser}