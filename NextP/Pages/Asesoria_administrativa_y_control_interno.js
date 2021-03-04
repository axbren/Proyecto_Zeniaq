import { AspectRatio, AspectRatioGroup } from "@chakra-ui/react"
import Container from '../components/Container'
import Head from 'next/head'
import {Image, ImageGroup} from "@chakra-ui/react"
const Asesoria_administrativa_y_control_interno =() => (
        
    <Container>
         <Head>
                <title>Contadores y Auditores Lopez Ocadiz</title>
            </Head>
            <center>
			<h1>Estas en Asesoria_administrativa_y_control_interno.</h1>
            <h1>Integramos servicios y herramientas contables.</h1>
            <p>Somos una empresa integrada por contadores públicos certificados, con una amplia experiencia profesional en materia de contaduría pública, asesoría fiscal y administrativa, </p>
            </center>
            <AspectRatio maxW="400px" ratio={5 / 3}>
  <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
</AspectRatio>
</Container>
)


export default Asesoria_administrativa_y_control_interno;
