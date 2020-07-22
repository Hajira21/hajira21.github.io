import React, { Component } from 'react';
class Booking extends Component{

  render() {
    const{ booking } = this.props;
    const bookingList = booking.map(booking =>{
        return (
        <div className="booking" key={booking.id}>
            <div>Name: {booking.name}</div>
            <div>Age: {booking.age}</div>
            <div>Eyes: {booking.eyes}</div>
        </div>
        )
    })
    return (
        <div className="booking-list">
            {bookingList}
        </div>
    )
  }
}


export default Booking;
