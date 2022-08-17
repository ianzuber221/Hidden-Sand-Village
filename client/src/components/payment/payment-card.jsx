import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PaymentCard({ tripInfo = {} }) {
  return (
      <Card sx={{ minWidth: 350, margin: '25px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {tripInfo.date}
          </Typography>
          <Typography variant="h5" component="div">
            {tripInfo.endPoint}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {tripInfo.startPoint}
          </Typography>
          <Typography variant="h4">
            Amount Due: ${tripInfo.riderCost}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  );
}
