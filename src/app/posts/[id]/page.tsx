import { FC } from 'react';

type Props = { params: { id: string } };

const PostPage: FC<Props> = async ({ params }: Props) => {
  const { id } = await params;

  return <div>Post Page {id}</div>;
};

export default PostPage;
