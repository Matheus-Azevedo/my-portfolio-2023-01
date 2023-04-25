import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, CreatedAt } from './style';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/Matheus-Azevedo/repos')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setItemsApi(data);
      })
      .catch((e) => {
        console.error(e);
      });
    }

    getGitHubAPI();

    return () => abortController.abort();  
  }, []);

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map((item) => (
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