#!/bin/sh                                           #: add this comment in the biginnig of every script so both bash/sh can run it (if it not containig specific commands of one of them)*/
bash -c "export PS1='\e[0;32m\u@\h:\W$\e[m'; bash"  #:makes bash print in color    
bash -c "export PS1='\e[1;34m\u@\h:\W$\e[m'; bash"  #:other color for example