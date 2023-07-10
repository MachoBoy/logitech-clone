import Image from 'next/image';

export default function ItemCard() {
  return (
    <div className='relative w-full h-full overflow-hidden p-5 place-items-center'>
      <Image
        src='/products/desktop_grey-mice-and-keyboards.webp'
        fill
        style={{ objectFit: 'cover' }}
        alt='product'
      />
      <div className='w-full item-name uppercase absolute bottom-12 mx-auto text-center font-semibold'>
        mice & keyboards
      </div>
    </div>
  );
}
