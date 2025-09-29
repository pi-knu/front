import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import AuctionsPage from './components/pages/AuctionsPage';
import OneAuctionPage from './components/pages/OneAuctionPage';
import MarketplacePage from './components/pages/MarketplacePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import CartPage from './components/pages/CartPage';
import ProductPage from './components/pages/ProductPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: '/auctions', element: <AuctionsPage /> },
  { path: '/auction/:id', element: <OneAuctionPage /> },
  { path: '/marketplace', element: <MarketplacePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/profile', element: <ProfilePage /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
