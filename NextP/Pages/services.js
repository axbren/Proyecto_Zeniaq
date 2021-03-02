import Head from 'next/head'
import Container from '../components/Container'
import { Button, ButtonGroup } from "@chakra-ui/react";
import {Box, BoxGroup} from "@chakra-ui/react"
import {Image, ImageGroup} from "@chakra-ui/react"
import {Text, TextGroup} from "@chakra-ui/react"

const Services =() => (
        
        <Container>
            <Head>
                <title>Next.js - Services</title>
            </Head>
            <center>
            <h1>Integramos servicios y herramientas contables.</h1>
            <p>Somos una empresa integrada por contadores públicos certificados, con una amplia experiencia profesional en materia de contaduría pública, asesoría fiscal y administrativa, </p>
            </center>
            <Image
            borderRadius="full"
  boxSize="50px"
  src="https://thumbs.dreamstime.com/b/icono-computacional-de-la-nube-con-un-s%C3%ADmbolo-del-documento-vector-146856637.jpg"
  alt="Segun Adebayo"
/>
<Text fontSize="xs" color="gray.500" >CONTABILIDAD ELECTRÓNICA</Text>
            <Button colorScheme="blue" size="xs">
                Button_1
            </Button>
            <tr></tr>
            <Image
            borderRadius="full"
  boxSize="50px"
  src="https://images.vexels.com/media/users/3/129767/isolated/preview/547ed01097a7aaf9df985178b234a906-icono-de-lista-de-control-by-vexels.png"
  
  alt="Segun Adebayo"
/>
<Text fontSize="xs" color="gray.500"></Text>
            <Button colorScheme="blue" size="xs">
                Button_2
            </Button>
<tr></tr>
<Image
            borderRadius="full"
  boxSize="50px"
  src="https://images.vexels.com/media/users/3/131163/isolated/preview/751175c268ea1f69854ff67fb93ee1a2-el-juez-icono-del-c-rculo-de-martillo-by-vexels.png"
  alt="Segun Adebayo"
/>
<Text fontSize="xs" color="gray.500"></Text>
            <Button colorScheme="blue" size="xs">
                Button_3
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_4
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_5
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_6
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_7
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_8
            </Button>
<tr></tr>
            <Button colorScheme="blue" size="xs">
                Button_9
            </Button>

 </Container>
)
export default Services;