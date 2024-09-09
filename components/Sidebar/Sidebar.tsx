import { NextPage } from 'next'
import Link from 'next/link';

import s from "./style.module.css"

import { Logo } from '@/components';

interface MyComponentProps {
    props: { name: string; link: string }[];
}

export const Sidebar: NextPage<MyComponentProps> = ({ props }) => {
    return (
        <section className={s.Sidebar}>
            <div className={s.Sidebar_wrapper}>
                <Logo />
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};