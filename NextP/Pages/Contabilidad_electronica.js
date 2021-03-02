import { AspectRatio, AspectRatioGroup } from "@chakra-ui/react"
import Container from '../components/Container'
import Head from 'next/head'
const Contabilidad_electronica =() => (
        
    <Container>
         <Head>
                <title>Contadores y Auditores Lopez Ocadiz</title>
            </Head>
            <center>
            <h1>Integramos servicios y herramientas contables.</h1>
            <p>Somos una empresa integrada por contadores públicos certificados, con una amplia experiencia profesional en materia de contaduría pública, asesoría fiscal y administrativa, </p>
            </center>
            <AspectRatio maxW="400px" ratio={5 / 6}>
  <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
</AspectRatio>
</Container>
)


export default Contabilidad_electronica;