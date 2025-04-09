
# TCF Cafe - Full Stack Project

## Overview

TCF Cafe is a full-stack application designed to practice load balancing concepts with a microservices architecture. The project includes a backend built with **Spring Boot**, a frontend developed using **React JS**, and a **MySQL** database. The application leverages microservices architecture to manage various modules of the cafe system, with load balancing implemented to ensure high availability and scalability.

## Features

- **Spring Boot Backend**:
  - Microservices-based architecture with multiple modules (e.g., user management, menu management, order management).
  - Integration with **MySQL** for data storage and persistence.
  - RESTful API endpoints for frontend communication.

- **React JS Frontend**:
  - Interactive user interface for managing the cafe's menu, placing orders, and handling user accounts.
  - User authentication and session management.

- **MySQL Database**:
  - Store data related to users, orders, and menu items.
  - Relationship management between different entities.

- **Load Balancing**:
  - Load balancing setup to distribute traffic evenly across multiple instances of the backend services.
  - Ensures high availability and fault tolerance of the application.

## Technologies Used

- **Backend**: Spring Boot, MySQL
- **Frontend**: React JS
- **Database**: MySQL
- **Load Balancing**: Nginx (or any other load balancer you prefer)
- **Microservices Architecture**: Independent, loosely coupled services.

## Setup & Installation

### Prerequisites

- **Java 8+**: Required to run the Spring Boot backend.
- **Node.js**: Required for the React JS frontend.
- **MySQL**: Required for the database.
- **Nginx** (optional): For load balancing the backend services.

### Clone the repository

```bash
git clone https://github.com/yourusername/tcf-cafe.git
cd tcf-cafe
```

### Backend Setup (Spring Boot)

1. **Navigate to the Spring Boot directory**:

   ```bash
   cd backend
   ```

2. **Install dependencies** (if using Maven):

   ```bash
   mvn clean install
   ```

3. **Configure MySQL database**:
   - Update the `application.properties` or `application.yml` file with your MySQL credentials.

4. **Run the Spring Boot application**:

   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup (React JS)

1. **Navigate to the React frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the React application**:

   ```bash
   npm start
   ```

### Load Balancing (Optional)

If you want to configure load balancing for your backend services, you can use **Nginx** or any other load balancer.

1. **Install Nginx** on your system.
2. **Configure Nginx** to balance traffic between multiple backend instances.

Example configuration (`nginx.conf`):

```nginx
http {
    upstream backend {
        server backend1.example.com;
        server backend2.example.com;
    }

    server {
        location / {
            proxy_pass http://backend;
        }
    }
}
```

3. **Restart Nginx** after making changes to the configuration:

```bash
sudo service nginx restart
```

## Usage

1. **Frontend**: Open your browser and go to `http://localhost:3000` to access the cafe’s interface.
2. **Backend**: The API endpoints are available at `http://localhost:8080` by default.

## API Endpoints

- **User Management**:
  - `POST /api/users/register`: Register a new user.
  - `POST /api/users/login`: Login a user.

- **Menu Management**:
  - `GET /api/menu`: Retrieve the list of menu items.
  - `POST /api/menu`: Add a new menu item.
  - `PUT /api/menu/{id}`: Update a menu item.

- **Order Management**:
  - `POST /api/orders`: Place a new order.
  - `GET /api/orders/{userId}`: Retrieve orders by user.

## Running Multiple Instances for Load Balancing

To simulate load balancing, you can run multiple instances of the backend:

1. **Start another instance** on a different port by setting the `server.port` in `application.properties`:

   ```properties
   server.port=8081
   ```

2. **Run the second instance**:

   ```bash
   mvn spring-boot:run
   ```

3. **Configure Nginx or another load balancer** to distribute the load between the two instances.

## Contributing

Feel free to fork the repository and submit pull requests. Make sure to follow the project's coding conventions and add tests for any new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
