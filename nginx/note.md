# nginx

- high performance
- high concurrency
- low resource usage
- do not need to involve any server languages

## Linux Package Manager

- Quick & Easy
- Limited install options
- No support for additional modules

# centos 7 install nginx

## install nginx with yum

```bash
yum install epel-release
yum -y update
yum install -y nginx
sudo systemctl start nginx
# if nginx don't start successfully, then check the firewall
# open ports 80
firewall-cmd --list-all
firewall-cmd --add-port=80/tcp --permanent
firewall-cmd --reload
```

## install nginx from source code & modules

install nginx from source code enable us to use custom modules

```bash
# go to the nginx.org/en/download.html to get the Mainline version link: e.g. https://nginx.org/download/nginx-1.23.1.tar.gz
curl https://nginx.org/download/nginx-1.23.1.tar.gz
tar -zxvf nginx-1.23.1.tar.gz
cd nginx-1.23.1
./configure
# then you will see the erros, so we need to install packages that nginx needs.
yum groupinstall "Development Tools"
# if you get errors by using command under this note, you can install those packages independently, because some packages you may installed previously.
yum install pcre pcre-devel zlib zlib-devel openssl openssl-devel
# use custom modules
./configure --sbin-path=/usr/bin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --with-pcre  --pid-path=/var/run/nginx.pid --with-http_ssl_module
# type make
make
# type make install
make install
```

## systemd

- start, stop, restart
- reload(configuration)
- start on boot

```bash
nginx -h
nginx -s stop # send message to nginx
# start stop and reload nginx with system d
# follow this link to operate
https://www.nginx.com/nginx-wiki/build/dirhtml/start/topics/examples/systemd/
systemctl start nginx
ps aux | grep nginx
# start on boot
systemctl enable nginx
```

# configuration

## understand configuration terms

- context
  - Context are the enviroment for its child.
- Directive
  - Configuration options in Nginx are known as directives. This option has name and parameters, and this must end with a semicolon (;) otherwise Nginx will fail to load the configuration and produce an error.

## configuration

main configuration file: /etc/nginx/nginx.conf

### types & include

```conf
# /etc/nginx/mime.types 里面有nginx支持的文件类型
events {

}

http {
  # it means set file suffix with nginx mime types automaticaly
  include mime.types;

  # set content-type for file suffix custom
  types {
    text/html html;
    text/css css;
  }

  server {
    listen 80;
    server_name 23.94.0.105;

    root /sites/demo;
  }
}
```

### location

the most used context in nginx
