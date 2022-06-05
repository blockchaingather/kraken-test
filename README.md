# kraken-test

## 1. Clone the code

```bash
git clone this-project-code && cd this-project-code

```

## 2. Config .env

Copy .env.example file and rename it to .env. Then fill values in .env file.

```config=
MYSQL_HOST=localhost
MYSQL_USER=your mysql user
MYSQL_PASSWORD=your mysql password
MYSQL_DATABASE=your mysql database
MYSQL_PORT = your mysql port

```

## 3. create images

```bash
docker build -t kraken:test .
```

## 4. Run the project

```bash
    docker-compose up
```
