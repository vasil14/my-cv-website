import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import Typewriter from "../Typewriter";
import {
  ProfileImage,
  PrifileContainer,
  ProfileWrapper,
  ProfileName,
  SocialLinksWrapper,
  SocialLink,
  LinksWrapper,
  Link,
} from "./styles";

const roles = ["Web Developer", "Graphic Designer", "Frelancer"];

const Profile = () => {
  return (
    <ProfileWrapper>
      <PrifileContainer>
        <ProfileImage />
        <ProfileName>Vasil Vangjeli</ProfileName>
        <Typewriter texts={roles} />
        <SocialLinksWrapper>
          <SocialLink
            href="https://github.com/vasil14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={25} weight="fill" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/vasil-vangjeli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={25} weight="fill" />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/vasil_vangjeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon size={25} weight="fill" />
          </SocialLink>
          <SocialLink
            href="https://web.facebook.com/vasil.vangjeli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogoIcon size={25} weight="fill" />
          </SocialLink>
        </SocialLinksWrapper>
        <LinksWrapper>
          <Link href="/pdf/CV-Vasil_Vangjeli.pdf" $showRightBorder download>
            Download CV
          </Link>
          <Link>Contact Me</Link>
        </LinksWrapper>
      </PrifileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
