import React, { useEffect, useState } from "react";
import addressApi from "../api/addressApi";
import { Select, Form } from "antd";

const { Option } = Select;

const AddressPicker = (props: any) => {
  const [provinces, setProvinces] = useState<any>([]);
  const [provinceCode, setProvinceCode] = useState<number>();
  const [districts, setDistricts] = useState<any>([]);
  const [districtCode, setDistrictCode] = useState<number>();
  const [wardCode, setWardCode] = useState<number>();
  const [wards, setWards] = useState<any>([]);

  const { handleProvince, handleDistrict, handleWard } = props;
  const getCurrentProvince = () => {
    if (provinceCode) {
      const currentProvince = provinces.find(
        (province: any) => province.code === provinceCode
      );
      handleProvince(currentProvince.name);
    }
  };
  const getCurrentDistrict = () => {
    if (districtCode) {
      const currentDistrict = districts.find(
        (district: any) => district.code === districtCode
      );
      handleDistrict(currentDistrict.name);
    }
  };
  const getCurrentWard = () => {
    if (wardCode) {
      const currentWard = wards.find((ward: any) => ward.code === wardCode);
      handleWard(currentWard.name);
    }
  };

  const fetchProvinces = async () => {
    const response: any = await addressApi.get("/p").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const fetchDistricts = async () => {
    const response: any = await addressApi
      .get(`/p/${provinceCode}?depth=2`)
      .catch((err) => {
        console.log(err);
      });
    if (response) return response.data.districts;
  };
  const fetchWards = async () => {
    const response: any = await addressApi
      .get(`/d/${districtCode}?depth=2`)
      .catch((err) => console.log(err));
    if (response) return response.data.wards;
  };
  useEffect(() => {
    const getAllProvinces = async () => {
      const allProvinces = await fetchProvinces();
      if (allProvinces) setProvinces(allProvinces);
    };
    getAllProvinces();
  }, []);
  useEffect(() => {
    const getDistricts = async () => {
      const allDistricts = await fetchDistricts();
      if (allDistricts) setDistricts(allDistricts);
    };

    getDistricts();
    getCurrentProvince();
  }, [provinceCode]);
  useEffect(() => {
    const getAllWards = async () => {
      const allWards = await fetchWards();
      if (allWards) setWards(allWards);
    };
    getAllWards();
    getCurrentDistrict();
  }, [districtCode]);
  useEffect(() => {
    getCurrentWard();
  }, [wardCode]);

  return (
    <>
      <Form.Item
        name="address"
        label="Province"
        rules={[
          {
            required: true,
            message: "Please pick your province!",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Province..."
          defaultActiveFirstOption={true}
          onChange={(value: number) => setProvinceCode(value)}
        >
          {provinces
            ? provinces.map((province: any) => {
                return <Option value={province.code}>{province.name}</Option>;
              })
            : null}
        </Select>

        <Select
          showSearch
          placeholder="District..."
          defaultActiveFirstOption={true}
          onChange={(value: number) => setDistrictCode(value)}
        >
          {districts
            ? districts.map((district: any) => {
                return <Option value={district.code}>{district.name}</Option>;
              })
            : null}
          <Select
            showSearch
            placeholder="Ward..."
            defaultActiveFirstOption={true}
            onChange={(value: number) => setWardCode(value)}
          >
            {wards
              ? wards.map((ward: any) => {
                  return <Option value={ward.code}>{ward.name}</Option>;
                })
              : null}
          </Select>
        </Select>

        {/* <Select
          showSearch
          placeholder="Ward..."
          
          defaultActiveFirstOption={true}
          onChange={(value: number) => setWardCode(value)}
          
        >
          {wards
            ? wards.map((ward: any) => {
                return <Option value={ward.code}>{ward.name}</Option>;
              })
            : null}
        </Select> */}
      </Form.Item>
    </>
  );
};

export default AddressPicker;
