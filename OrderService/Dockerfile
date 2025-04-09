# build the application
FROM openjdk:17-slim AS build
WORKDIR /app

COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
COPY src src

# Give permission to Maven wrapper
RUN chmod +x ./mvnw
# Build the project
RUN ./mvnw clean package -DskipTests

# Run 
FROM openjdk:17-slim
WORKDIR /app
ENV SPRING_PROFILES_ACTIVE=prod
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8082

ENTRYPOINT ["java","-jar","app.jar"]
# This defines the command that runs when the container starts: it runs the built Spring Boot app.





# -DskipTests : Compile the tests, But don't run them during the build process.