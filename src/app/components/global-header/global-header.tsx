import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';

export default function GlobalHeader() {
  return (
    <div className='global-header h-12 bg-white'>
      <div className='container h-full px-10 max-w-7xl mx-auto'>
        <div className='h-full flex justify-between items-center'>
          <div className='brand-switcher mr-5'>
            <button className='text-sm font-thin text-dark-grayish-cyan'>
              <span className='pr-3'>Our Brands</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#697172' }}
                size='xs'
              />
            </button>
          </div>
          <div className='promo-carousel'></div>
          <div className='locale-selector'>
            <a className='py-[15px]'>
              <FontAwesomeIcon
                icon={faEarthAmericas}
                style={{ color: '#697172' }}
              />
              <span className='pl-3 text-sm text-dark-grayish-cyan'>
                Canada (EN)
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
