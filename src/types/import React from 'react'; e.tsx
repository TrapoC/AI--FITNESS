import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import WorkoutList from "./components/WorkoutList";
import PersonalizedSection from "./components/PersonalizedSection";
import TestimonialSection from "./components/TestimonialSection";
import MembershipPlans from "./components/MembershipPlans";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<Features />} />
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/personalized" element={<PersonalizedSection />} />
          <Route path="/testimonials" element={<TestimonialSection />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
