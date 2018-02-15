import Section from "../components/Section";
import Title from "../components/Title";
import ClientLogo from "../components/ClientLogo";

import dailymotionLogo from "../assets/dailymotion-logo.svg";
import molotovLogo from "../assets/molotov-logo.jpg";
import ubeeqoLogo from "../assets/ubeeqo-logo.png";
import sliceLogo from "../assets/slice-logo.png";
import ffrLogo from "../assets/ffr-logo.png";

const sectionName = "work";

export default () => (
  <Section htmlID={sectionName}>
    <Title anchor={sectionName}>Work</Title>
    <div
      css={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -5px"
      }}
    >
      <ClientLogo
        url="https://competitions.ffr.fr"
        description="FFR"
        imgSrc={ffrLogo}
      />
      <ClientLogo
        url="https://www.dailymotion.com"
        description="Dailymotion"
        imgSrc={dailymotionLogo}
      />
      <ClientLogo
        url="https://www.molotov.tv"
        description="Molotov TV"
        imgSrc={molotovLogo}
      />
      <ClientLogo
        url="https://www.ubeeqo.com"
        description="Ubeeqo"
        imgSrc={ubeeqoLogo}
      />
      <ClientLogo
        url="https://www.slice.com/"
        description="Slice"
        imgSrc={sliceLogo}
      />
    </div>
  </Section>
);
