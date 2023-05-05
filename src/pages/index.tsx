import { FaArrowRight } from 'react-icons/fa';
import { Container, Content, Infos, Name, 
         Function, Intro, LinkProjects, Logo, Img } from '@styles/indexStyle';
import Link from 'next/link';
import { intro1, intro2, intro3 } from '@/utils/introduction';

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Matheus Eduardo</Name>
        <Function>Backend Developer</Function>
        <Intro>Primeiramente, seja bem vindo!</Intro>
        <Intro>{intro1}</Intro>
        <Intro>{intro2}</Intro>
        <Intro>{intro3}</Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src='/images/logo.png' alt="logo" />
      </Logo>
     </Content>
   </Container>
  );
}
