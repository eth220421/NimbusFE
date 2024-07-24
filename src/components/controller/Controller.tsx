import { ButtonArea, ControllerContainer, SearchArea } from "./styles";
import { BtnCRUD } from '../button/Button';
import { Link, useNavigate } from "react-router-dom";
import { InputDate, InputText } from "../input/Input";
import { useAgencyControllerEvents, useProjectControllerEvents } from "./events";
import { AgencyControllerType, ProjectControllerType } from "./types";
import { useState } from "react";

export const AgencyController = ({ setAgencys, checkedAgency }: AgencyControllerType) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const { handleRead, handleDelete } = useAgencyControllerEvents({ setAgencys, id, name, checkedAgency });

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

// 프로젝트 컨트롤러 (등록, 수정, 삭제, 조회 작업 수행)
export const ProjectController = ({ setProjects, checkedProjects }: ProjectControllerType) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { handleRead, handleDelete, handleUpdate } = useProjectControllerEvents({ setProjects, name, startDate, endDate, checkedProjects, navigate });

  return (
    <ControllerContainer>
      <SearchArea>
        프로젝트명 : &nbsp;
        <InputText width={'8rem'} value={name} onChange={(e) => setName(e.target.value)} />
        &nbsp;&nbsp;&nbsp;
        기간 : &nbsp;
        <InputDate width={'7rem'} value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
        &nbsp;~&nbsp;
        <InputDate width={'7rem'} value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
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
        <BtnCRUD value={'수정'} onClick={handleUpdate}/>
        <BtnCRUD value={'삭제'} onClick={handleDelete}/>
        <BtnCRUD value={'조회'} onClick={handleRead}/>
      </ButtonArea>
    </ControllerContainer>
  );
};
