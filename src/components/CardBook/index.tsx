import * as React from 'react'
import { makeStyles, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import EditIcon from '@mui/icons-material/Edit'

export function CardBook() {
  return (
    <Card
      sx={{
        display: 'flex',
        padding: '1rem'
        // backgroundColor: (theme) => theme.palette.secondary.main
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/img/test.jpg"
        alt="Um livro de imagens"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            sx={{ color: (theme) => theme.palette.grey[400] }}
            component="div"
            variant="body2"
          >
            Nome do livro
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{ color: (theme) => theme.palette.secondary.main }}
          >
            O Homem mais rico da Babilônia
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{ color: (theme) => theme.palette.grey[400] }}
          >
            de
          </Typography>
          <Typography
            sx={{ color: (theme) => theme.palette.secondary.main }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            George s. Clason
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="abrir nova aba">
            <OpenInNewIcon color="primary" />
          </IconButton>
          <IconButton aria-label="editar">
            <EditIcon color="primary" />
          </IconButton>
          <IconButton aria-label="deletar">
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
