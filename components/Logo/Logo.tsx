import { NextPage } from 'next'

import s from "./style.module.css"

interface Props { }

export const Logo: NextPage<Props> = ({ }) => {
  return <div className={s.Logo}>
    Vkatun
  </div>
}

