import Loading from '../components/Loading';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../utils/LocalStorageUtil';

type userType = {
  firstName: string,
  lastName: string,
  email: string,

}


type authType = {
  user: userType,
  login: ({ user, token }: loginDataType) => void,
  logout: () => void,
  loading: boolean
}

type loginDataType = {
  user: userType,
  token: string
}

const AuthContext = createContext<authType >({
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
  login: () => { },
  logout: () => { },
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<userType >({
    firstName: '',
    lastName: '',
    email: '',
  });


  const [loading, setLoading] = useState(true);
  // Load user data from localStorage on component mount
  useEffect(() => {
  if(loading) {
      getUser()
  }
  }, [loading]);

  const setUserData = (data: userType) => {
    setUser(data);
  }


//   function isNotEmptyObject(obj: unknown) {
//   return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length > 0;
// }

  const getUser = async () => {

    // const storedUser: userType = await getLocalStorage('iUser_');
    const storedUser = getLocalStorage<userType>('iUser_');
    console.log(storedUser, 'storedUser')

  console.log((storedUser?.firstName), 'isNotEmptyObject(storedUser)')
    if (storedUser) {
const parsedUser = JSON.parse(storedUser as unknown as string)
    /*   const parsedUser: userType = {
        firstName: storedUser?.firstName ? storedUser.firstName : '',
        lastName: storedUser?.lastName ? storedUser.lastName : '',
        email: storedUser?.email ? storedUser.email : '',
      } */

      setUserData(parsedUser)
      setLoading(false);
    }

    // console.log('am heres ')
    setLoading(false);
    // console.log('end oading ')

  }

  const login = (userData : loginDataType) => {
    // Make your API call and set the user state

    setUserData(userData.user)
    // Save user data to localStorage
    setLocalStorage('iUser_', JSON.stringify(userData.user));
    setLocalStorage('iToken_', JSON.stringify(userData.token));
  };

  const logout = () => {
    // Clear user data from state and localStorage
    setUser({
      firstName: '',
      lastName: '',
      email: '',
    });
    clearLocalStorage();
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  if (loading) {
    return <Loading />
  }

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
