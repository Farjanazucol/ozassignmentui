// ContextProvider.js
import React, { createContext, useContext, useState } from 'react';
import ThankyouModal from '../modals/thankyou';
// import Callback from '../modals/callback';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [openThankyouModal, setOpenThankyouModal] = useState(false);

  let sharedState = {

    openThankyouModal: openThankyouModal,
    setOpenThankyouModal: setOpenThankyouModal
  }

  return (
    <>
    <AppContext.Provider  value={sharedState}>
      {children}
      {openThankyouModal && (
  <ThankyouModal />
)}
      {/* <Callback/> */}
    </AppContext.Provider>
    </>
  
  );
};
