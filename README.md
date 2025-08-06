📘 College Auth System — Full Stack Project Documentation
Table of Contents
1.	Project Overview
2.	Tech Stack
3.	Project Structure
4.	How to Run the Project
5.	Frontend Setup (React)
6.	Backend Setup (Spring Boot)
7.	Database Configuration (MySQL)
8.	Feature Overview
9.	Key Code Explanations
10.	Future Improvements

✅ Project Overview
The College Auth System is a full-stack authentication and course management app. It allows users to register, login, and view course-related content securely. After logging in, the homepage adapts and shows a personalized profile with a logout option.

🛠️ Tech Stack
•	Frontend: React.js (with react-router-dom, carousel)
•	Backend: Spring Boot (Java)
•	Database: MySQL
•	Tools: Postman (for testing API), IntelliJ/Eclipse, VSCode, npm

<img width="731" height="1271" alt="Screenshot 2025-08-06 162445" src="https://github.com/user-attachments/assets/2c338b46-bf16-46ff-a45b-9a18160b7f30" />



▶️ How to Run the Project
Step 1: MySQL Setup
1.	Open MySQL.
2.	Run:

CREATE DATABASE college_auth;

Step 2: Spring Boot Backend Setup
1.	Open backend folder in IntelliJ or Eclipse.
2.	Configure application.properties:

spring.application.name=userLogin

server.port=8082
spring.datasource.url=jdbc:mysql://localhost:3306/college_auth
spring.datasource.username=root
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

3.	Run the Spring Boot app.
•	Endpoints:
o	POST /api/users/register
o	POST /api/users/login

Step 3: React Frontend Setup
1.	Navigate to the frontend folder:
bash
CopyEdit
cd frontend
2.	Install dependencies:
npm install
3.	Start React app:
npm start
•	Runs on: http://localhost:3000


✅ FRONTEND (React.js)
•	Create with:
npx create-react-app college-frontend
cd college-frontend

npm install axios react-router-dom











Run the program

first select the UserLoginApplication.java and run the springboot application

 

Open vscode and select the path is college-frontend
run by using 
npm start
 
Show on browser this page

<img width="940" height="483" alt="image" src="https://github.com/user-attachments/assets/e7587b09-2d75-41a2-bd06-9b4715ccaebd" />


 
After you registered then stored data in mysql 
 
<img width="940" height="425" alt="image" src="https://github.com/user-attachments/assets/9a6e879f-77a7-49d1-adb6-fbc878558baa" />



After register is successful
and click login button, 
type email and password

 <img width="940" height="403" alt="image" src="https://github.com/user-attachments/assets/0d25b3f7-5287-471a-8148-eec1eecb8707" />


Login is enter email and password
 


<img width="940" height="337" alt="image" src="https://github.com/user-attachments/assets/e4496e19-0408-4864-9639-6411554a07bb" />



After login is successful then redirect to homepage with profile.

<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/d2e27615-39ac-4aa6-8107-5ff3904b564c" />

 
NOTE: VSCODE AND SELECT  COLLEGEFRONTEND IN  FRONTEND , INSTALL NODE< NPM INSTALL>
