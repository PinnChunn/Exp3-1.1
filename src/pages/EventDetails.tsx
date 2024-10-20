import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, Users, Clock, Award } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit');

  // Mock event data (in a real app, you'd fetch this based on the id)
  const event = {
    id: 1,
    title: "Web3 Development Bootcamp",
    date: "June 15-17, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "Virtual",
    price: 299,
    attendees: 50,
    description: "Join us for an intensive 3-day bootcamp on Web3 development. Learn about blockchain fundamentals, smart contracts, and building decentralized applications.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    xp: 500,
    skills: ["Blockchain", "Smart Contracts", "DApp Development"]
  };

  const steps = ['Event Details', 'Attendee Information', 'Payment', 'Confirmation'];

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/events" className="text-purple-600 hover:text-purple-700 mb-4 inline-block">&larr; Back to Events</Link>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{event.title}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <EventDetail icon={<Calendar size={20} />} text={event.date} />
            <EventDetail icon={<Clock size={20} />} text={event.time} />
            <EventDetail icon={<MapPin size={20} />} text={event.location} />
            <EventDetail icon={<Users size={20} />} text={`${event.attendees} attendees`} />
            <EventDetail icon={<DollarSign size={20} />} text={`$${event.price}`} />
            <EventDetail icon={<Award size={20} />} text={`${event.xp} XP`} />
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Skills</h3>
            <div className="flex flex-wrap">
              {event.skills.map((skill, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">{skill}</span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Registration</h2>
            <div className="flex mb-6">
              {steps.map((step, index) => (
                <div key={step} className={`flex-1 text-center ${index <= currentStep ? 'text-purple-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {index + 1}
                  </div>
                  <div className="text-sm">{step}</div>
                </div>
              ))}
            </div>
            {renderStep(currentStep, nextStep, prevStep, paymentMethod, setPaymentMethod)}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDetail = ({ icon, text }) => (
  <div className="flex items-center text-gray-600">
    <span className="mr-2 text-purple-600">{icon}</span>
    <span>{text}</span>
  </div>
);

const renderStep = (step, nextStep, prevStep, paymentMethod, setPaymentMethod) => {
  switch (step) {
    case 0:
      return (
        <div>
          <p className="mb-4 text-gray-600">Please review the event details above and click "Next" to proceed with registration.</p>
          <button onClick={nextStep} className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
            Next
          </button>
        </div>
      );
    case 1:
      return <AttendeeInformationForm nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return <PaymentForm nextStep={nextStep} prevStep={prevStep} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />;
    case 3:
      return <ConfirmationStep />;
    default:
      return null;
  }
};

const AttendeeInformationForm = ({ nextStep, prevStep }) => (
  <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
    <input type="text" placeholder="Full Name" className="w-full bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
    <input type="email" placeholder="Email" className="w-full bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
    <div className="flex justify-between">
      <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors duration-200">
        Back
      </button>
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
        Next
      </button>
    </div>
  </form>
);

const PaymentForm = ({ nextStep, prevStep, paymentMethod, setPaymentMethod }) => (
  <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
    <div className="flex space-x-4 mb-4">
      <button
        type="button"
        className={`flex-1 ${paymentMethod === 'credit' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-full`}
        onClick={() => setPaymentMethod('credit')}
      >
        Credit Card
      </button>
      <button
        type="button"
        className={`flex-1 ${paymentMethod === 'crypto' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-full`}
        onClick={() => setPaymentMethod('crypto')}
      >
        Crypto
      </button>
    </div>
    {paymentMethod === 'credit' ? (
      <>
        <input type="text" placeholder="Card Number" className="w-full bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
        <div className="flex space-x-4">
          <input type="text" placeholder="MM/YY" className="w-1/2 bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
          <input type="text" placeholder="CVV" className="w-1/2 bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
        </div>
      </>
    ) : (
      <input type="text" placeholder="Wallet Address" className="w-full bg-gray-100 text-gray-800 rounded px-4 py-2 border border-gray-300" required />
    )}
    <div className="flex justify-between">
      <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors duration-200">
        Back
      </button>
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
        Pay Now
      </button>
    </div>
  </form>
);

const ConfirmationStep = () => (
  <div className="text-center">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Registration Confirmed!</h3>
    <p className="mb-6 text-gray-600">Thank you for registering. You will receive a confirmation email shortly.</p>
    <Link to="/dashboard" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
      Go to Dashboard
    </Link>
  </div>
);

export default EventDetails;