import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface MediaCard {
  src: string;
  title: string;
  body: string;
  links: Links[];
}

interface Links {
  title: string;
  link: string;
}

export default function MediaCard({ src, title, body, links }: MediaCard) {
  return (
    <div className='media-card h-auto w-full xl:max-w-[389px]'>
      <div className='image-wrapper w-full h-full relative mb-5'>
        <Image
          className='w-full h-auto'
          src={src}
          width={0}
          height={0}
          sizes='100vw'
          alt='media-card'
        />
      </div>

      <div className='media-card-title font-brown uppercase text-xl font-semibold mb-[10px] hover:underline hover:cursor-pointer'>
        {title}
      </div>

      <div className='media-card-body'>
        <p className='font-brown font-thin mb-2'>{body}</p>
        <div className='media-card-links flex flex-col'>
          {links.map(({ title, link }, index) => {
            return (
              <a
                key={index}
                className='media-link mb-3 last:mb-0 group'
                href={link}
              >
                <span className='text-sm font-semibold uppercase mr-2 group-hover:underline'>
                  {title}
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: '#2f3132' }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
