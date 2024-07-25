import { useState } from "react";
import { ProjectObjType } from "./types";

// 프로젝트 등록 or 수정 시 각 입력 필드에 작성한 데이터 저장
export const ProjectObj = () => {
    const [projName, setProjName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [manager, setManager] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [industryCodeID, setIndustryCodeID] = useState<number>(0);  // 숫자
    const [projCodeID, setProjCodeID] = useState<number>(0); // 숫자
    const [projStateID, setProjStateID] = useState<number>(0); // 숫자
    const [reqDate, setReqDate] = useState('');
    const [workAreaID, setWorkAreaID] = useState<number>(0); // 숫자
    const [workLocation, setWorkLocation] = useState('');
    const [workLocationDetail, setWorkLocationDetail] = useState('');
    const [essentialTech, setEssentialTech] = useState('');
    const [projRemark, setProjRemark] = useState('');
    const [projEtc, setProjEtc] = useState('');

    const ProjectData: ProjectObjType = {
        projName: projName,
        startDate: startDate,
        endDate: endDate,
        manager: manager,
        phoneNo: phoneNo,
        industryCode: {
            id: industryCodeID
        },
        projCode: {
            id: projCodeID
        },
        projState: {
            id: projStateID
        },
        workArea: {
            id: workAreaID
        },
        reqDate: reqDate,
        workLocation: workLocation,
        workLocationDetail: workLocationDetail,
        essentialTech: essentialTech,
        projRemark: projRemark,
        projEtc: projEtc
    }

    return {
        ProjectData,
        setProjName,
        setStartDate,
        setEndDate,
        setManager,
        setPhoneNo,
        setIndustryCodeID,
        setProjCodeID,
        setProjStateID,
        setReqDate,
        setWorkAreaID,
        setWorkLocation,
        setWorkLocationDetail,
        setEssentialTech,
        setProjRemark,
        setProjEtc
    }
}