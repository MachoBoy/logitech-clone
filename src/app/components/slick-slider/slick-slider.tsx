'use client';
import Slider from 'react-slick';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SlickSlider = ({ children }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;
