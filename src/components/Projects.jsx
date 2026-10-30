import Project from './Project'
import DeliveryMock from './mocks/DeliveryMock'
import BookingMock from './mocks/BookingMock'
import CctvMock from './mocks/CctvMock'

export default function Projects() {
  return (
    <div>
      <Project
        title="GateWay Plaza"
        lead="A food delivery app."
        text="Browse dishes, fill a cart and place an order, in the style of Chowdeck and Glovo. Built in React with reusable components."
        chips={['React', 'JavaScript', 'CSS', 'Component design']}
        ghost="ORDER"
        status='In Development'
        // href="https://your-delivery-app-link.com"
      >
        <DeliveryMock />
      </Project>

      <Project
        title="Shortlet Booking Site"
        lead="Apartment booking for shortlet owners."
        text="Listings with date availability, online booking and payment, Google Maps for every property and an owner dashboard to manage stays."
        chips={['React', 'Google Maps', 'Date availability', 'Payments', 'Owner dashboard']}
        ghost="BOOK"
        status='Live'
        href="https://shortlet-demo-brown.vercel.app/"
      >
        <BookingMock />
      </Project>

      <Project
        title="Installation Business Site"
        lead="A website for a CCTV and smart lock installer."
        text="Explains what the business installs and makes it easy for customers to get in touch."
        chips={['Responsive layout', 'Service pages', 'CCTV', 'Smart locks']}
        ghost="WATCH"
        status='Live'
        href="https://j-tech-lilac.vercel.app/"
      >
        <CctvMock />
      </Project>
    </div>
  )
}