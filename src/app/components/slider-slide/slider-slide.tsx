interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function SliderSlide({ children }: Props) {
  return <div>{children}</div>;
}
