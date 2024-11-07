'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import { Button } from '../../Button'
import Cart from '../../../(pages)/cart/page'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="default" className={classes.pages}/>
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {user && (
        <Button
          el="link"
          href="/logout"
          label="Logout"
          appearance="primary"
          onClick={() => (window.location.href = '/logout')}
        />
      )}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
    </nav>
  )
}
