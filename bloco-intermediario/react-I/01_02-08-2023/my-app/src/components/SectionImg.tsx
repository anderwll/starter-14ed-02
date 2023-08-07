import SectionWrapper from "./SectionWrapper";

interface SectionImgProps {
  title: string;
  height: string;
}

function SectionImg(props: SectionImgProps) {
  return (
    <SectionWrapper height={props.height}>
      <h1>{props.title}</h1>
    </SectionWrapper>
  );
}

export default SectionImg;
