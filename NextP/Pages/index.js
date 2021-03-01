import Head from "next/head";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

import { Button, ButtonGroup } from "@chakra-ui/react";

const Index = (props) => {
    console.log(props);
    return (
        <Container>
            <Head>
                <title>Next.js - Home</title>
            </Head>
            <h1>Next</h1>
            <Button colorScheme="blue" variant="outline">
                Button
            </Button>
            <Users users={props.users} />
        </Container>
    );
};
Index.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users");
    const resJSON = await res.json();
    return { users: resJSON.data };
};

export default Index;