sudo chown -R $USER:$(id -gn $USER) ./*  # this gives the host OS (and by that to the code editor u using) permissions to eddit the content of this folder

sudo docker build -t microservice_template_prod.image -f Dockerfile.dist . # build the image and names it 'microservice_template_prod.image'

docker rm -f microservice_template_prod.container &>/dev/null # remove the container in case its already exist. rm: remove, -f: force - in case the older version of this container is already exist and runing,

docker run --rm -itd --name microservice_template_prod.container -p 30002:3000 microservice_template_prod.image
# ↑↑ the comments below are for the command above ↑↑#
# docker run -itd : run the container seperatly from the cli. if the cli is closed the container keep on runing
#  --name microservice_template_prod.container : container's name
#  -p 30002:3000 : connect host's port 30002 to container's port 3000 (-p <host port>:<container port>)
#  microservice_template_prod.image : the image to run the container from
#  #bash #u can opptionaly specify a 'main' command for the contaienr runtime#  
#  #bash 

docker exec -it microservice_template_prod.container bash # log into the container cli
#
# docker exec : docker execute
# -it : 'i' means interactive, if u run a command and close the shell, the procces will keep on runing. 't' - i donk realy know, somthing with the output and 'TTY'
# my_node_app_dev.container : in what container to execute (select the container by that given name)
# bash : what to run, in this case, run a bash shell
#


