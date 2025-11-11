import { FC } from 'react';

type Props = { params: { id: string } };

const UserPage: FC<Props> = async ({ params }: Props) => {
  const { id } = await params;

  return <div>User Page {id}</div>;
};

export default UserPage;
