interface SectionImgProps {
  title: string;
}

function SectionImg(props: SectionImgProps) {
  return (
    <div className="section-img">
      <h1>{props.title}</h1>
    </div>
  );
}

export default SectionImg;
