#!/bin/sh
# !!! if u have any http request level test, make sure the port is right 

# look for arguments
for var in "$@"
do
    case "${var}" in
        no-build) noBuild="no-build";;
    esac
done

# r: run command   i: image name   c: container name   p: port 
/bin/bash ./run.sh -r "bash scripts/inside_dev.sh" -c native_container -i native_image -p 3000 $noBuild

# open new terminal and run :
# docker container exec -it run_ts_container bash
