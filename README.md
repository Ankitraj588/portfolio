# Portfolio Blogging Platform

A full-stack web application combining a personal portfolio with a blogging platform. Built with React, Django, and PostgreSQL, deployed on Vercel (frontend) and Render (backend).

## 🌟 Features

- **Personal Portfolio**: Showcase projects and professional information
- **Blogging Platform**: Create, read, update, and delete blog posts
- **User Authentication**: Secure login and registration system
- **Contact Form**: Get in touch directly through the platform
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **REST API**: Well-structured backend API for data management
- **Database**: PostgreSQL for reliable data persistence

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **Lucide React** - Icon library
- **JavaScript (ES modules)**

### Backend
- **Django 5.2** - Web framework
- **Django REST Framework** - API development
- **Django CORS Headers** - Cross-origin resource sharing
- **PostgreSQL** - Database (via psycopg)
- **Gunicorn** - WSGI HTTP Server

### DevTools
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixes
- **gh-pages** - GitHub Pages deployment

## 📁 Project Structure

```
portfolio-blogging/
├── frontend/                    # React application
│   ├── src/
│   │   ├── pages/             # Page components (Home, Blog, About, Project, Contact, Auth)
│   │   ├── api/               # API integration layer
│   │   ├── context/           # React Context for state management
│   │   ├── data/              # Static data files
│   │   ├── assets/            # Images and static files
│   │   ├── App.jsx            # Main component
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
│
├── backend/                     # Django application
│   ├── accounts/              # User authentication app
│   │   ├── models.py
│   │   ├── views.py
│   │   └── migrations/
│   ├── blogs/                 # Blog management app
│   │   ├── models.py          # Blog post model
│   │   ├── serializers.py     # DRF serializers
│   │   ├── views.py           # API views
│   │   ├── urls.py
│   │   └── migrations/
│   ├── backend/               # Main project configuration
│   │   ├── settings.py        # Django settings
│   │   ├── urls.py            # URL routing
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env                   # Environment variables (not committed)
│   └── vercel.json            # Vercel deployment config
│
└── README.md                  # This file
```

## 📋 Prerequisites

- **Node.js** (v18+) and npm
- **Python** (v3.10+)
- **PostgreSQL** (v12+) or access to a PostgreSQL database
- Git

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone <repository-url>
cd portfolio-blogging
```

### Backend Setup

1. **Create and activate virtual environment**:
   ```bash
   cd backend
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment variables**:
   Create a `.env` file in the `backend/` directory:
   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_blogging
   ALLOWED_HOSTS=localhost,127.0.0.1
   CORS_ALLOWED_ORIGINS=http://localhost:5173
   ```

4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Create superuser** (optional, for admin panel):
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server**:
   ```bash
   python manage.py runserver
   ```
   Backend will run on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 🏃 Running Locally

To run both frontend and backend concurrently:

**Terminal 1 - Backend**:
```bash
cd backend
python manage.py runserver
```

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser to access the application.

## 🔨 Build Commands

### Frontend

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Backend

```bash
# Collect static files
python manage.py collectstatic

# Run tests
python manage.py test

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Database operations
python migrate_db.py
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout
- `GET /api/auth/user/` - Get current user

### Blog Posts
- `GET /api/blogs/` - Get all blog posts
- `GET /api/blogs/<id>/` - Get specific blog post
- `POST /api/blogs/` - Create new blog post (authenticated)
- `PUT /api/blogs/<id>/` - Update blog post (authenticated)
- `DELETE /api/blogs/<id>/` - Delete blog post (authenticated)

### Contact
- `POST /api/contact/` - Send contact form message

For complete API documentation, refer to the Django REST Framework documentation at `http://localhost:8000/api/` when running locally.

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory: `dist`
4. Add environment variables for API endpoints
5. Deploy

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `pip install -r requirements.txt && python manage.py migrate`
4. Set the start command: `gunicorn backend.wsgi`
5. Add environment variables (SECRET_KEY, DATABASE_URL, etc.)
6. Deploy

## 📝 Environment Variables

### Backend (.env)
```env
SECRET_KEY=your-django-secret-key
DEBUG=False
DATABASE_URL=postgresql://user:password@host:port/dbname
ALLOWED_HOSTS=yourdomain.com,localhost
CORS_ALLOWED_ORIGINS=https://yourdomain.com,http://localhost:5173
```

### Frontend
Environment variables can be added in `.env` or configured through Vite's `.env` files

## 📦 Dependencies

### Frontend Dependencies
See [frontend/package.json](frontend/package.json)

### Backend Dependencies
See [backend/requirements.txt](backend/requirements.txt)

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend's `CORS_ALLOWED_ORIGINS` includes your frontend URL
- Check Django's `ALLOWED_HOSTS` setting

### Database Connection Issues
- Verify PostgreSQL is running
- Check `DATABASE_URL` environment variable
- Ensure database exists and credentials are correct

### Frontend Not Connecting to Backend
- Verify backend is running on the correct port
- Check API endpoints in frontend configuration
- Review browser console for error messages

### Port Already in Use
- Backend: Change port with `python manage.py runserver 8001`
- Frontend: Change port with `npm run dev -- --port 5174`

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contact

For questions or suggestions, use the contact form in the application or reach out directly.

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Django Documentation](https://docs.djangoproject.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Django REST Framework Documentation](https://www.django-rest-framework.org)

---

**Last Updated**: August 2026
