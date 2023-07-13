import { useState } from "react";

function IterationComponent2() {
  const [list, setList] = useState([
    { id: 1, topic: "hello" },
    { id: 2, topic: "bye" },
  ]);

  // 2. input 데이터 state
  const [inputData, setInputData] = useState("");

  // 3. input데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  // 4. 클릭 이벤트 생성
  const handleClick = () => {
    // console.log(inputData);

    // id는 마지막 아이디보다 큰 숫자
    // console.log(list[list.length - 1].id + 1);
    const obj = [{ id: list[list.length - 1].id + 1, topic: inputData }];

    // 기존 배열에 합침
    // const newData = list.concat(obj);
    const newData = [...list, ...obj];
    setList(newData);
    setInputData(""); // 공백으로 초기화
  };

  // 5. 삭제 이벤트 - 삭제는 id가 필요
  const handleRemove = (id) => {
    console.log(id);

    // return에 true가 걸림 요소만 새로운 배열을 만듬
    // const result = list.filter((item, index) => {
    //   console.log(item);
    //   console.log(index);
    //   return item.id !== id;
    // });

    // 위위 같다..
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };

  /*
  handleremove가 실행 되기 전에 위치해 있어서 자리를 옮겨준다
  const newList = list.map((a) => (
    <li key={a.id} onDoubleClick={handleremove}>
      {a.topic}
    </li>
  ));
  */

  // 한번에 선언 해 준다
  const newList = list.map((item) => (
    <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>
      {item.topic}
    </li>
  ));

  return (
    <div>
      <h3>할일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData}></input>
      <button type="button" onClick={handleClick}>
        추가하기
      </button>
      <ul>{newList}</ul>
    </div>
  );
}

export default IterationComponent2;
