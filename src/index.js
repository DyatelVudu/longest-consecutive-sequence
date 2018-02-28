module.exports = function longestConsecutiveLength(array) {
  if(array.length <= 1 ) return array.length;
  let res = 0;
  let tmp = 1;
  array.sort((x,y) => x-y).forEach((el, i, arr) => {
      let d = el - arr[i-1];
      if(d === 1){
        tmp++;
      } else if(d > 1){
        res = (tmp>res)? tmp : res ;
        tmp = 1;
      }
  });
  return res;
}
