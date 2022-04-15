import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Pages/Home/Home';
// import Homepage from './components/Pages/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Contact from './components/Pages/Contact/Contact';
import splash from './components/Pages/Splash_page/splash';
import Add_new_listing from './components/Pages/Add_New_Listing/Add_new_listing';
import Downtown from './components/Pages/Properties/Downtown'
import Amber_demo from './components/Pages/Owners/Amber_demo';
import John_demo from './components/Pages/Owners/John_demo';
import Sunny_dorm from './components/Pages/Properties/Sunny_dorm';
import Bedroom from './components/Pages/Properties/Bedroom';
import Manhattan from './components/Pages/Properties/Area/Manhattan';
import Apartment from './components/Pages/Properties/Listing/Apartment';
import Shared from './components/Pages/Properties/Action/Shared';
import Parking from './components/Pages/Properties/Features/Parking';
import Shortcodes from './components/Pages/Shortcodes/Shortcodes';
import Welcoming from './components/Pages/Blog/Welcoming';
import Greathost from './components/Pages/Blog/Greathost';
import Budget from './components/Pages/Blog/Budget';

import { AuthContext } from './helpers/AuthContext';

import {useState,useEffect} from "react";

import axios from 'axios';
import PropertyForm from './components/Pages/Dashboard/Properties/PropertyForm';
import ViewProperties from './components/Pages/Dashboard/Properties/ViewProperties';
import ManageAmenities from './components/Pages/Dashboard/Amenities/ManageAmenities';
import ManageUsers from './components/Pages/Dashboard/Users/ManageUsers';
import HostDashboard from './components/Pages/Dashboard/UserDashboards/Host/HostDashboard';
import ManageProperties from './components/Pages/Dashboard/Properties/ManageProperties';
import MyListings from './components/Pages/Dashboard/UserDashboards/Host/MyListings';
import MyPropertiesList from './components/Pages/Dashboard/UserDashboards/Host/MyPropertiesList';
import MyPropertyListings from './components/Pages/Dashboard/UserDashboards/Host/MyPropertyListings';
import ManageCustomers from './components/Pages/Dashboard/Customers/ManageCustomers';
import AddCustomerForm from './components/Pages/Dashboard/Customers/AddCustomerForm';
import BootstrapStepper from './components/Pages/Dashboard/Properties/BootstrapStepper';
import MDBStepper from './components/Pages/Dashboard/Properties/MDBStepper';
import ManhattanDynamic from './components/Pages/Properties/Area/ManhattanDynamic';
import SignInForm from './components/Pages/Properties/Area/SignInForm';
import SignUpForm from './components/Pages/Properties/Area/SignUpForm';
import PaymentEngine from './components/Pages/Dashboard/UserDashboards/Guest/PaymentEngine';
import StripePayment from './components/Pages/Dashboard/Payments/StripePayment';
import ManagePayPalPayments from './components/Pages/Dashboard/PaymentsPayPal/ManagePayPalPayments';
import Addbookdisplay from './components/Pages/Dashboard/Addbookdisplay';
import CustomerBookingDisplay from './components/Pages/Dashboard/Bookings/CustomerBookingDisplay';
import DisplayAvailabityCalendar from './components/Pages/Dashboard/AvailabilityCalendar/DisplayAvailabityCalendar';

import Showcategories from './components/Pages/Dashboard/Categories/Showcategories';
import AddCategory from './components/Pages/Dashboard/Categories/AddCategory';
import Settings from './components/Pages/Dashboard/Settings/Settings';
import Addstatic from './components/Pages/Dashboard/StaticPages/Addstatic';
import Staticpages from './components/Pages/Dashboard/StaticPages/Staticpages';
import Managereviews from './components/Pages/Dashboard/ManageReviews/Managereviews';


// import ProtectedRoutes from './ProtectedRoutes';

import ProtectedRoute from './helpers/ProtectedRoute';
import GuestBooking from './components/Pages/Dashboard/UserDashboards/Guest/GuestBooking';
import DisplayGuestBooking from './components/Pages/Dashboard/UserDashboards/Guest/DisplayGuestBooking';
import DisplayFavorates from './components/Pages/Dashboard/UserDashboards/Guest/DisplayFavorates';
import UpdateProfile from './components/Pages/Dashboard/UserDashboards/Guest/UpdateProfile';
import Paymenttable from './components/Pages/Dashboard/PaymentTable/Paymenttable';
import MyListingGuest from './components/Pages/Dashboard/UserDashboards/Guest/MyListingGuest';
import BookingPayment from './components/Pages/Dashboard/Payments/BookingPayment';
import PaymentBookingDisplay from './components/Pages/Dashboard/Payments/PaymentBookingDisplay';
import BookDisplayDetails from './components/Pages/Dashboard/Bookings/BookDisplayDetails';
import EditBookingDisplay from './components/Pages/Dashboard/Bookings/EditBookingDisplay';
import InboxGuest from './components/Pages/Dashboard/UserDashboards/Guest/InboxGuest';
import PropertyDescriptionDetails from './components/Pages/Dashboard/UserDashboards/Guest/propertyListing/PropertyDescriptionDetails';
import PropertyStepper from './components/Pages/Dashboard/UserDashboards/Guest/propertyListing/PropertyStepper';
import PropertyDescriptionDetailsHost from './components/Pages/Dashboard/UserDashboards/Host/propertyListing/PropertyDescriptionDetailsHost';
import PropertyStepperHost from './components/Pages/Dashboard/UserDashboards/Host/propertyListing/PropertyStepperHost';
import InboxHost from './components/Pages/Dashboard/UserDashboards/Host/InboxHost';
import InboxAdmin from './components/Pages/Dashboard/Messages/InboxAdmin';
import SendMessage from './components/Pages/Dashboard/UserDashboards/Host/SendMessage';
import ShowMessages from './components/Pages/Dashboard/Messages/ShowMessages';
import ManageReviews from './components/Pages/Dashboard/UserDashboards/Guest/ManageReviews';
import ReviewProperty from './components/Pages/Dashboard/UserDashboards/Guest/ReviewProperty';
import EditReview from './components/Pages/Dashboard/ManageReviews/EditReview';
import EditCategory from './components/Pages/Dashboard/Categories/EditCategory';
import Cleantask from './components/Pages/Dashboard/Cleantask/Cleantask';
import DashboardGuest from './components/Pages/Dashboard/UserDashboards/Guest/DashboardGuest';
import Profile from './components/Pages/Dashboard/UserDashboards/Guest/Profile';
import HostProfile from './components/Pages/Dashboard/UserDashboards/Host/HostProfile';
import UpdateProfileHost from './components/Pages/Dashboard/UserDashboards/Host/UpdateProfile';
import Editpages from './components/Pages/Dashboard/StaticPages/Editpages';
import Blogs from './components/Pages/Dashboard/Blogs/Blogs';
import Bloglist from './components/Pages/Dashboard/Blogs/Bloglist';
import Bookinglist from './components/Pages/Dashboard/Properties/EditProperties/Bookinglist';
import Amenitylist from './components/Pages/Dashboard/Properties/EditProperties/Amenitylist';
import Basicdetails from './components/Pages/Dashboard/Properties/EditProperties/Basicdetails';
import  Description  from './components/Pages/Dashboard/Properties/EditProperties/Description';
import Photos from './components/Pages/Dashboard/Properties/EditProperties/Photos';
import Pricing from './components/Pages/Dashboard/Properties/EditProperties/Pricing';
import Location from './components/Pages/Dashboard/Properties/EditProperties/Location';
import Extracharge from './components/Pages/Dashboard/Extracharges/Extracharge';
import Addextracharge from './components/Pages/Dashboard/Extracharges/Addextracharge';
import Editcharges from './components/Pages/Dashboard/Extracharges/Editcharges';
import CartDetails from './components/Pages/Dashboard/UserDashboards/Guest/CartDetails';
import SendEmail from './components/Pages/Dashboard/Bookings/SendEmail';
import Payouts from './components/Pages/Dashboard/Payouts/Payouts';
import PayoutsGuest from './components/Pages/Dashboard/UserDashboards/Guest/PayoutsGuest';
import ViewProperty from './components/Pages/Dashboard/Properties/ViewProperty';
import Preferences from "./components/Pages/Dashboard/Settings/Preferences";
import Sms_settings from "./components/Pages/Dashboard/Settings/Sms_settings";
import Banners from "./components/Pages/Dashboard/Settings/Banners";
import Addbanners from "./components/Pages/Dashboard/Settings/Addbanners";
import Startinglist from "./components/Pages/Dashboard/Settings/Startinglist";
import Addstarting from "./components/Pages/Dashboard/Settings/Addstarting";
import Property_type from "./components/Pages/Dashboard/Settings/Property_type";
import Addproperty_type from "./components/Pages/Dashboard/Settings/Addproperty_type";
import Spacetypelist from "./components/Pages/Dashboard/Settings/Spacetypelist";
import Addspacetype from "./components/Pages/Dashboard/Settings/Addspacetype";
import Bedtype from "./components/Pages/Dashboard/Settings/Bedtype";
import Addbedtype from "./components/Pages/Dashboard/Settings/Addbedtype";
import Currency from "./components/Pages/Dashboard/Settings/Currency";
import Addcurrency from "./components/Pages/Dashboard/Settings/Addcurrency";
import Country from "./components/Pages/Dashboard/Settings/Country";
import Addcountry from "./components/Pages/Dashboard/Settings/Addcountry";
import Amenitytype from "./components/Pages/Dashboard/Settings/Amenitytype";
import Addamenitytype from "./components/Pages/Dashboard/Settings/Addamenitytype";
import Emailsettings from "./components/Pages/Dashboard/Settings/Emailsettings";
import Fees from "./components/Pages/Dashboard/Settings/Fees";
import Language from "./components/Pages/Dashboard/Settings/Language";
import Addlanguage from "./components/Pages/Dashboard/Settings/Addlanguage";
import Meta from "./components/Pages/Dashboard/Settings/Meta";
import Apicredentials from "./components/Pages/Dashboard/Settings/Apicredentials";
import Paymentmethod from "./components/Pages/Dashboard/Settings/Paymentmethod";
import Stripe from "./components/Pages/Dashboard/Settings/Stripe";
import Social from "./components/Pages/Dashboard/Settings/Social";
import Privacypolicy from "./components/Pages/Dashboard/Settings/Privacypolicy";
import Addpolicy from "./components/Pages/Dashboard/Settings/Addpolicy";
import Roles from "./components/Pages/Dashboard/Settings/Roles";
import Addrole from "./components/Pages/Dashboard/Settings/Addrole";
import Database from "./components/Pages/Dashboard/Settings/Database";
import Editcurrency from "./components/Pages/Dashboard/Settings/Editcurrency";
import Editcountry from "./components/Pages/Dashboard/Settings/Editcountry";
import Editlanguage from "./components/Pages/Dashboard/Settings/Editlanguage";
import Editbedtype from "./components/Pages/Dashboard/Settings/Editbedtype";
import Editamenitytype from "./components/Pages/Dashboard/Settings/Editamenitytype";
import Manage from "./components/Pages/Dashboard/Settings/Manage";
import SearchHome from './components/Pages/SearchHome/SearchHome';
import FindProperty from './components/Pages/FindProperty/FindProperty';
import './App.css'
import PropertySearch from './components/Pages/FindProperty/PropertySearch';
import ReservationNew from './components/Pages/Home/ReservationNew';







function App() {
  const [authState, setAuthState] = useState({
    username:"",
    first_name:"",
    phone_no:"",
    email:"",
    role:"",
    id:0,
    status:false,
  });

  useEffect(()=>{
    axios.get('https://onlinebookingus-app-test.herokuapp.com/users/auth',{headers:{
      accessToken:localStorage.getItem("accessToken"),
    }}).then((response)=>{

    if(response.data.error){
      setAuthState({...authState,status:false});
    }
    else{
      setAuthState({
        username:response.data.username,
        first_name:response.data.first_name,
        phone_no:response.data.phone_no,
        email:response.data.email,
        role:response.data.role,
        id:response.data.id,
        status:true,

      });

      console.log("USER DETAILS",authState);
    }
      
    })
   
 },[]);

 const logout = () => {
  localStorage.removeItem("accessToken");
  setAuthState({ username: "", id: 0, status: false });
};
  return (
    <div>
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/splash" component={splash} />
          {/*<Route exact path="/dashboard" component={Dashboard} />*/}

          <ProtectedRoute forceRefresh={true} exact path="/dashboard"  component={Dashboard} />

         {/**<Redirect exact from="/dashboard/reload" to="/dashboard"/> */} 
       
          <ProtectedRoute Route exact path="/dashboard-host" component={HostDashboard} />

          <ProtectedRoute Route exact path="/dashboard-guest" component={DashboardGuest}/>

          <Route exact path="/profile-guest" component={Profile}/>

          <ProtectedRoute Route exact path="/my-profile" component={HostProfile}/>

          <Route exact path="/edit-profile/:id" component={UpdateProfile} />

          <Route exact path="/update-profile/:id" component={UpdateProfileHost} />



          <Route exact path="/add_new_listing" component={Add_new_listing} />
          <Route exact path="/downtown" component={Downtown} />
          <Route exact path="/amber_demo" component={Amber_demo} />
          <Route exact path="/john_demo" component={John_demo} />
          <Route exact path="/sunny_dorm" component={Sunny_dorm} />
          <Route exact path="/property/:id" component={Bedroom} />
          <Route exact path="/manhattan" component={Manhattan} />

  
          <Route exact path="/search-location/:address" component={ManhattanDynamic} />
          <Route exact path="/bedroom" component={Bedroom} />
          <Route exact path="/apartment" component={Apartment} />
          <Route exact path="/shared" component={Shared} />
          <Route exact path="/parking" component={Parking} />
          <Route exact path="/shortcodes" component={Shortcodes} />
          <Route exact path="/welcoming" component={Welcoming} />
          <Route exact path="/greathost" component={Greathost} />
          <Route exact path="/budget" component={Budget} />

          <Route exact path="/login" component={SignInForm} />
          <Route exact path="/register" component={SignUpForm} />

          <ProtectedRoute Route exact path="/property-form" component={PropertyForm} />

          <Route exact path="/add-property/:id" component={ManageProperties} />

          <Route exact path="/stepper/:id" component={BootstrapStepper} />

          <Route exact path="/add-listing" component={MyListings} />

          <Route exact path="/my-listings" component={MyPropertyListings} />

          <ProtectedRoute Route exact path="/amenities" component={ManageAmenities} />

          <Route exact path="/users" component={ManageUsers} />

          <Route exact path="/manage-properties" component={ViewProperties} />

          <Route exact path="/customers" component={ManageCustomers} />

          <Route exact path="/add-customer" component={AddCustomerForm} />

          <Route path="/mdb-stepper/:id" component={MDBStepper} />


          <Route forceRefresh={true} exact path="/payment" component={PaymentEngine} />

          <Route exact path="/stripe" component={StripePayment} />

          <Route exact path="/paypal" component={ManagePayPalPayments} />

          

          <ProtectedRoute exact path="/addbooking" component={Addbookdisplay} />

          <Route exact path="/edit-booking/:id" component={EditBookingDisplay} />

          <ProtectedRoute Route exact path="/bookings" component={CustomerBookingDisplay} />

          <Route exact path="/all-payments" component={Paymenttable} />


          <Route path="/booking-payment/:id" component={PaymentBookingDisplay} />

          <Route path="/booking-details/:id" component={BookDisplayDetails} />

          <Route path="/admin-send-email/:id" component={SendEmail} />

          <Route exact path="/availability-calendar" component={DisplayAvailabityCalendar} />


          <Route exact path="/addstatic" component={Addstatic} />
          <Route exact path="/staticpages" component={Staticpages} />

          <Route exact path="/editpage/:id" component={Editpages} />
         


          <Route exact path="/category" component={Showcategories} />
          <Route exact path="/addcategory" component={AddCategory} />
          <Route exact path="/edit/:id" component={EditCategory} />

          <Route exact path="/cleaningtask" component={Cleantask} />


          <Route exact path="/settings" component={Settings} />

          <Route exact path="/my-bookings" component={DisplayGuestBooking} />
          <Route exact path="/cart-details" component={CartDetails} />


          <Route exact path="/my-favorites" component={DisplayFavorates} />

        

          <Route exact path="/listing-guest" component={MyListingGuest} />


          <Route exact path="/inbox-guest" component={InboxGuest} />

          <Route exact path="/inbox-host" component={InboxHost} />


          <Route exact path="/list-property-guest" component={PropertyDescriptionDetails} />

          <Route path="/property-stepper-guest/:id" component={PropertyStepper} />


          <Route exact path="/list-property-host" component={PropertyDescriptionDetailsHost} />

          <Route path="/property-stepper-host/:id" component={PropertyStepperHost} />

          <Route exact path="/messages" component={InboxAdmin} />

          <Route exact path="/send-message" component={SendMessage}/>


          <Route exact path="/show-messages" component={ShowMessages}/>

          <Route exact path="/managereviews" component={Managereviews} />
          <Route exact path="/editreviews/:id" component={EditReview} />

          <Route exact path="/my-reviews" component={ManageReviews}/>

          <Route exact path="/guest-review/:id" component={ReviewProperty}/>


          <Route exact path="/blogs" component={Blogs} />

          <Route exact path="/bloglist" component={Bloglist} />


          <Route exact path="/basicdetails/:id" component={Basicdetails} />
          <Route exact path="/description/:id" component={Description}/>

        
          <Route exact path="/amenitylist/:id" component={Amenitylist} />
         
          <Route exact path="/bookinglist/:id" component={Bookinglist} />
        
          <Route exact path="/location/:id" component={Location} />
          <Route exact path="/photos/:id" component={Photos} />
          <Route exact path="/pricing/:id" component={Pricing} />



          <Route exact path="/extracharges" component={Extracharge} />
          <Route exact path="/addcharge" component={Addextracharge} />
          <Route exact path="/editcharge/:id" component={Editcharges} />


          <Route exact path="/payouts" component={Payouts} />

          <Route exact path="/payouts-guest" component={PayoutsGuest} />

          <Route exact path="/view-property/:id" component={ViewProperty} />
               <Route exact path="/general" component={Settings} />
           <Route exact path="/preferences" component={Preferences} />
            <Route exact path="/sms_settings" component={Sms_settings} />
            <Route exact path="/addbanners" component={Addbanners} />
            <Route exact path="/banners" component={Banners} />
            <Route exact path="/starting" component={Startinglist} />
            <Route exact path="/addstarting" component={Addstarting} />
            <Route exact path="/propertytype" component={Property_type} />
            <Route exact path="/addproperty_type" component={Addproperty_type} />
            <Route exact path="/spacetype" component={Spacetypelist} />
            <Route exact path="/addspacetype" component={Addspacetype} />
            <Route exact path="/bedtype" component={Bedtype} />
            <Route exact path="/addbedtype" component={Addbedtype} />
            <Route exact path="/editbedtype/:id" component={Editbedtype} />
            <Route exact path="/currency" component={Currency} />
            <Route exact path="/addcurrency" component={Addcurrency} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/addcountry" component={Addcountry} />
            <Route exact path="/amenitytype" component={Amenitytype} />
            <Route exact path="/addamenitytype" component={Addamenitytype} />
            <Route exact path="/editamenitytype/:id" component={Editamenitytype} />
            <Route exact path="/emailsettings/:id" component={Emailsettings} />
            <Route exact path="/fees" component={Fees} />
            <Route exact path="/language" component={Language} />
            <Route exact path="/addlanguage" component={Addlanguage} />
            <Route exact path="/editlanguage/:id" component={Editlanguage} />
            <Route exact path="/meta" component={Meta} />
            <Route exact path="/apicredentials" component={Apicredentials} />
            <Route exact path="/paymentmethods" component={Paymentmethod} />
            <Route exact path="/stripe" component={Stripe} />
            <Route exact path="/sociallinks" component={Social} />
            <Route exact path="/privacy" component={Privacypolicy} />
            <Route exact path="/addpolicy" component={Addpolicy} />
            <Route exact path="/roles" component={Roles} />
            <Route exact path="/addrole" component={Addrole} />
            <Route exact path="/database" component={Database} />
            <Route exact path="/editcurrency/:id" component={Editcurrency} />
            <Route exact path="/editcountry/:id" component={Editcountry} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/searchhome" component={SearchHome} />
            <Route path="/findproperty" component={FindProperty}/>
            <Route path="/propertysearch" component={PropertySearch}/>
            <Route path="/new" component={ReservationNew}/>
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
