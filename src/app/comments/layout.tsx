import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Comments Layout',
  description: 'Comments Page'
};
type Props = { children: React.ReactNode };
const CommentsLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      Comments Layout
      {children}
      <hr />
    </div>
  );
};

export default CommentsLayout;
