function IterationComponent() {
  const arr = [1, 2, 3, 4, 5];
  // const result = arr.map((val, idx, ar) => {
  //   console.log(val);
  //   console.log(idx);
  //   console.log(ar);

  //   return val * 10;
  // });
  // console.log(result); // [10, 20, 30, 40, 50]

  /* 한줄로... */
  // const result = arr.map((val) => val * 10)
  // console.log(result); // [10, 20, 30, 40, 50]

  /* map을 이용해서 태그 생성 
    key는 컴포넌트 반복 시에 고유하게 지정해야 하는 값이다
  */
  const result = arr.map((item, index) => <li key={index}>{item}</li>);

  const list = [
    { id: 1, title: "aaa123" },
    { id: 2, title: "bbb123" },
    { id: 3, title: "ccc123" },
  ];

  const result2 = list.map((a) => <option key={a.id}>{a.title}</option>);
  return (
    <div>
      <h3>컴포넌트 반복</h3>
      <ul>{result}</ul>
      <br />
      <h2>list의 title값을 컴포넌트 반복으로 값을 넣어라</h2>
      <select>{result2}</select>
    </div>
  );
}

export default IterationComponent;
