
sudo chown -R $USER:$(id -gn $USER) ./* # this gives the host OS (and by that to the code editor u using) permissions to eddit the content of this folder

sudo docker build -t microservice_template_dev.image ./development # build the image and names it 'microservice_template_dev.image'

docker rm -f microservice_template_dev.container &>/dev/null # remove the container in case its already exist. rm: remove, -f: force - in case the older version of this container is already exist and runing

docker run -itd --name microservice_template_dev.container -p 30001:3000 -v ${PWD}:/app microservice_template_dev.image 
# ↑↑ the comments below are for the command above ↑↑#
#  docker run -itd : run the container seperatly from the cli. if the cli is closed the container keep on runing
#  --name microservice_template_dev.container : container's name
#  -p 30001:3000 : connect host's port 30001 to container's port 3000 (-p <host port>:<container port>)
#  -v ${PWD}:/app : mount the current directory (the one considerd as pwd when runing this command) into the container app folder
#  microservice_template_dev.image : the image to run the container from
#  #bash #u can opptionaly specify a 'main' command for the contaienr runtime#  
#  #bash 
#

docker exec -it microservice_template_dev.container bash -c 'cd development && npm run dev'  # connect to a cli inside the container and run: 'npm run dev'
# docker exec -it microservice_template_dev.container bash  # connect to a cli inside the container
# if, insted of the two options above, u would like to open a vs-code remote container, see https://code.visualstudio.com/docs/remote/attach-container

#
# docker exec : docker execute
# -it : 'i' means interactive, if u run a command and close the shell, the procces will keep on runing. 't' - i donk realy know, somthing with the output and 'TTY'
# microservice_template_dev.container : in what container to execute (select the container by that given name)
# bash : what to run, in this case, run a bash shell
#

