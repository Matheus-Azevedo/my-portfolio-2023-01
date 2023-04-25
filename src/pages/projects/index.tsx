import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, 
    TitleProject, Url, CreatedAt } from '../../styles/styleProjects';
import { toast } from 'react-toastify';
import { iProject } from '../../utils/typesProjects';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); 

    async function getGitHubAPI() {
      try {
        const response = await fetch('https://api.github.com/users/Matheus-Azevedo/repos');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setItemsApi(data);
      } catch (error) {
        toast.error('Erro ao buscar dados da API');
      }
    }

    getGitHubAPI();

    return () => abortController.abort();  
  }, []);

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map((item: iProject) => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <CreatedAt>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </CreatedAt>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  );
}