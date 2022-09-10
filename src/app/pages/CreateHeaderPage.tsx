import React from "react";
import AddHeaderDetails from "../Components/Create/Header/AddHeaderDetails";
import Tabs from "../Components/Create/Tabs/Tabs";

const CreateHeaderPage = () => {
  return (
    // <div className=" mx-auto flex justify-center items-center h-screen">
    <div className="max-w-6xl mx-auto mt-24">
      <Tabs index={1} />
      <p className="mt-10 mb-2 text-4xl text-green-500 font-monteserrat font-light">
        Let's get start with adding basic details to your project.
      </p>
      <p className="font-light font-monteserrat m-0 p-0 text-gray-500 mb-10">
        While adding basic details like like a title and a description first,
        you are starting from a strong foundation.
        <br />
        Don't worry if you are not sure, you can always comback and edit this
        any time.
      </p>
      <AddHeaderDetails />
    </div>
    // </div>
  );
};

export default CreateHeaderPage;
