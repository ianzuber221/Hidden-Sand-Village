import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import RiderCard from '../trip-view/rider-trip-view/rider-card';

import CancelButton from './buttons/cancel-button';
import MessageButton from './buttons/message-button';
import ReviewButton from './buttons/review-button';
import PaymentButton from './buttons/payment-button';

function getTripsFromUser(user, setListOfTrips) {
  // axios.get('/userr', { email : user.email })
  //   .then((response) => {
  //     setListOfTrips(response.data.trips);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
}

function populateLists(
  pendingTrips,
  upcomingTrips,
  pastTrips,
  tripList,
  setListOfTrips
) {
  for (let currentIndex = 0; currentIndex < tripList.length; currentIndex++) {
    const trip = tripList[currentIndex];
    if (trip.status === 'pending') {
      pendingTrips.push(
        <div>
          <RiderCard tripInfo={trip} />
          <ButtonRow>
            <CancelButton
              onClick={() => {
                let copyOfTripList = tripList.slice();
                copyOfTripList.splice(currentIndex, 1);
                setListOfTrips(copyOfTripList);
              }}
            />
            <MessageButton />
          </ButtonRow>
        </div>
      );
    } else if (trip.status === 'upcoming') {
      upcomingTrips.push(
        <div>
          <RiderCard tripInfo={trip} />
          <ButtonRow>
            <CancelButton
              onClick={() => {
                let copyOfTripList = tripList.slice();
                copyOfTripList.splice(currentIndex, 1);
                setListOfTrips(copyOfTripList);
              }}
            />
            <MessageButton />
          </ButtonRow>
        </div>
      );
    } else {
      pastTrips.push(
        <div>
          <RiderCard tripInfo={trip} />
          <ButtonRow>
            <PaymentButton trip={trip} />
            <ReviewButton />
          </ButtonRow>
        </div>
      );
    }
  }
}

function TripListView() {
  const { user } = useAuth0();
  // const pastTrip = {
  //   title: 'Disney World 2022',
  //   driver_email: 'doctormadam.ryderpoole@lol.com',
  //   date: '4:00 PM August 27th, 2022',
  //   startPoint: '20 W 34th St., New York, NY 10001',
  //   endPoint: '3701 Osceola Pkwy, Bay Lake, FL 32830',
  //   totalCost: 250,
  //   riderCostLow: 25,
  //   riderCostHigh: 125,
  //   status: 'past',
  //   passengers: [1, 2, 3, 4, 5],
  // };

  // const pendingTrip = {
  //   title: 'Disney World 2022',
  //   driver_email: 'doctormadam.ryderpoole@lol.com',
  //   date: '4:00 PM August 27th, 2022',
  //   startPoint: '20 W 34th St., New York, NY 10001',
  //   endPoint: '3701 Osceola Pkwy, Bay Lake, FL 32830',
  //   totalCost: '$250',
  //   riderCostLow: 25,
  //   riderCostHigh: 125,
  //   status: 'pending',
  //   passengers: [1, 2, 3, 4, 5],
  // };

  // const upcomingTrip = {
  //   title: 'Disney World 2022',
  //   driver_email: 'doctormadam.ryderpoole@lol.com',
  //   date: '4:00 PM August 27th, 2022',
  //   startPoint: '20 W 34th St., New York, NY 10001',
  //   endPoint: '3701 Osceola Pkwy, Bay Lake, FL 32830',
  //   totalCost: '$250',
  //   riderCostLow: 25,
  //   riderCostHigh: 125,
  //   status: 'upcoming',
  //   passengers: [1, 2, 3, 4, 5],
  // };

  // for (let currentIndex = 0; currentIndex < 8; currentIndex++) {
  //   listOfTrips.push(pendingTrip);
  // }

  // for (let currentIndex = 0; currentIndex < 7; currentIndex++) {
  //   listOfTrips.push(upcomingTrip);
  // }

  // for (let currentIndex = 0; currentIndex < 5; currentIndex++) {
  //   listOfTrips.push(pastTrip);
  // }

  const [listOfTrips, setListOfTrips] = useState(null);

  const pendingTrips = [];
  const upcomingTrips = [];
  const pastTrips = [];

  if (listOfTrips === null) {
    getTripsFromUser(user, setListOfTrips);
    return null;
  }

  populateLists(
    pendingTrips,
    upcomingTrips,
    pastTrips,
    listOfTrips,
    setListOfTrips
  );

  return (
    <TripList>
      Pending Trips
      {pendingTrips}
      Upcoming Trips
      {upcomingTrips}
      Past Trips
      {pastTrips}
    </TripList>
  );
}

const TripList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default TripListView;
