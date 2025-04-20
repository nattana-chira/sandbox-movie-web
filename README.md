# Getting Started

A sandbox project that clone Netflix homepage using **NextJs** as web frontend.  
Live demo: [https://sandbox-movie-web.vercel.app](https://sandbox-movie-web.vercel.app)    
  
** Sometimes, **Movie API is shut down due to inactivity**.  
** If webpage take long time to response, **wait for a minute and try refresh the page**

## 📦 Installation

First, copy .env file:
```bash
cp .env.example .env
```

Then install dependenceis:
```bash
npm install
```

Finally, run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.  
** This won't work unless you serve another project **sandbox-movie-web** as a backend API.  

## 🛠️ Tech Stack
  
- **TypeScript**  
- **Next.js**   
- **TailwindCSS**  
- **Headlessui** UI (modal)  
- **HeroIcons** icon asset  
- **Axios**  
- **Next-intl** locales translation  
- **Next-themes** light/dark theme  

## 📁 Project Structure
```bash
project/
├── public/                              # Public assets (images, locale json)
├── src/                                 # Source code
│   ├── app/                             # Auto route by NextJs project structure. Server component in app/ contains no logic
│   │   └── [locale]
│   │   │   └── page.tsx
│   ├── feature/                         # Group feature module by functionality
│   │   └── movie                        # All code related to Movie context
│   │       ├── application/             # Application layer contain movie use cases and how they are handled
│   │       │   └── movie.use-case.ts    
│   │       ├── domain/                  # Domain layer contain movie related entities and interface for movie use cases
│   │       │   ├── entity
│   │       │   └── movie.repository.ts    
│   │       ├── infrastructure/          # Infrastructure layer implment domain interface and act like a service to perform anything outside the app (API calls etc.)
│   │       │   ├── movie-api-service.ts
│   │       │   └── ...    
│   │       └── presentation/            # Presentation layer is any entry points controller and present how the application look (UI, UI functionalities) 
│   │           ├── SomeComponent.ts
│   │           └── useHook.ts   
│   ├── libs/                            # Utils & 3rd party libraries
│   │   ├── i18n/                        # i18n config files
│   │   │   ├── messages                 # i18n translations
│   │   │   └── ...   
│   │   ├── utils/                       # Common helper functions
│   │   └── axiosInstance/               # Config of axios instance
│   ├── ui/                              # UI Components those not belong to any particular feature
│   │   ├── components/                  # Common components (Button, Icon, Loading...)
│   │   └── pages/                       # Page components (The container component of any page)
│   │       ├── Homepage.tsx
│   │       └── ...
│   ├── config.ts                        # Constant variable (env)
│   └── middleware.ts                    # Middleware
├── .env.example                         # Example of .env file
...
```
