import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LayoutAdmin from "./LayoutAdmin";
import Home from "./Component/Home";
import Faq from "./Component/Faq";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import OwnerPlans from "./Component/OwnerPlans";
import PostYourProperty from "./Component/PostYourProperty";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import RentalAgreement from "./Component/RentalAgreement";
import RentReceipt from "./Component/RentReceipt";
import Sitemap from "./Component/Sitemap";
import TenantPlans from "./Component/TenantPlans";
import TermsCondition from "./Component/TermsCondition";
import Testimonial from "./Component/Testimonial";
import ViewProperty from "./Component/ViewProperty";
import Searched from "./Component/Searched";
import Chat from "./Component/Chat";
import Dashboard from "./Component/Dashboard";
import Profile from "./Component/Profile";
import MyBooking from "./Component/MyBooking";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import LayoutOwner from "./LayoutOwner";
import LayoutTenant from "./LayoutTenant";
import LayoutBroker from "./LayoutBroker";
import Error from "./Component/Error";
import WaitingConfirmation from "./Component/WaitingConfirmation";
import EditYourProperty from "./Component/EditProperty";

function App() {
  return (
    <BrowserRouter>
      {/* Guest User Start */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ownerplans" element={<OwnerPlans />} />
          <Route path="/postyourproperty" element={<PostYourProperty />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/rentalagreement" element={<RentalAgreement />} />
          <Route path="/rentreceipt" element={<RentReceipt />} />{" "}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/*No Footer in this component */}
          <Route path="/sitemap" element={<Sitemap />} />{" "}
          {/*No Footer in this component */}
          <Route path="/tenantplans" element={<TenantPlans />} />
          <Route path="/termsandconditions" element={<TermsCondition />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/viewproperty" element={<ViewProperty />} />
          <Route path="/searched" element={<Searched />} />
          {/*No Footer in this component */}
        </Route>
      </Routes>
      {/* Guest User End */}

      {/* Owner Start */}
      <Routes>
        <Route path="/owner" element={<LayoutOwner />}>
          <Route index element={<PostYourProperty />} />
          <Route path="/owner/home" element={<PostYourProperty />} />
          <Route path="/owner/chat" element={<Chat />} />
          <Route path="/owner/dashboard" element={<Dashboard />} />
          <Route path="/owner/profile" element={<Profile />} />
          <Route path="/owner/faq" element={<Faq />} />
          <Route path="/owner/contact" element={<Contact />} />
          <Route path="/owner/ownerplans" element={<OwnerPlans />} />
          <Route path="/owner/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/owner/rentalagreement" element={<RentalAgreement />} />
          <Route path="/owner/rentreceipt" element={<RentReceipt />} />{" "}
          {/*No Footer in this component */}
          <Route path="/owner/sitemap" element={<Sitemap />} />{" "}
          {/*No Footer in this component */}
          <Route
            path="/owner/termsandconditions"
            element={<TermsCondition />}
          />
          <Route path="/owner/testimonial" element={<Testimonial />} />
          <Route path="/owner/editproperty" element={<EditYourProperty />} />
          {/*No Footer in this component */}
        </Route>
      </Routes>
      {/* Owner End */}

      {/* Broker Start */}
      <Routes>
        <Route path="/broker" element={<LayoutBroker />}>
          <Route index element={<PostYourProperty />} />
          <Route path="/broker/home" element={<PostYourProperty />} />
          <Route path="/broker/chat" element={<Chat />} />
          <Route path="/broker/dashboard" element={<Dashboard />} />
          <Route path="/broker/profile" element={<Profile />} />
          <Route path="/broker/faq" element={<Faq />} />
          <Route path="/broker/contact" element={<Contact />} />
          <Route path="/broker/brokerplans" element={<OwnerPlans />} />
          <Route path="/broker/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/broker/rentalagreement" element={<RentalAgreement />} />
          <Route path="/broker/rentreceipt" element={<RentReceipt />} />{" "}
          {/* <Route path="/broker/about" element */}
          {/*No Footer in this component */}
          <Route path="/broker/sitemap" element={<Sitemap />} />{" "}
          {/*No Footer in this component */}
          <Route
            path="/broker/termsandconditions"
            element={<TermsCondition />}
          />
          <Route path="/broker/testimonial" element={<Testimonial />} />
          <Route path="/broker/editproperty" element={<EditYourProperty />} />
          {/*No Footer in this component */}
        </Route>
      </Routes>
      {/* Broker End */}

      {/* Tenant Start */}
      <Routes>
        <Route path="/tenant" element={<LayoutTenant />}>
          <Route index element={<Home />} />
          <Route path="/tenant/home" element={<Home />} />
          <Route path="/tenant/chat" element={<Chat />} />
          <Route path="/tenant/dashboard" element={<Dashboard />} />
          <Route path="/tenant/booking" element={<MyBooking />} />
          <Route path="/tenant/faq" element={<Faq />} />
          <Route path="/tenant/contact" element={<Contact />} />
          <Route path="/tenant/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tenant/rentalagreement" element={<RentalAgreement />} />
          <Route path="/tenant/rentreceipt" element={<RentReceipt />} />{" "}
          {/*No Footer in this component */}
          <Route path="/tenant/sitemap" element={<Sitemap />} />{" "}
          {/*No Footer in this component */}
          <Route path="/tenant/tenantplans" element={<TenantPlans />} />
          <Route
            path="/tenant/termsandconditions"
            element={<TermsCondition />}
          />
          <Route path="/tenant/testimonial" element={<Testimonial />} />
          <Route path="/tenant/viewproperty" element={<ViewProperty />} />
          <Route path="/tenant/searched" element={<Searched />} />{" "}
          <Route path="/tenant/waiting" element={<WaitingConfirmation />} />{" "}
          {/*No Footer in this component */}
        </Route>
      </Routes>
      {/* Tenant End */}

      {/* Admin Start */}
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/chat" element={<Chat />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/booking" element={<MyBooking />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/faq" element={<Faq />} />
          <Route path="/admin/contact" element={<Contact />} />
          <Route path="/admin/ownerplans" element={<OwnerPlans />} />
          <Route
            path="/admin/postyourproperty"
            element={<PostYourProperty />}
          />
          <Route path="/admin/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/admin/rentalagreement" element={<RentalAgreement />} />
          <Route path="/admin/rentreceipt" element={<RentReceipt />} />{" "}
          {/*No Footer in this component */}
          <Route path="/admin/sitemap" element={<Sitemap />} />{" "}
          {/*No Footer in this component */}
          <Route path="/admin/tenantplans" element={<TenantPlans />} />
          <Route
            path="/admin/termsandconditions"
            element={<TermsCondition />}
          />
          <Route path="/admin/testimonial" element={<Testimonial />} />
          <Route path="/admin/viewproperty" element={<ViewProperty />} />
          <Route path="/admin/searched" element={<Searched />} />{" "}
          {/*No Footer in this component */}
        </Route>
      </Routes>
      {/* Admin End */}
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* Error Page */}
      <Routes>
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
