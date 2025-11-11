import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Posts Layout',
  description: 'Posts Page'
};
type Props = { children: React.ReactNode };
const PostsLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      Posts Layout
      {children}
      <hr />
    </div>
  );
};

export default PostsLayout;
