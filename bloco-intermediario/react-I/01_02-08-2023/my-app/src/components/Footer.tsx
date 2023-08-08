import SectionFooter from "./SectionFooter";
import DivFooter from "./DivFooter";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <SectionFooter>
      <DivFooter flexDirection="column">
        <DivFooter flexDirection="row">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Politic</Link>
        </DivFooter>
        <span>@Copyright 2023 - Growdev 14ª edition - 02</span>
      </DivFooter>
      <DivFooter flexDirection="row">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
      </DivFooter>
    </SectionFooter>
  );
}

export default Footer;
