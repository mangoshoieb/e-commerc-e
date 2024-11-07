'use client'
import React from 'react'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="./logo-black.svg" alt="logo" height={50} width={170} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
