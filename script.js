// შევქმნათ ფუნქცია რომელსაც გადაეცემა სტრინგი არეული ასოებით დიდი და
// პატარა, ფუნქციამ უნდა დაგვიბრუნოს ყველა სიტყვა პატარა ასოთი მაგრამ
// პირველი ასო უნდა იყოს დიდი, მაგალითად ჩავაწოდეთ: heLLO wOrlD, ფუნქციამ
// უნდა დააბრუნოს Hello World

function firstToUppercase(str) {
  const strLower = str.toLowerCase().split(" ");
  let res = "";
  for (let i = 0; i < strLower.length; i++) {
    res +=
      strLower[i][0].toUpperCase() +
      strLower[i].slice(1, strLower[i].length) +
      " ";
  }
  return res;
}
console.log(firstToUppercase("heLLO wOrlD"));
