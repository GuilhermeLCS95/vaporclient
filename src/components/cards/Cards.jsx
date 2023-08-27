import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GameCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://rare-gallery.com/thumbs/349774-4k-wallpaper.jpg"
        title="Yumeko"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Yumeko
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Eu amo Jabami Yumeko
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Adicionar à lista de desejos</Button>
      </CardActions>
    </Card>
  );
}