FROM nginx

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone


RUN mkdir -p /etc/nginx/conf

RUN mkdir -p /home/file/web
WORKDIR /home/file/web

COPY dist .