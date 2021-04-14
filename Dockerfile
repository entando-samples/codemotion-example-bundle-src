FROM maven:3-openjdk-11 as builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
FROM entando/entando-alpine-base:6.0.0
ARG JAR_FILE=/app/target/*.jar
COPY --from=builder ${JAR_FILE} app.jar
EXPOSE 8081
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS
ENV JHIPSTER_SLEEP=0
ENTRYPOINT ["java","-jar","-noverify", "-XX:+AlwaysPreTouch", "-Djava.security.egd=file:/dev/./urandom","/app.jar"]
