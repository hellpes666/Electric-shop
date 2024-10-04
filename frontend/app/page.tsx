import { Container, Filters, Title, TopBar } from '@/components/shared'
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

            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    {/* Filters */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* List of products */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            Список товаров
                            {/* <ProductsGroupList title="Лампочки" items={[1,2,3,4,5]} />
                            <ProductsGroupList title="Лампочки" items={[1,2,3,4,5]} /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
