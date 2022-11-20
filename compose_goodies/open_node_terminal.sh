#!/bin/sh

docker exec -it task-back bash -c "export PS1='\e[0;32m\u@\h:\W$\e[m'; bash"