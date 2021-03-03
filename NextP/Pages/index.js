import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";




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
        </Container>
    );
};


export default Index;