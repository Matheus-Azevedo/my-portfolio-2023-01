import { FaArrowRight } from 'react-icons/fa';
import { Container, Content, Infos, Name, 
         Function, Intro, LinkProjects, Logo, Img } from '@styles/indexStyle';
import Link from 'next/link';
import Photo from '@images/logo.png';
import { intro1, intro2, intro3 } from '@/utils/introduction';

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Primeiramente seja bem vindo!</Name>
        <Name>Matheus Eduardo</Name>
        <Function>FullStack Developer</Function>
        <Intro>{intro1}</Intro>
        <Intro>{intro2}</Intro>
        <Intro>{intro3}</Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src={Photo} alt="logo" />
      </Logo>
     </Content>
   </Container>
  );
}
