import React from 'react';
import { ThemeProvider } from 'styled-components';

interface IChildren {
    children: React.ReactNode,
}

const background = 'white';

const values = {
  color: {
    background,
  },
};

export type ThemeType = typeof values;

export const Theme = (
  { children }: IChildren,
) => <ThemeProvider theme={values}>{ children }</ThemeProvider>;
