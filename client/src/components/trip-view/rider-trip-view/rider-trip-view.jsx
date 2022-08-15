import React from 'react';
import styled from 'styled-components';

import PlaceHolderBar from '../placeholder-bar';
import TitleOfTrip from '../title-of-trip';
import RiderCard from './card';
import Paper from '@mui/material/Paper';

function TripView() {
  return (
    <div>
      <PlaceHolderBar />
      <TripViewContainer>
        <TitleOfTrip />
        <Paper
          elevation={12}
          sx={{
            height: '300px',
            width: '100%',
          }}
        />
        <RiderCard />
      </TripViewContainer>
    </div>
  );
}

const TripViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TripView;
