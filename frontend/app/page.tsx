import { Container, Title, TopBar } from "@/components/shared";
export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title
                    text="Все товары"
                    size="lg"
                    className="font-extrabold"
                ></Title>
            </Container>
            <TopBar />
        </>
    );
}
