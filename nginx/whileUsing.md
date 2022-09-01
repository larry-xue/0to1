# nginx

## root

if a child context has a root directive, it will overwrite its parent root, and other location's root would not be affected.

## proxy_pass

```conf
# proxy_pass directive
location /pass {
  proxy_pass: https://www.baidu.com
}
# https://www.baidu.com/pass
```

## docker

- nginx:alpine
- conf file in /etc/nginx/conf.d/default.conf
- the /etc/nginx/nginx.conf is empty
- nginx.conf will include default.conf
