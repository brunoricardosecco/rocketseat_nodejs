# To Test The Application 

### Clone repository
```
git clone https://github.com/brunoricardosecco/rocketseat_nodejs.git
```

### Install NPM
```
npm install
```

The MongoDB was install by Docker on default port 27017

### To install Docker on ArchLinux
```
sudo pacman -S docker
sudo su -
systemctl start docker
docker images
```
See if that works. And if it does, please add your user to the docker user group like this
```
sudo usermod -aG docker <username of your user>
```
