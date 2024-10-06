import {
    Container,
    Filters,
    Title,
    TopBar,
    ProductCard,
} from '@/components/shared';
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
                            {/* <ProductCard
                                id={0}
                                name={'bulb'}
                                price={49}
                                imageUrl={
                                    "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
                                }
                            /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
