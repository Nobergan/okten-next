import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Comment Layout',
  description: 'Comment Page'
};
type Props = { children: React.ReactNode };
const CommentLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      Comment Layout
      {children}
      <hr />
    </div>
  );
};

export default CommentLayout;
