# kraken-test

## 1. Clone the code

```bash
git clone this-project-code && cd this-project-code

```

## 2. Config .env

Copy .env.example file and rename it to .env. Then fill values in .env file.

```config=
MYSQL_HOST=172.17.0.1
MYSQL_USER=your mysql user
MYSQL_PASSWORD=your mysql password
MYSQL_DATABASE=your mysql database
MYSQL_PORT = 3306
```

Notice: Please make sure your MYSQL_HOST(docker host) is correct.

## 3. Create images

Firstly, run your docker, then

```bash
docker build -t kraken:test .
```

## 4. Run the project

```bash
docker-compose up
```
Results below：
```
kraken-test | Deposited for Wesley Crusher: count=35 sum=183
kraken-test | Deposited for Leonard McCoy: count=18 sum=97
kraken-test | Deposited for Jonathan Archer: count=30 sum=143.95
kraken-test | Deposited for Jadzia Dax: count=16 sum=77.48
kraken-test | Deposited for Montgomery Scott: count=27 sum=131.93253
kraken-test | Deposited for James T. Kirk: count=22 sum=1210.6005826899998
kraken-test | Deposited for Spock: count=18 sum=877.6408870999999
kraken-test | Deposited for Deposited without reference: count=52 sum=-238.21665948
kraken-test | Smallest valid deposit: -95.89564379
kraken-test | Largest valid deposit: 99.61064066
```
