import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { postAPIData } from "../services/api";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert";
import { useForm, SubmitHandler } from "react-hook-form";
import "./addmentcss.css";

const initialVals = {
  Name: "",
  desig: "",
  city: "",
  phone: "",
  Speciality: "",
  country: "",
  Experience: "",
};

const AddMentors = () => {
  const [postMentors, setMentors] = useState(initialVals);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  console.warn("initial data==>", postMentors);

  const postData = async (data) => {
    console.log("arbaz ka data", data);
    await postAPIData(data);
    Swal("Submitted", "Submitted Successfully", "success");
    setTimeout(() => {
      history.push("./allMent");
    }, 2000);
  };
  return (
    <>
      <div className="maindivadd">
        <h3>Add New Mentor</h3>
        <Form onSubmit={handleSubmit(postData)}>
          <div className="LabelDiv">
            <Form.Label>Enter Name:</Form.Label>
            <span className="error">{errors.Name && "can not be blanked"}</span>
          </div>
          <Form.Control
            placeholder="Enter Name"
            type="text"
            {...register("Name", { required: true })}
            // name="Name"
            // value={Name}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter Designation:</Form.Label>
            <span className="error">
              {errors.desig && "can not be blanked"}
            </span>
          </div>{" "}
          <Form.Control
            {...register("desig", { required: true })}
            placeholder="Enter Designation"
            type="text"
            // name="desig"
            // value={desig}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter city:</Form.Label>
            <span className="error">{errors.city && "can not be blanked"}</span>
          </div>{" "}
          <Form.Control
            {...register("city", { required: true })}
            placeholder="Enter city"
            type="text"
            // name="city"
            // value={city}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter phone:</Form.Label>
            <span className="error">
              {errors.phone && "can not be blanked"}
            </span>
          </div>{" "}
          <Form.Control
            {...register("phone", { required: true })}
            placeholder="Enter phone Number"
            type="text"
            // name="phone"
            // value={phone}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter Speciality:</Form.Label>
            <span className="error">
              {errors.Speciality && "can not be blanked"}
            </span>
          </div>{" "}
          <Form.Control
            {...register("Speciality", { required: true })}
            placeholder="Enter Speciality"
            type="text"
            // name="Speciality"
            // value={Speciality}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter country:</Form.Label>
            <span className="error">
              {errors.country && "can not be blanked"}
            </span>
          </div>{" "}
          <Form.Control
            {...register("country", { required: true })}
            placeholder="Enter country"
            type="text"
            // name="country"
            // value={country}
          ></Form.Control>
          <br />
          <div className="LabelDiv">
            <Form.Label>Enter Experience:</Form.Label>
            <span className="error">
              {errors.Experience && "can not be blanked"}
            </span>
          </div>{" "}
          <Form.Control
            {...register("Experience", { required: true })}
            placeholder="Enter Experience"
            type="text"
            // name="Experience"
            // value={Experience}
          ></Form.Control>
          <br />
          <Button type="submit" className="sub-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddMentors;
