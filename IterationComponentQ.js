import React, { useState } from "react";

function IterationComponentQ() {
  const arr = [
    { src: "/img/img1.png", title: "아이폰10", price: 1000 },
    { src: "/img/img2.png", title: "아이폰11", price: 2000 },
    { src: "/img/img3.png", title: "아이폰12", price: 3000 },
    { src: "/img/img4.png", title: "아이폰13", price: 4000 },
  ];

  /* 방법 1 */
  // 1. arr을 state로 관리
  const [list, setList] = useState(arr);

  // 2. img를 관리할 state 변수
  const [imgs, setImages] = useState("/img/img1.png");

  // 3. event handleClick
  const handleClick = (e) => {
    // console.log(e.target.tagName);
    // 이미지가 아니라면 종료
    if (e.target.tagName !== "IMG") {
      return;
    }
    setImages(e.target.src);
  };
  // 3. event
  const newList = list.map((item, index) => (
    <div key={index} onClick={handleClick}>
      <img src={item.src} with="100" alt={item.title} />
      <p>상품 : {item.title}</p>
      <p>가격 : {item.price}</p>
    </div>
  ));

  /* 방법 2 */
  // const handleChange = (src) => {
  //   setList(src);
  // };

  // const result = arr.map((item) => (
  //   <div key={item.src}>
  //     <img
  //       src={item.src}
  //       with="100"
  //       alt={item.title}
  //       onClick={() => handleChange(item.src)}
  //     />
  //     <p>{item.title}</p>
  //     <p>{item.price}</p>
  //   </div>
  // ));

  return (
    <div>
      <h3>실습</h3>

      <div>
        <img src={imgs} alt="제목"></img>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {newList}
      </div>
      {/* {result}
      {list && <img src={list} alt="Selected" />} */}
    </div>
  );
}

export default IterationComponentQ;
