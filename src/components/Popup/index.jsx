import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ikatik from '../../static/images/ikatik.png';
import classes from './index.module.scss';

const Popup = ({ show, nameModal, handleClose, handleChangeModal }) => {
  const navigate = useNavigate();
  
  const modalRegister = () => {
    return (
      <>
        <div className={classes.overlayX} onClick={handleClose}></div>
        <div className={classes.popupRegister}>
          <img src={ikatik} alt="Ikatik" />
          <div onClick={handleClose} className={classes.btnSubmit}>Lanjutkan</div>
        </div>
      </>
    );
  };

  return show && modalRegister();
};

export default Popup;