# 🏝️ The Wild Oasis

A modern hotel management dashboard built with React.

This project was developed as part of the **React course by Jonas Schmedtmann** and focuses on real-world frontend architecture and scalable React applications.

## Live demo

https://the-wild-oasis-reyhaneh.vercel.app/login

## Demo Login

Email: demo@thewildoasis.com  
Password: Demo1234

## 📌 About the Project

The Wild Oasis is an internal hotel management system designed for hotel staff to manage daily operations efficiently.

## Tech Stack

- React (Vite)
- React Router
- React Query (TanStack Query)
- Styled Components
- Supabase (Authentication + Database)
- React Hook Form
- Recharts

## Features

### 🏨 Cabin Management

- Create, edit, and delete cabins
- Upload cabin images
- Manage pricing and capacity

### 📅 Bookings System

- Create and manage reservations
- Check-in / Check-out flow
- Filtering and sorting

### 🔐 Authentication

- Secure login system using Supabase
- Protected routes for authorized users

### 📊 Dashboard

- Revenue and occupancy overview
- Basic analytics with charts
- Real-time data fetching

### Dark mode

- Toggle between light and dark themes for better user experience

## Setup & Installation

```bash
git clone https://github.com/reyhanehSarkhani/the-wild-oasis.git
cd the-wild-oasis
npm install
npm run dev
```

Add a `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_KEY=your_key
```

## Credits

Built following Jonas Schmedtmann's [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) on Udemy.
