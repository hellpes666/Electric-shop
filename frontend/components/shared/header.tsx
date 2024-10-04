import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container'
import Image from 'next/image'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                {/* left */}
                <div className="flex items-center gap-4">
                    <Image
                        src={'/logo.png'}
                        alt={'Logo'}
                        width={32}
                        height={32}
                    ></Image>
                    <div className="">
                        <h1 className="text-2xl uppercase font-black">
                            Electro
                        </h1>
                        <p className="text-sm text-gray-400 leading-3">
                            ярче уже некуда
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="flex items-center gap-1"
                    >
                        <User size={16} /> Войти
                    </Button>

                    <div className="">
                        {/* Отделяем группу */}
                        <Button className="group relative">
                            <b>??? ₽</b>

                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart
                                    size={16}
                                    className="relative"
                                    strokeWidth={2}
                                />
                                <b>3</b>
                            </div>
                            <ArrowRight
                                size={20}
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
