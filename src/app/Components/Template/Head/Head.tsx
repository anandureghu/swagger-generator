import React from "react";

function Head() {
  return (
    <div className="flex flex-col bg-slate-50 p-12 py-5">
      <div className="relative max-w-max">
        {/* Title */}
        <h4 className="text-3xl font-semibold">Project Title</h4>

        {/* Version */}
        <span className="absolute top-1.5 -right-11 bg-slate-500 px-2 py-0.5 text-slate-100 rounded-full text-tiny">
          V.1.0
        </span>
      </div>

      {/* Base URL */}
      <p className="mb-2 bg-slate-100 px-4 py-2 border border-slate-300 font-light text-sm">
        [ Base URL: localhost:8080/api/v1 ]
      </p>

      {/* Swagger Json file link */}
      <a href="#" className="text-sm text-blue-500">
        http://localhost:8080/api/v1/swagger/swagger.json
      </a>

      {/* Description */}
      <p className="text-sm my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto a facere, quibusdam repellendus debitis nesciunt ipsam culpa quo nobis vero eveniet velit. Beatae corrupti nobis maiores ipsum omnis minima, sint eveniet placeat reprehenderit perspiciatis, voluptas totam temporibus aliquam incidunt ullam id sit mollitia! Eligendi dolore excepturi sed ipsam rerum.
      </p>

      {/* Terms of service */}
      <a href="#" className="text-sm text-blue-500">
        Terms of service
      </a>

      {/* Contact the developer */}
      <a href="#" className="text-sm text-blue-500">
        Contact the developer
      </a>

      {/* Licence */}
      <a href="#" className="text-sm text-blue-500">
        Licence
      </a>

      {/* Swagger.io Link */}
      <a href="https://swagger.io" target="_blank" className="text-sm text-blue-500">
        Find out more about swagger
      </a>

    </div>
  );
}

export default Head;
