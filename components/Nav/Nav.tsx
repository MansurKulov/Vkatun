import { NextPage } from 'next'
import Link from 'next/link';

import s from "./style.module.css"

interface MyComponentProps {
    props: { name: string; link: string }[];
}

export const Nav: NextPage<MyComponentProps> = ({ props }) => {
    return (
        <nav className={s.nav}>
            <ul>
                {props.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className={s.dev}>Меню</div>
        </nav>
    );
};