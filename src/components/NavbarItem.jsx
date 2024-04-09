"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
  // Check if searchParams is null before accessing its properties
  const searchParams = useSearchParams();
  const genre = searchParams ? searchParams.get('genre') : null;

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

// Wrap NavbarItem with Suspense in your page component
const NavbarItemWithSuspense = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <NavbarItem {...props} />
  </Suspense>
);

export default NavbarItemWithSuspense;
