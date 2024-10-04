'use client'

import React from 'react'
import {
    FilterCheckbox,
    RangeSlider,
    Title,
    CheckboxFiltersGroup,
} from './index'
import { Input } from '../ui'
interface Props {
    className?: string
}
const defEx = [
    { text: 'Электрика и свет', value: '0' },
    { text: 'Источники питания', value: '1' },
    { text: 'Водоснабжение и водоотведение', value: '2' },
    { text: 'Отопление и климат', value: '3' },
    { text: 'Инструмент и оснастка', value: '4' },
    { text: 'Оборудование и техника для склада', value: '5' },
]
const ex = [
    { text: 'Электрика и свет', value: '0' },
    { text: 'Источники питания', value: '1' },
    { text: 'Водоснабжение и водоотведение', value: '2' },
    { text: 'Отопление и климат', value: '3' },
    { text: 'Инструмент и оснастка', value: '4' },
    { text: 'Оборудование и техника для склада', value: '5' },
    { text: 'Спецодежда и СИЗ', value: '6' },
    { text: 'Автоматизация и КИП', value: '7' },
    { text: 'Системы безопасности', value: '8' },
    { text: 'Телекоммуникационное оборудование и СКС', value: '9' },
    { text: 'Подшипники', value: '10' },
    { text: 'Крепеж', value: '11' },
    { text: 'Масла, смазки и технические жидкости', value: '12' },
    { text: 'Бытовая техника', value: '13' },
    { text: 'Программное обеспечение', value: '14' },
]

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            {/* Top Checkboxes */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Новинки" value="1" />
                <FilterCheckbox text="В наличии" value="2" />
                <FilterCheckbox text="Под заказ" value="3" />
            </div>

            {/* Prices filter */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={90000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        placeholder="90000"
                        min={20}
                        max={90000}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={90000}
                    step={100}
                    value={[0, 90000]}
                />
            </div>

            {/*  */}
            <CheckboxFiltersGroup
                title="Специализация"
                className="mt-5"
                limit={6}
                defaultItems={defEx}
                items={ex}
            />
        </div>
    )
}
