# BAC Frontend

A modern web application built with React, TypeScript, and Vite for the BAC management system.

## 🚀 Features

- **React 19** with TypeScript for robust development
- **Vite** for fast build and HMR
- **Tailwind CSS** for modern and responsive styling
- **Shadcn/ui** for consistent UI components
- **React Router** for navigation
- **Redux Toolkit** for state management
- **React Hook Form** with Zod for validations
- **Vitest** for testing
- **ESLint** and **TypeScript** for code quality

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd BAC-frontend
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Start the development server**
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (shadcn/ui)
│   ├── layouts/        # Application layouts
│   └── form/           # Form components
├── modules/            # Application modules
│   ├── authentication/ # Authentication and login
│   ├── dashboard/      # Main dashboard
│   ├── user/           # User management
│   ├── inquiries/      # Queries and reports
│   └── design/         # Design page
├── store/              # Redux store and slices
├── router/             # Route configuration
├── hooks/              # Custom hooks
├── utils/              # Utilities and helpers
└── types/              # TypeScript type definitions
```

## 🧪 Testing

Run tests with:
```bash
pnpm test
```

For tests in watch mode:
```bash
pnpm test:watch
```

## 🏗️ Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the application for production
- `pnpm preview` - Previews the production build
- `pnpm test` - Runs tests
- `pnpm lint` - Runs ESLint

## 🎨 Main Technologies

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Testing Library
- **Package Manager**: pnpm

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the project root:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=BAC Frontend
```

### ESLint
The project includes ESLint configuration with specific rules for TypeScript and React.

## 📱 Main Modules

### 🔐 Authentication
- Login with validation
- Password recovery
- Specific authentication layouts

### 👥 User Management
- User list
- User creation and editing
- Roles and permissions

### 📊 Queries and Reports
- Reusable reports table
- Advanced filters
- Data export

### 🎨 Dashboard
- Main panel with metrics
- Charts and visualizations
- Customizable configuration

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 🆘 Support

For technical support or questions about the project, contact the development team.
