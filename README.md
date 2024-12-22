# Health Management App

A health tracking application built with React

## Features

- Body metrics tracking
- Exercise recording
- Personal record
- Meal tracking
- Responsive design
- Authentication system
- Health articles and columns

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

Clone the repository
```sh
git clone https://github.com/danhnguyen1203/arent_test.git
cd arent_test
npm install
npm run dev
```

The application will be available at http://localhost:5173

## Project structure
```sh
src/
├── assets/
├── components/
│   ├── common/          # Reusable components
│   ├── features/        # Feature-specific components
│   │   ├── topPage/
│   │   ├── records/
│   │   └── column/
│   └── layout/          # Layout components
├── constants/
├── data/                # Mock data
├── hooks/
│   └── queries/         # React Query hooks
├── pages/
│   ├── TopPage.jsx
│   ├── MyRecordPage.jsx
│   └── ColumnPage.jsx
├── routes/             # Config types of route (protected route,...)
└── services/
    └── api/            # API services
    └── apiClient.js    # Common API Client
```

## Technologies used

- React 18
- React Query (TanStack Query)
- Tailwind CSS
- Recharts (for graphs)
- React Icons

## Authentication

For development purposes:
- Email: any email
- Password: any password

## Contact
Danh Nguyen - danhnguyen1998@gmail.com
