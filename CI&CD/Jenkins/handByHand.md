# jenkins 使用记录

## 设备

- centos7 64bit
- 1Gb RAM
- 26GB SSD

## 安装

### 安装 docker

```
# 安装 yum-utils
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
# install docker engine
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
# start docker
sudo systemctl start docker
# 验证docker是否正常安装
sudo docker run hello-world
```

### jenkins 安装

```
# install jenkins from docker
docker pull jenkins/jenkins
# usage
docker run -p 8080:8080 -p 50000:50000 --restart=on-failure -v jenkins_home:/var/jenkins_home jenkins/jenkins
# 运行成功会给你一个管理员密码
# e.g. 3188a780a4364ccd84ccf8a259188eddd1
# 查看jenkins是否正常运行
docker ps
# 如果没有正常运行可以手动启动一下
docker start great_swirles
# 接着去访问你的ip:8080端口，去初始化jenkins
```

# 参考文章

[install docker engine on centos](https://docs.docker.com/engine/install/centos/)
[official jenkins docker image](https://github.com/jenkinsci/docker/blob/master/README.md)
