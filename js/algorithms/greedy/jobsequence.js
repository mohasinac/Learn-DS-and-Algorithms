/*
    Job Sequencing with Deadlines

     A bunch of jobs j1,j2 ... jn and a profit[i] be profit of job i
     every job takes 1 unit of time to complete
     every job has a deadline dl[i] for job i

     objective is maximize profit

     1. find largest value of the deadline say l
     2. create an array D with this deadlines 1... l // this is called Gantt chart
     3. find max profit and fill its  D  with it
     4.  try to finish high profitable job as late as possible
     5. if a slot is filled , then we got back 1 slot at a time and fill it, if we cannot them we drop it

     O(n^2)
*/