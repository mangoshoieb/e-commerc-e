'use client'
import Link from 'next/link'
import React from 'react'

import classes from './index.module.scss'
import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type categoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: categoryCardProps) => {
  const mediaUrl = category.media as Media
  const { setCategoryFilters } = useFilter()
  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${mediaUrl.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
