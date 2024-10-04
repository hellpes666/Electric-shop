import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
}

const cats: string[] = [
    'Лампочки',
    'Батарейки',
    'Провода',
    'Розетки',
    'Удлинители',
    'Автоматы',
]

const activeIndex: number = 0

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'inline-flex gap-1 bg-gray-50 p-2 rounded-2xl mt-2',
                className
            )}
        >
            {cats.map((cat, index) => (
                <a
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index &&
                            'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                    key={index}
                >
                    <button>{cat}</button>
                </a>
            ))}
        </div>
    )
}
