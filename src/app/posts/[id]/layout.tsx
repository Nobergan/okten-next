import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Post Layout',
  description: 'Post Page'
};
type Props = { children: React.ReactNode };
const PostLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      Post Layout
      {children}
      <hr />
    </div>
  );
};

export default PostLayout;
