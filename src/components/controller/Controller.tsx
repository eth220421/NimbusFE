import { ButtonArea, ControllerContainer, SearchArea } from "./styles";
import { BtnCRUD } from '../button/Button';
import { Link } from "react-router-dom";
import { InputText } from "../input/Input";
import { useControllerEvents } from "./events";
import { AgencyControllerType } from "./types";
import { useState } from "react";

export const AgencyController = ({ setAgencys, checkedAgency }: AgencyControllerType) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const { handleRead, handleDelete } = useControllerEvents({ setAgencys, id, name, checkedAgency });

  return (
    <ControllerContainer>
      <SearchArea>
        소속사 ID : &nbsp;
        <InputText width={'4rem'} value={id} onChange={(e) => setId(e.target.value)}/>
        &nbsp;&nbsp;&nbsp;
        소속사 이름 : &nbsp;
        <InputText width={'7rem'} value={name} onChange={(e) => setName(e.target.value)} />
      </SearchArea>
      <ButtonArea>
        <Link
          to={'./popup'}
          state={{
            title: '등록',
            valueApply: '등록신청'
          }}
        >
          <BtnCRUD value={'신규'}/>
        </Link>
        <Link
          to={'./popup'}
          state={{
            title: '수정',
            valueApply: '수정'
          }}
        >
          <BtnCRUD value={'수정'}/>
        </Link>
        <BtnCRUD value={'삭제'} onClick={handleDelete}/>
        <BtnCRUD value={'조회'} onClick={handleRead} />
      </ButtonArea>
    </ControllerContainer>
  );
};

export const ProjectController = () => {
  return <div>ProjectController</div>;
};
