import { cn } from "@/lib/utils";
import React from "react";
import { Container, Categories, SortPopup } from "./index";

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10",
                className
            )}
        >
            <Container>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};
