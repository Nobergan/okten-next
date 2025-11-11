import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'User Layout',
  description: 'User Page'
};
type Props = { children: React.ReactNode };
const UserLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      User Layout
      {children}
      <hr />
    </div>
  );
};

export default UserLayout;
