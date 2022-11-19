k get pods # it is like docker ps / docker container ls. ?is 'k get pods -a' is like ' d ls -a '
k exec -it <pod_name> <command> # (for pods with one container): 
# execute <command> inside the container running in pod with the name <pod_name>
# -it means "while running that command, connect the container's stdin & stdout to this shell"
# from k8s official site : If a Pod has more than one container, use --container or -c to specify a container in the kubectl exec
# see https://kubernetes.io/docs/tasks/debug-application-cluster/get-shell-running-container/
k logs <pod_name> # print all logs from a pod with the name <pod_name> to shell (the shell we wrote that command in)
k delete pod <pod_name> # delete the pod with the name <pod_name>
k apply -f <path_to_YAML_file> # what ever k8s object description inside this file - just rum them