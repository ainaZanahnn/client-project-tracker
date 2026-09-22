# CLIENT PROJECT TRACKER


## 1. TECH STACK

### Database: PostgreSQL

### Backend: Node.js + Express.

**Justification:** I used Node.js and Express because I have more practical experience with these tech 

### Frontend: React + vite + TypeScript 

**Justification:** I used React, vite with TypeScript because it is the frontend framework I more comfortable compare to Angular or SvelteKit

### Tetsting: vitest + Supertest

### Development: Docker Compose

**Justification:** Used for run PostgreSQL (frontend and backend are run locally using Node.js and npm due to lack of time from my side)


## 2. ARCHITECTURE

### Backend layer: 

Route -> middleware -> controller -> service -> repository -> DB

### Frontend layer: 

Pages -> components -> API services -> Backend API


## 3. SETUP INSTRUCTION

### 1. CLone repository

git clone <repository-url> 
cd client-project-tracker

### 2. Configure Environment

create .env file in the project root (use .env.example from th root folder)

Create a .env file inside the backend folder (use .env.example from the backend folder)

**! .env.example is only an example !**

### 3. Start PostgreSQL

(databse and seeder fiel automatically executed during this setup)

- From the project root: docker compose up -d
- Verify conatiner running: docker compose ps

(if want to reset database and run the seeder again)

- docker compose down -v 
- docker compose up -d

### 4. Install and Start Backend

- cd backend
- npm install
- npm run dev

### 5. Install and Start frontend

- cd frontend 
- npm install
- npm run dev

### 6. Run API Test

- cd backend
- npm test


## 4. PROJECT STATUS

1. PostgreSQL Database         ✅ - db schema and seed data (initiliaze via docker compose)
2. Project List API            ✅ 
3. Create Project API          ✅ 
4. Update Project API          ✅
5. Delete Project API          ✅
6. Task Listing API            ✅
7. Task Status Filter API      ✅
8. Mark Task As Completed      ✅
9. Backend API Testing         ✅  - 3 TEST representing create, update and retrive
10. Project Page               ✅
11. Project Detail Page (task) ✅
12. Create Project UI          ❌
13. Edit Project UI            ❌
14. Delete Project UI          ❌
15. README                     ✅      


## 5. THE OUTCOME 

project list -> select project -> view project tasks - > filter tasks by status -> mark task as completed

## 5. THE TESTING 

I chose these tests because they cover three important parts of the application's core workflow (cover different API operation) which is retrieving and filtering data, modifying existing data, and creating new data.

1. Filter tasks by status and pagination
2. Mark task as complete
3. Create project

## 6. AI USAGE 

AI tools were used as a development aid during the assignment, mainly for:

1. Brainstorming ideas
2. Generate suitable SQL queries fro repository
3. Generate schema queries and appropriate ammount of seeder data
4. Get recommendation for suitable backend automated testing packages (vitest + supertest)
5. Assist in frontend styling (css)
6. Assist in frontend for components and pages. 

### AI Tool: chatgpt

**Justification:** ChatGPT was used as my available AI development assistant during the assignment. I had previously used Claude Code during internship, but my subscription was no longer active.


## 7. REMAINING WORK & NEXT STEPS

With the six-hour time limit, I prioritised completing and testing the core backend APIs and implementing the main frontend functionality. Some frontend features and UI elements remain unimplemented and were not completed within the available time. Therefore the next steps that i will take are: 

### Create Project
1. Types: Add CreateProjectData type.
2. API Service: Add createProject() to projectApi.ts.
3. Component: Build CreateProjectForm.tsx.
4. Page/App: Integrate the form into the project page through App.tsx.
5. UI: Add validation, loading/error handling, and styling in App.css.

### Update Project
1. API Service: Add updateProject() to projectApi.ts.
2. Component: Add edit form/action to the project components.
3. Page/App: Connect the selected project to the edit flow.
4. UI: Add validation and styling.

### Delete Project
1. API Service: Add deleteProject() to projectApi.ts.
2. Component: Add delete action and confirmation.
3. Page/App: Update the project list after successful deletion.
4. UI: Add appropriate button and feedback states.

### Task Pagination
1. Types: Use the existing TaskPagination type.
2. API Service: Pass the selected page to getTasksByProject().
3. Component: Add pagination controls.
4. Page: Manage page state in projectDetailPage.tsx.
5. UI: Add Previous/Next controls and page indicators.

### UI & Testing
- UI: Refine App.css and index.css.
- Test: frontend-to-backend flows.
