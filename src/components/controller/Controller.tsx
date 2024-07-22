import { ButtonArea, ControllerContainer, SearchArea } from "./styles";
import { BtnCRUD } from '../button/Button';
import { Link } from "react-router-dom";
import { InputText } from "../input/Input";

export const AgencyController = () => {
  return (
    <ControllerContainer>
      <SearchArea>
        소속사 ID : &nbsp;
        <InputText width={'4rem'} />
        &nbsp;&nbsp;&nbsp;
        소속사 이름 : &nbsp;
        <InputText width={'7rem'} />
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
        <BtnCRUD value={'삭제'}/>
        <BtnCRUD value={'조회'}/>
      </ButtonArea>
    </ControllerContainer>
  );
};

export const ProjectController = () => {
  return <div>ProjectController</div>;
};
