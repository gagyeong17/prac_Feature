import React, { useState } from 'react'
import styled from 'styled-components'

const Writing = () => {
  const [select, setSelect] = useState([])
  console.log(select)

  const data = [
    {id: 1, title: '선택 1'},
    {id: 2, title: '선택 2'},
    {id: 3, title: '선택 3'},
    {id: 4, title: '선택 4'}
  ];
   // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setSelect(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setSelect(select.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setSelect(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setSelect([]);
    }
  }

   const onRemove = item => {
    setSelect(select.filter(el => el !== item));
  };
  return (
    <div >
       <StyledTable>
      <thead>
        <tr>
          <th>
            <input type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
              checked={select.length === data.length ? true : false} />
          </th>
          <th className='second-row'>목록</th>
        </tr>
      </thead>
      <tbody>
            {data?.map((data, key) => (
          <>
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                checked={select.includes(data.id) ? true : false} />
            </td>
            <td className='second-row'>{data.title}</td>
                </tr>
                {/* <div onClick={() => { onRemove(data) }}>삭제</div> */}
              </>
        ))}
      </tbody>
      </StyledTable>
    
    </div>

  )
}

const StyledTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  thead{
    tr{
      th{
        padding: 10px 15px;
        background-color: #888;
        color: #fff;
        font-weight: 700;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 7px 15px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .second-row{
    width: 150px;
  }
`;
export default Writing