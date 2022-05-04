import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {Grid, Skeleton} from '../../../components'
import Card from './Card'

function Board({data}) {
    const { cases, todayDeaths, todayCases, recovered, deaths} = data
    const getValue = (value) => value ? value : 0

    return (
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card value={getValue(cases)} label="Total de casos" color="#4FA2FF"/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#C89AFE" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card value={getValue(todayCases)} label="Casos hoje" color="#FED054" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card value={getValue(deaths)} label="Total de mortos" color="#00C39A" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card value={getValue(recovered)} label="Total de recuperados" color="#FDC799" />
          </Grid>
        </Grid>
      )
    }
    
    export default memo(Board)