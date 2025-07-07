import Typewriter from "../Typewriter";
import {
  ProfileImage,
  PrifileContainer,
  ProfileWrapper,
  ProfileName,
} from "./styles";

const roles = ["Web Developer", "Graphic Designer", "Frelancer"];

const Profile = () => {
  return (
    <ProfileWrapper>
      <PrifileContainer>
        <ProfileImage />
        <ProfileName>Vasil Vangjeli</ProfileName>
        <Typewriter texts={roles} />
      </PrifileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
