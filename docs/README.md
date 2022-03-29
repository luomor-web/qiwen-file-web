```shell
cnpm install
npm run build
cd docker
cp -r ../dist .
sudo docker-compose build file-fe

sudo docker-compose up file-fe
sudo docker-compose up -d file-fe
sudo docker-compose stop file-fe
sudo docker-compose rm file-fe
```