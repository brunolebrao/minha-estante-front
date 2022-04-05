import { Grid } from '@mui/material'
import { CardBook } from 'components/CardBook'
import { Layout } from 'components/Layout'
import React from 'react'

export default function HomeTemplate() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardBook />
        </Grid>
        <Grid item xs={6}>
          <CardBook />
        </Grid>
        <Grid item xs={6}>
          <CardBook />
        </Grid>
        <Grid item xs={6}>
          <CardBook />
        </Grid>
      </Grid>
    </Layout>
  )
}
