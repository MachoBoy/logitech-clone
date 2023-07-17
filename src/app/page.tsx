import MainBanner from './components/main-banner/main-banner';
import MediaCard from './components/media-card/media-card';
import SlickSlider from './components/slick-slider/slick-slider';
import mediaCardData from './data/media-card-data';
import ItemCard from './components/item-card/item-card';
import SliderSlide from './components/slider-slide/slider-slide';
import { itemCardFirstPage } from './data/item-card-data';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <div className='flex justify-center mt-20'>
        <div className='slick-container w-full max-w-[1227px]'>
          <SlickSlider>
            {mediaCardData.map(({ src, title, body, links }, index) => {
              return (
                <MediaCard
                  key={index}
                  src={src}
                  title={title}
                  body={body}
                  links={links}
                />
              );
            })}
          </SlickSlider>

          <SliderSlide>
            <div className='container grid grid-rows-3 grid-cols-3 h-full'>
              {itemCardFirstPage.map(({ src, title, grid }, index) => {
                return (
                  <ItemCard key={index} src={src} title={title} grid={grid} />
                );
              })}
            </div>
          </SliderSlide>
        </div>
      </div>
    </main>
  );
}
