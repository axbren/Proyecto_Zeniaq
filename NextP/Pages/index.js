import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";
import {Image, ImageGroup} from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"



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
            <Image
    boxSize="300px"
    objectFit="cover"
    src="https://www.lopezocadizcontadores.com/wp-content/uploads/2018/10/cropped-achievement-agreement-arms-1068523-1.jpg"
    alt="Dan Abramov"
  />
    <Image
    align ="center"
    boxSize="300px"
    objectFit="cover"
    src="https://www.lopezocadizcontadores.com/wp-content/uploads/2018/10/cropped-mission.jpg"
    alt="Dan Abramov"
  />
        </Container>
    );
};


export default Index;