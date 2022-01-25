import React from 'react';

const MiniFooter = props => {

    console.log(props.absolute);
    
  return (
    <>
    <footer
      className={
        (props.absolute
          ? "absolute w-full bottom-0 bg-gray-900"
          : "relative") + " pb-6"
      }
    >
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full text-center px-4">
            <div className="text-sm text-white font-semibold">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                target="_blank"
                href="https://github.com/ZaydImr"
                className="text-teal-400 hover:text-gray-400 text-sm font-semibold"
              >
                Zayd EL IMRANI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
};

export default MiniFooter;
