import React, { useEffect, createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const CompanyContext = createContext();

export const useCompanyContext = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [loggedInCompany, setLoggedInCompany] = useState(null);

  useEffect(() => {
    const savedCompany = Cookies.get('loggedInCompany');
    if (savedCompany) {
      setLoggedInCompany(JSON.parse(savedCompany));
    }
  }, []);

  const login = (companyData) => {
    Cookies.set('loggedInCompany', JSON.stringify(companyData));
    setLoggedInCompany(companyData);
  };

  const logout = () => {
    Cookies.remove('loggedInCompany');
    setLoggedInCompany(null);
  };

  return (
    <CompanyContext.Provider value={{ loggedInCompany, login, logout }}>
      {children}
    </CompanyContext.Provider>
  );
};
