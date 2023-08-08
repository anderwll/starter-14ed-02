import SectionWrapper from "./SectionWrapper";

interface ContentImgProps {
  title: string;
  height: string;
}

function ContentImg(props: ContentImgProps) {
  return (
    <SectionWrapper height={props.height}>
      <h1>{props.title}</h1>
    </SectionWrapper>
  );
}

export default ContentImg;
