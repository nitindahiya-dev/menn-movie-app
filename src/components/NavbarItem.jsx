"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title, param}) => {
    const searchParam = useSearchParams();
    const genre = searchParam.get('genre');
  return (
    <div className={`hover:text-amber-500 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ' '}`}>
        <Link className='' href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem