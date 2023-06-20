interface NavItem {
  title: string;
  link: string;
}

export default function NavItem({ title, link }: NavItem) {
  return (
    <li className='flex h-full items-center'>
      <button className='text-white text-[15px] font-medium uppercase font-brown py-[9px] px-5 transition ease-linear hover:bg-white hover:text-black rounded-[20px]'>
        {title}
      </button>
    </li>
  );
}
