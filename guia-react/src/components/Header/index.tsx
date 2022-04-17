import react from "react";
import { Container, HeaderImg, HeaderText } from "./styles";

interface HeaderProps {
  content: string;
  image: string;
}

export const Header: React.FC<HeaderProps> = ({ content, image }) => {
  return (
    <>
      <Container>
        <HeaderImg src={image} alt="imagem do header" />
        <HeaderText>{content}</HeaderText>
      </Container>
    </>
  );
};
