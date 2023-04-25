import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa'
import ItemContact from '@components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/matheuseduardosousaazevedo/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/Matheus-Azevedo" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="matheuseduardo.jp@gmail.com" 
        />
        <ItemContact 
          IconFa={FaWhatsapp}
          LinkContact="(83) 9 8640-1614"
        />
      </Content>
    </Container>
  )
}