import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";


import { Button, ButtonGroup } from "@chakra-ui/react";

const Index = (props) => {
    console.log(props);
    return (
        <Container>
            <Head>
                <title>Contadores y Auditores Lopez Ocadiz</title>
            </Head>
            <h1>Next</h1>
            <Button colorScheme="blue" variant="outline">
                Button
            </Button>
            <Users users={props.users} />
        </Container>
    );
};


export default Index;