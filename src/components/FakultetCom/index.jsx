import React, { useEffect, useState } from "react";
// import APIInstitutHaqida from "../../services/institutHaqida";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../MyTextInput";

import { RiPencilFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";

const FakultetCom = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([{}]);

  const fechtData = async () => {
    // try {
    //   const response = await APIInstitutHaqida.getInstitutHaqida();
    //   setDatas(response.data);
    // } catch (error) {
    //   console.error("Xatolik yuz berdi!", error);
    // }
  };

  const validationSchema = Yup.object({
    fakultet_name: Yup.string()
      .max(50, "Maksimal uzunlik 50 ta belgi bo'lishi kerak")
      .required("Fakultitet nomi maydoni majburiy"),
  });

  const formik = useFormik({
    initialValues: {
      fakultet_name: "",
    }, // Initial values for formik
    validationSchema,
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit && datas.length === 0) {
          // await APIInstitutHaqida.postInstitutHaqida(data);
        }
        // PATCH
        else {
          // await APIInstitutHaqida.patchInstitutHaqida(id, data);
          // console.log(data);
          // setEdit(false);
          // setId(null);
        }
        onSubmitProps.resetForm();
        fechtData();
      } catch (error) {
        console.error("Xatolik sodir bo'ldi!", error);
        onSubmitProps.resetForm();
      }
    },
  });

  const handleEdit = (id) => {
    setEdit(true);
    setId(id);
    const data = datas.find((item) => item.id === id);
    if (data) {
      formik.setValues({
        fakultet_name: data.fakultet_name,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    // try {
    //   await APIInstitutHaqida.delInstitutHaqida(id);
    //   fechtData();
    // } catch (error) {
    //   console.error("Xatolik yuz berdi!", error);
    // }
  };

  useEffect(() => {
    fechtData();
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-medium text-gray-700 text-center my-5">
        Fakultitetlar
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1 border p-5">
          <Formik>
            <form onSubmit={formik.handleChange}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">
                  Kakultitet qo'shish
                </legend>
                <div className="my-5">
                  <MyTextInput
                    type="text"
                    id="fakultet_name"
                    name="fakultet_name"
                    label="Fakultitet"
                    tab="nomi"
                    value={formik.values.fakultet_name}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.fakultet_name && formik.errors.fakultet_name ? (
                    <div className="text-red-500">{formik.errors.fakultet_name}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-success w-full">
                  {!edit ? "Yuborish" : "Saqlash"}
                </button>
              </fieldset>
            </form>
          </Formik>
        </div>
        <div className="col-span-2 border p-2">
          {datas &&
            datas.map((data) => {
              return (
                <div key={data.id}>
                  <p>KKKKKKKKKK</p>
                  <div className="flex py-5">
                    <button
                      type="submit"
                      className="px-1 text-xl rounded-lg border text-teal-500 border-teal-500 bg-white active:bg-teal-500 active:text-white font-semibold ml-2"
                      onClick={() => handleEdit(data.id)}
                    >
                      <RiPencilFill/>
                    </button>
                    <button
                      type="submit"
                      className="px-1 text-xl rounded-lg border text-red-500 border-red-500 bg-white active:bg-red-500 active:text-white font-semibold ml-2"
                      onClick={() => handleDelete(data.id)}
                    >
                      <MdDeleteForever/>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FakultetCom;
