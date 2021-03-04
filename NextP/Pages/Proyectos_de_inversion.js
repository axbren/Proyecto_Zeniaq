import React from 'react'
import { AspectRatio, AspectRatioGroup } from "@chakra-ui/react"
import Container from '../components/Container'
import Head from 'next/head'
import {Image, ImageGroup} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
const Proyectos_de_inversion =() => (
        
  <Container>
       <Head>
              <title>Contadores y Auditores Lopez Ocadiz</title>
          </Head>
          <center>
			  <h1>estas en Proyectos de inversion</h1>
          <h1>Integramos servicios y herramientas contables.</h1>
          <p>Somos una empresa integrada por contadores públicos certificados, con una amplia experiencia profesional en materia de contaduría pública, asesoría fiscal y administrativa, </p>
          </center>
          <Box
  bgImage="url('/images/gaara.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
/>
</Container>

)


export default Proyectos_de_inversion;
