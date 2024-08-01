import React, { useCallback, useState } from "react";
import img from "../images/logo.svg";
import { Button } from "../components/Button";
import Input from "../components/Input";

type AuthUser = {
  phone?: string;
  id?: string;
  gender?: string;
  area?: string;
};

export const Display = () => {
  const [handler, setHandler] = useState<string | null>("users");
  const [input, setInput] = useState<AuthUser | null>(null);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const clickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    // console.log(data);
    setHandler(data);
  }, []);

  const renderInput = () => {
    switch (handler) {
      case "users":
        return (
          <Input
            type="text"
            value={input?.phone}
            name="phone"
            onChange={inputHandler}
            placeholder="Search by phone"
            className="h-12 w-11/12 rounded-lg text-2xl pl-10"
          />
        );

      case "bookings":
        return (
          <Input
            type="text"
            value={input?.id}
            name="id"
            onChange={inputHandler}
            placeholder="Search by ID"
            className="h-12 w-11/12 rounded-lg text-2xl pl-10"
          />
        );

      case "gender":
        return (
          <Input
            type="text"
            value={input?.gender}
            name="gender"
            onChange={inputHandler}
            placeholder="Search by gender"
            className="h-12 w-11/12 rounded-lg text-2xl pl-10"
          />
        );

      case "area":
        return (
          <Input
            type="text"
            value={input?.area}
            name="area"
            onChange={inputHandler}
            placeholder="Search by area"
            className="h-12 w-11/12 rounded-lg text-2xl pl-10"
          />
        );

      default:
        return (
          <Input
            type="text"
            value={input?.phone}
            name="phone"
            onChange={inputHandler}
            placeholder="Search by phone"
            className="h-12 w-11/12 rounded-lg text-2xl pl-10"
          />
        );
    }
  };

  return (
    <div className="">
      <div className="pl-10 pr-16 h-20 bg-blue-800 flex self-baseline items-center justify-between">
        <img src={img} alt="img" className="h-24 w-24" />
        <p className="text-white text-xl ">John Doe</p>
      </div>
      <div className="pl-10 pt-3 flex justify-items-start text-2xl bg-white text-black">
        <Button
          type="button"
          name="Users"
          data-name="users"
          onClick={clickHandler}
          className={` ${
            handler === "users" ? "border-blue-500 border-b-2" : ""
          }`}
        />
        <Button
          type="button"
          name="Bookings"
          data-name="bookings"
          onClick={clickHandler}
          className={`ml-10 ${
            handler === "bookings" ? "border-blue-500 border-b-2" : ""
          }`}
        />
        <Button
          type="button"
          name="Gender"
          data-name="gender"
          onClick={clickHandler}
          className={`ml-10 ${
            handler === "gender" ? "border-blue-500 border-b-2" : ""
          }`}
        />
        <Button
          type="button"
          name="Area"
          data-name="area"
          onClick={clickHandler}
          className={`ml-10 ${
            handler === "area" ? "border-blue-500 border-b-2" : ""
          }`}
        />
      </div>
      <div className="pl-96 pr-96 h-screen bg-slate-100 flex justify-between pt-60">
        {renderInput()}
        <Button
          type="button"
          name="Go"
          className="text-white text-xl rounded-lg bg-blue-800 h-12 w-12"
          onClick={() => alert("Button Clicked")}
        />
      </div>
    </div>
  );
};
