import Link from 'next/link';

export const Menu = () => {
  const baseClasses =
    'rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition';
  const hoverClasses = 'hover:border-indigo-400 hover:bg-indigo-100';

  return (
    <nav className='border-b-[1px] p-6'>
      <ul className='flex flex-wrap justify-center gap-4'>
        <li>
          <Link href='/' className={`${baseClasses} ${hoverClasses}`}>
            Home
          </Link>
        </li>

        <li>
          <Link href='/users' className={`${baseClasses} ${hoverClasses}`}>
            Users
          </Link>
        </li>

        <li>
          <Link href='/posts' className={`${baseClasses} ${hoverClasses}`}>
            Posts
          </Link>
        </li>

        <li>
          <Link href='/comments' className={`${baseClasses} ${hoverClasses}`}>
            Comments
          </Link>
        </li>
      </ul>
    </nav>
  );
};
