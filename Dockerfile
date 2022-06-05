from node:14
copy . /app/
workdir /app
run npm install
run chmod +x ./script/wait-for-it.sh