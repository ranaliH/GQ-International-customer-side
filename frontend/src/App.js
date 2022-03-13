import React, { useState } from 'react';
import jsPDF from 'jspdf';
import NavBar from './components/common/customerView/NavBar';
//import NavBar from './components/common/adminView/NavBar';
import FooterPage from './components/common/customerView/Footer';
import SlideShow from './components/Pages/SlideShow/SlideShow';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Adminlogin from './components/Pages/Admin/adminlogin';
import Debtpay from './components/Pages/CR/PayForm';
import Search from './components/modules/CustomerPageModules/Customer/SearchBar';
import LoginScreen from './components/Pages/Customer/LoginScreen';
import RegisterScreen from './components/Pages/Customer/RegisterScreen';
import Mypurchases from './components/Pages/Customer/Mypurchases';
import SinglePurchase from './components/Pages/Customer/SinglePurchase';
import SearchBar from './components/modules/CustomerPageModules/Customer/SearchBar';
import CreatePurchase from './components/Pages/Customer/CreatePurchase';
import CustomerPurchasesReport from './components/Pages/Customer/CustomerPurchasesReport';
import './bootstrap.min.css';
import ProfileScreen from './components/Pages/Customer/ProfileScreen';

//screens
import ItemHomeScreen from './screens/ItemHomeScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';

import ContactUs from './components/modules/CustomerPageModules/ContactUs/ContactUsForm/mailer';
import AboutUs from './components/common/customerView/AboutUs';
//import HomeScreen from './screens/HomeScreen';
//import ProductScreen from './screens/ProductScreen';
//import Item from './components/modules/AdminPageModules/Stock/createItem';

//import Deficit from './components/modules/AdminPageModules/Stock/deficit';
//import CreateDeficits from './components/modules/AdminPageModules/Stock/CreateDeficits';
//import editDeficits from './components/modules/AdminPageModules/Stock/editDeficits';
//import deficitDetails from './components/modules/AdminPageModules/Stock/deficitDetails';
//import createItem from './components/modules/AdminPageModules/Stock/createItem';
//import editItem from './components/modules/AdminPageModules/Stock/editItem';
//import Item from './components/modules/AdminPageModules/Stock/item';
//import itemDetails from './components/modules/AdminPageModules/Stock/itemDetails';

//Payments
import OnlinePayment from './components/modules/CustomerPageModules/Payment/OnlinePayments';

function App() {
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <BrowserRouter>
      <NavBar />
      <sideDrawer />
      <backDrop />
      <main>
        <Switch>
          <Route exact path="/items" component={ItemHomeScreen}/>
          <Route exact path="/item/:id" component={ItemScreen}/>

          <Route exact path="/cart" component={CartScreen} />

          <Route exact path="/onlinePay" component={OnlinePayment} />

          <Route path="/aboutUs"><AboutUs/></Route>

          <Route path="/purchases">
            <hr />
            <SearchBar setSearch={setSearch} />
            <Mypurchases search={search} />
          </Route>

          <Route path="/register">
            <RegisterScreen />
          </Route>

          <Route path="/createpurchase">
            <CreatePurchase />
          </Route>
          <Route path="/customerpurchasereport">
            <CustomerPurchasesReport />
          </Route>
          <Route path="/purchase/:id">
            <SinglePurchase />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/profile">
            <SearchBar setSearch={setSearch} />
            <ProfileScreen />
          </Route>

          <Route path="/CUS">
            <Search />
          </Route>
          <Route path="/adminlogin">
            <Adminlogin />
          </Route>

          

          <Route exact path="/contactUs" component={ContactUs} />

          <Route exact path="/" component={SlideShow} />
        </Switch>
        <FooterPage />
      </main>
    </BrowserRouter>
  );
}

export default App;
