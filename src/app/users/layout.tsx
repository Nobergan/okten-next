import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Users Layout',
  description: 'Users Page'
};
type Props = { children: React.ReactNode };
const UsersLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      Users Layout
      {children}
      <hr />
    </div>
  );
};

export default UsersLayout;
