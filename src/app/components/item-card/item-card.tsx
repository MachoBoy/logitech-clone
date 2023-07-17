import Image from 'next/image';

interface ItemCard {
  src: string;
  title: string;
  grid: string;
}

export default function ItemCard({ src, title, grid }: ItemCard) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden place-items-center ${grid}`}
    >
      <Image
        src={src}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        alt='product'
      />
      <div className='w-full item-name uppercase absolute bottom-12 mx-auto text-center font-semibold'>
        {title}
      </div>
    </div>
  );
}
