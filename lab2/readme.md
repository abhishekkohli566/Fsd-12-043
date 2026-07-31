# file system (fs  module )

fs module directly communicate with operating system rather than browser the common operation on a file or folder are
1. file --> rightFile,readFile,appendFile
2. folder --> rmdir/rm,readdir,mkdir/md
3. filestat-->stat,lstat,rstat
4. watch--> watchh unwatch
5.stream--> readstream(),writeStream()
 all function are promise so it mut called with await keyword 