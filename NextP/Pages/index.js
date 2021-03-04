import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";
import {Image, ImageGroup} from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"

const Index = (props) => {
    console.log(props);
    return (
        <Container>
            <Head>
                <title>Contadores y Auditores Lopez Ocadiz</title>
            </Head>
            <center>
            <h1>EXPERTOS EN MATERIA CONTABLE Y FISCAL</h1>
            </center>
            <Users users={props.users} />
            <br></br>
            <br></br>
            <br></br>
            
			<center>
<Grid w="80%" h="auto" templateColumns="repeat(4,1fr)" templateRows="repeat(auto-fit, )">
	
<GridItem colStart={1} colEnd={1} rowStart={1} rowEnd={1}>
<Image
    boxSize="300px"
    objectFit="cover"
    src="https://www.lopezocadizcontadores.com/wp-content/uploads/2018/10/cropped-achievement-agreement-arms-1068523-1.jpg"
    alt="Dan Abramov"
  />
  
</GridItem>
<GridItem colStart={3} colEnd={3} rowStart={1} rowEnd={1} >
<p>Nuestra Misión
Comprometidos para que los empresarios cuenten con la información más oportuna y actual respecto de sus obligaciones fiscales, nos interesamos en procesar su información financiera de forma ágil y con las más estrictas normas de calidad para mejorar la administración, para la toma de decisiones seguras y confiables de sus negocios.

</p>
</GridItem>
<GridItem colStart={1} colEnd={1} rowStart={2} rowEnd={2} >
<p>Visión
Trabajar a la vanguardia de las reformas y avances tecnológicos, con personal altamente calificado y comprometido con la profesionalización, eficiencia y mejora continua se generará el reconocimiento por la honestidad, responsabilidad y excelente atención a pequeños y medianos empresarios (Pymes) en la orientación, desarrollo y fortalecimiento administrativo y financiero.</p>
</GridItem>
<GridItem colStart={3} colEnd={3} rowStart={2} rowEnd={2} >
<Image
    boxSize="300px"
    objectFit="cover"
    src="https://www.lopezocadizcontadores.com/wp-content/uploads/2018/10/cropped-mission.jpg"
    alt="Dan Abramov"
  />
</GridItem>
</Grid>
  </center>
        </Container>
    );
};


export default Index;
