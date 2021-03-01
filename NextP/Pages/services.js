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
  boxSize="100px"
  src="https://images.vexels.com/media/users/3/131163/isolated/preview/751175c268ea1f69854ff67fb93ee1a2-el-juez-icono-del-c-rculo-de-martillo-by-vexels.png"
  alt="Segun Adebayo"
/>
<Text fontSize="xs">CONTABILIDAD ELECTRÓNICA</Text>
            <Button colorScheme="blue" variant="outline">
                Button_1
            </Button>
            <tr></tr>
            <Button colorScheme="blue" variant="outline">
                Button_2
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_3
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_4
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_5
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_6
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_7
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_8
            </Button>
            <Button colorScheme="blue" variant="outline">
                Button_9
            </Button>

 </Container>
)
export default Services;