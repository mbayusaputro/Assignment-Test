import Flight from './flight/pages/FormFlight/index';
import Inbox from './inbox';
import Home from './home';

// Profile
import Profile from './profile';
import ProfileEdit from './profile/pages/ProfileEdit';
import ChangePassword from './profile/pages/ChangePassword';
import ForgotPassword from './profile/pages/ForgotPassword';
import ForgotPassword2 from './profile/pages/ForgotPassword2';
import ForgotPassword3 from './profile/pages/ForgotPassword3';
import {FormRegister, ConfirmOTP, SubmitRegister} from './register';

// Order
import Orders from './orders/pages/MyOrders';
import FlightOrderDetail from './orders/pages/FlightOrderDetail';

// Setting
import MainSetting from './settings/pages/MainSetting';

import BookingDetail from './flight/pages/BookingDetail';
import ETicketFlight from './flight/pages/EticketFlight';
import NoFlight from './flight/pages/NoFlight';
import DetailFlight from './flight/pages/DetailFlight';
import FilterFlight from './flight/pages/FilterFlight';
import ResultFlight from './flight/pages/ResultFlight';
import ResultFlightReturn from './flight/pages/ResultFlightReturn';
import BookingFlight from './flight/pages/Booking';

// Hotel
import FormHotel from './hotel/pages/FormHotel';
import ResultHotel from './hotel/pages/ResultHotel';
import DetailHotel from './hotel/pages/DetailHotel';
import SelectRoomHotel from './hotel/pages/SelectRoomHotel';
import DetailRoomHotel from './hotel/pages/DetailRoomHotel';
import BookingFormHotel from './hotel/pages/BookingFormHotel';

// HOLIDAY
import HolidayList from './holiday/pages/HolidayList';
import HolidayDetail from './holiday/pages/HolidayDetail';
import HolidayAddon from './holiday/pages/HolidayAddon';
import HolidayBooking from './holiday/pages/HolidayBooking';
import HolidayItinerary from './holiday/pages/HolidayItinerary';

// PAYMENT
import {PaymentMethod, PaymentWeb, ETicket} from './payment';

// Agent
import Withdraw from './agent/pages/Withdraw';
import TopUp from './agent/pages/TopUp';
import Report from './agent/pages/Report';
import ReportResult from './agent/pages/ResultReport';
import MyAgent from './agent/pages/MyAgent';
import CreatePackages from './agent/pages/CreatePackages';
import CreatePackagesNext from './agent/pages/CreatePackagesNext';
import ItineraryAgent from './agent/pages/Itinerary';

export {
  Home,
  Flight,
  Orders,
  Inbox,
  Profile,
  BookingDetail,
  ETicketFlight,
  NoFlight,
  FormRegister,
  ConfirmOTP,
  SubmitRegister,
  DetailFlight,
  FilterFlight,
  ResultFlight,
  ProfileEdit,
  ChangePassword,
  ResultFlightReturn,
  BookingFlight,
  ForgotPassword,
  ForgotPassword2,
  ForgotPassword3,
  MainSetting,
  FlightOrderDetail,
  FormHotel,
  ResultHotel,
  DetailHotel,
  SelectRoomHotel,
  DetailRoomHotel,
  BookingFormHotel,
  PaymentMethod,
  PaymentWeb,
  ETicket,
  HolidayList,
  HolidayDetail,
  HolidayAddon,
  HolidayBooking,
  HolidayItinerary,
  Withdraw,
  TopUp,
  Report,
  ReportResult,
  MyAgent,
  CreatePackages,
  CreatePackagesNext,
  ItineraryAgent,
};
