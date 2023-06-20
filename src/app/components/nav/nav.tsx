import NavItem from '../nav-item/nav-item';

const navItems = [
  { title: 'Shop', link: '/shop' },
  { title: 'Learn', link: 'learn' },
  { title: 'Business', link: 'business' },
  { title: 'Support', link: 'support' },
];

export default function Nav() {
  return (
    <div className='w-full max-w-7xl h-[90px] px-10 mx-auto relative bg-slate-600'>
      <div className='nav-logo'></div>
      <div className='nav-items flex items-center justify-center grow h-full'>
        <ul className='h-full list-none grow flex justify-center items-center m-0 p-0'>
          {navItems.map(({ title, link }, index) => {
            return <NavItem key={index} title={title} link={link} />;
          })}
        </ul>
      </div>
      <div className='nav-utility'>
        <button className='search-trigger'></button>
        <a className='account-trigger'></a>
        <a className='shopping-cart'></a>
      </div>
    </div>
  );
}
