import type React from 'react';

export interface IContextProps {
  displayName?: string;
  children?: React.ReactNode | JSX.Element | JSX.Element[] | undefined | null;
}
