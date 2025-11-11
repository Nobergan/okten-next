import { FC } from 'react';

type Props = { params: { id: string } };

const CommentPage: FC<Props> = async ({ params }: Props) => {
  const { id } = await params;

  return <div>Comment Page {id}</div>;
};

export default CommentPage;
