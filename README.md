# Smart Job Portal

A comprehensive MERN Stack web application where recruiters can post jobs and candidates can apply for them. The platform includes a Skill Assessment module with timed tests for automated candidate evaluation.

## Features

✅ **Secure Authentication** - JWT-based login and authorization
✅ **Role-Based Access Control** - Different permissions for recruiters and candidates
✅ **Job Management** - Recruiters can post, edit, and manage job postings
✅ **Job Applications** - Candidates can browse and apply for jobs
✅ **Skill Assessment** - Timed tests for automated candidate evaluation
✅ **Score Management** - Track and display candidate assessment scores
✅ **Dashboard** - Personalized dashboards for both recruiters and candidates

## Tech Stack

### Frontend
- **React.js** - UI framework
- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL Database
- **JWT** - Authentication & Authorization

### Database Models
- Users (Recruiters & Candidates)
- Jobs
- Applications
- Tests
- Scores

## Project Structure

```
job-portal/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── server/                 # Node.js Backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, validation, etc.
│   ├── config/             # Database config
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
npm start
```

### Frontend Setup

```bash
cd client
npm install
cp .env.example .env
# Update .env with your API endpoint
npm start
```

## Environment Variables

See `.env.example` files in both `client/` and `server/` directories.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create new job (Recruiter only)
- `PUT /api/jobs/:id` - Update job (Recruiter only)
- `DELETE /api/jobs/:id` - Delete job (Recruiter only)

### Applications
- `GET /api/applications` - Get applications
- `POST /api/applications` - Submit application
- `GET /api/applications/:id` - Get application details

### Assessments
- `GET /api/tests` - Get available tests
- `GET /api/tests/:id` - Get test details
- `POST /api/tests/:id/submit` - Submit test answers
- `GET /api/scores` - Get candidate scores

## Author

SujalAggarwal

## License

MIT
