# Car Rental Project

A full-stack car rental management system with a Spring Boot backend and Angular frontend.

## Project Structure

```
car-rental-project/
│
├── car-rental-spring/    # Spring Boot backend (Java, Maven)
├── car-rental-angular/   # Angular frontend (TypeScript)
└── README.md             # This file
```

## Technology Stack

- **Backend:** Java 17, Spring Boot, Spring Data JPA, Spring Security, JWT, MySQL
- **Frontend:** Angular 17, ng-zorro-antd, TailwindCSS

---

## Backend Setup (Spring Boot)

### Prerequisites
- Java 17+
- Maven
- MySQL (or compatible database)

### Configuration
Edit `car-rental-spring/src/main/resources/application.properties` as needed:
```
spring.datasource.url=jdbc:mysql://localhost:3306/car_rental_db
spring.datasource.username=YOUR_DB_USER
spring.datasource.password=YOUR_DB_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
JWT_KEY=YOUR_SECRET_KEY
```

### Running the Backend
```bash
cd car-rental-spring
mvn spring-boot:run
```
The backend will start on [http://localhost:8080](http://localhost:8080).

---

## Frontend Setup (Angular)

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install Dependencies
```bash
cd car-rental-angular
npm install
```

### Running the Frontend
```bash
npm start
```
The frontend will start on [http://localhost:4200](http://localhost:4200).

### Useful Commands
- `ng build` — Build the Angular app
- `ng test` — Run unit tests
- `ng e2e` — Run end-to-end tests (after adding a suitable e2e package)

---

## Connecting Frontend & Backend
- Ensure the backend is running on port 8080 and the frontend on 4200.
- Update API URLs in the Angular app as needed to point to the backend (see your Angular service files for details).

---

## Additional Notes
- **Database:** Make sure your MySQL server is running and the database `car_rental_db` exists (or update the name in `application.properties`).
- **JWT Key:** Change the `JWT_KEY` in `application.properties` for production use.
- **Environment Variables:** For production, use environment variables or secrets management for sensitive data.

---

## License
This project is for educational purposes.
