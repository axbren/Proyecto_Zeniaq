import Head from 'next/head'
import Container from '../components/Container'
import { Button, ButtonGroup } from "@chakra-ui/react";
import {Box, BoxGroup} from "@chakra-ui/react"
import {Image, ImageGroup} from "@chakra-ui/react"
import {Text, TextGroup} from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import Link from 'next/link'

const Services =() => (
        
        <Container w="100%" h="auto">
            <Head>
                <title>Contadores y Auditores Lopez Ocadiz</title>
            </Head>
            <center>
            <h1>Integramos servicios y herramientas contables.</h1>
            <p>Somos una empresa integrada por contadores públicos certificados, con una amplia experiencia profesional en materia de contaduría pública, asesoría fiscal y administrativa, </p>
            </center>
			<br></br>
			<br></br>
          <Grid w="80%" h="auto" templateColumns="repeat(4,1fr)" templateRows="repeat(auto-fit, )">
              <GridItem colStart={1} colEnd={1} rowStart={1} rowEnd={1}>
              <Image
            borderRadius="full"
  boxSize="90px"
  src="https://thumbs.dreamstime.com/b/icono-computacional-de-la-nube-con-un-s%C3%ADmbolo-del-documento-vector-146856637.jpg"
  alt="Segun Adebayo"
/>  <Text fontSize="xs" color="gray.500" >CONTABILIDAD ELECTRÓNICA</Text>
            <Link href="/Contabilidad_electronica">
                <a>Leer mas</a>
            </Link>
              </GridItem>
              <GridItem colStart={2} colEnd={2} rowStart={1} rowEnd={1}>
			  <Image
            borderRadius="full"
  boxSize="90px"
  src="https://images.vexels.com/media/users/3/129767/isolated/preview/547ed01097a7aaf9df985178b234a906-icono-de-lista-de-control-by-vexels.png"
  
  alt="Segun Adebayo"
/>
<Text fontSize="xs" color="gray.500">PRESENTACIÓN Y CUMPLIMIENTO DE OBLIGACIONES FISCALES
</Text>

<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
</GridItem>
       <GridItem colStart={3} colEnd={3} rowStart={1} rowEnd={1}>
			 
	   <Image
            borderRadius="full"
  boxSize="90px"
  src="https://image.flaticon.com/icons/svg/34/34733.svg"
  alt="Segun Adebayo"
/>
<Text fontSize="xs" color="gray.500">AUDITORIA DE ESTADOS FINANCIEROS</Text>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
              </GridItem>
			  <GridItem colStart={4} colEnd={4} rowStart={1} rowEnd={1}>
			 
			  <Image
borderRadius="full"
boxSize="90px"
src="https://image.flaticon.com/icons/png/512/64/64302.png"
alt="Segun Adebayo"/> <p></p>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
<Text fontSize="xs" color="gray.500">ASESORÍA ADMINISTRATIVA Y CONTROL INTERNO</Text>
					</GridItem>

					<GridItem colStart={1} colEnd={1} rowStart={2} rowEnd={2}>
					<Image
borderRadius="full"
boxSize="90px"
src="https://static.vecteezy.com/system/resources/previews/000/652/743/original/report-table-icon-vector.jpg"
alt="Segun Adebayo"/>
<Text fontSize="xs" color="gray.500">ADMINISTRACIÓN DE DOCUMENTOS DIGITALES</Text>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
</GridItem>
<GridItem colStart={2} colEnd={2} rowStart={2} rowEnd={2}>

<Image
borderRadius="full"
boxSize="90px"
src="https://images.vexels.com/media/users/3/131163/isolated/preview/751175c268ea1f69854ff67fb93ee1a2-el-juez-icono-del-c-rculo-de-martillo-by-vexels.png"
alt="Segun Adebayo"/>
<Text fontSize="xs" color="gray.500">ORIENTACIÓN LEGAL Y FINANCIERA</Text>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
            					
</GridItem>
<GridItem colStart={3} colEnd={3} rowStart={2} rowEnd={2}>
<Image
borderRadius="full"
boxSize="90px"
src="https://th.bing.com/th/id/OIP.loHqV6lefcI_wbLt9IniewHaHa?pid=ImgDet&rs=1"
alt="Segun Adebayo"/>
<Text fontSize="xs" color="gray.500">PLANEACIÓN CONTABLE Y FISCAL</Text>	
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
            				
</GridItem>
<GridItem colStart={4} colEnd={4} rowStart={2} rowEnd={2}>
<Image
borderRadius="full"
boxSize="90px"
src="https://th.bing.com/th/id/OIP.VaAarVYZywKOd4_68sGXdQHaHa?pid=ImgDet&rs=1"
alt="Segun Adebayo"/>
<Text fontSize="xs" color="gray.500">DEVOLUCIONES Y COMPENSACIONES</Text>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
            				
</GridItem>
<GridItem colStart={1} colEnd={1} rowStart={3} rowEnd={3}>
<Image
borderRadius="full"
boxSize="90px"
src="https://i0.pngocean.com/files/695/297/280/bar-chart-computer-icons-statistics-graph-of-a-function-ascending-line.jpg"
alt="Segun Adebayo"/>
<Text fontSize="xs" color="gray.500">PROYECTOS DE INVERSIÓN</Text>
<Link href="/Presentacion_y_cumplimiento_de_obligaciones_fiscales">
                <a>Leer mas</a>
            </Link>
            
            				
</GridItem>

          </Grid>     


<br></br>
<br></br>
<br></br>
<Image
borderRadius="full"
boxSize="150px"
src="https://i0.pngocean.com/files/695/297/280/bar-chart-computer-icons-statistics-graph-of-a-function-ascending-line.jpg"
alt="Segun Adebayo"/>

 </Container>
)
export default Services;

