// import React, { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {

//   useEffect(() => {
//     const userLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) ?? [] : [];
//     const [stateUser, setStateUser] = useState(userLS);
//   }, []);

//   return (
//     <UserContext.Provider value={{ stateUser, setStateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
