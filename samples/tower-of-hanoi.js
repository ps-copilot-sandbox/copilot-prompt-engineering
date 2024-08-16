// this function will take in a number of disks and return the minimum number of steps required to solve the puzzle
// Here are the rules of the puzzle:
// 1. There are three pegs(or towers), typically named A, B, and C.
// 2. There are n disks of different sizes, initially stacked in decreasing order of size on one peg, often referred to as the source peg (peg A).
// 3. The objective is to move all the disks from the source peg to a target peg (typically peg C), using the spare peg (peg B) as an auxiliary peg.
// 4. You can only move one disk at a time.
// 5. A larger disk cannot be placed on top of a smaller disk. In other words, the disks must always be in decreasing order of size from top to bottom on each peg.

function towerOfHanoi(disks, source, target, auxiliary) {
    if (disks === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    towerOfHanoi(disks - 1, source, auxiliary, target);
    console.log(`Move disk ${disks} from ${source} to ${target}`);
    towerOfHanoi(disks - 1, auxiliary, target, source);
}
  
module.exports = towerOfHanoi;