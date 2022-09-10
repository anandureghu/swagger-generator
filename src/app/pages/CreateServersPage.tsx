import React from "react";
import AddServerDetails from "../Components/Create/Server/AddServerDetails";
import Tabs from "../Components/Create/Tabs/Tabs";

const CreateServersPage = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <Tabs index={2} />
      <p className="mt-10 mb-2 text-4xl text-green-500 font-monteserrat font-light">
        Now we can add some servers for testing.
      </p>
      <p className="font-light font-monteserrat m-0 p-0 text-gray-500 mb-10">
        You can test your api directly calling from swagger document.
        <br />
        Don't worry if you are not sure now, you can always comback and edit
        this any time.
      </p>
      <AddServerDetails />
    </div>
  );
};

export default CreateServersPage;
