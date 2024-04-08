import Link from 'next/link'

const MenuItems = ({title, address, Icon}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon  className="text-2xl sm:hidden"/>
        <p className='uppercase hidden md:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItems