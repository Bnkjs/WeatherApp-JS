import { Notyf } from 'notyf';
import React from 'react';
import 'notyf/notyf.min.css';

export const NotyfEmpty = () => {
  const notyf = new Notyf();
  notyf.error({
    message: '⚠️ Il me faut une ville... ⚠️',
    position: {
      x: 'right',
      y: 'top',
    },
    duration: 3000,
    icon: false,
  });
};

export const NotyfWrong = () => {
  const notyf = new Notyf();
  notyf.error({
    message: "Cette ville n'existe pas.. Vérifies l'orthographe! ",
    background: 'orange',
    position: {
      x: 'right',
      y: 'top',
    },
    duration: 3000,
    icon: false,
  });
};

