import { useState } from "react";
import { AgencyObjType } from "./types";

// 입력값이 저장된 상태들을 AgencyData에 저장 후 리턴하는 역할
export const AgencyObj = () => {
    const [agencyName, setAgencyName] = useState('');
    const [relation, setRelation] = useState('');
    const [address, setAddress] = useState('');
    const [businessNum, setBusinessNum] = useState('');
    const [ceo, setCeo] = useState('');
    const [tel, setTel] = useState('');
    const [isUsed, setIsUsed] = useState(false);

    const AgencyData: AgencyObjType = {
        companyName: agencyName,
        relation: relation,
        address: address,
        businessNumber: businessNum,
        representative: ceo,
        phoneNumber: tel,
        active: isUsed
    }
    
    return {
        AgencyData,
        setAgencyName,
        setRelation,
        setAddress,
        setBusinessNum,
        setCeo,
        setTel,
        setIsUsed
    }
}