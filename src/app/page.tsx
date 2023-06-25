import MainBanner from './components/main-banner/main-banner';
import MediaCard from './components/media-card/media-card';
import SlickSlider from './components/slick-slider/slick-slider';
import mediaCardData from './data/media-card-data';

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
        </div>
      </div>
    </main>
  );
}
