import Header from "./Header";
import Navbar from "./Navbar";

import AssistantNavbar from "./assistant/Navbar";

const Main = (props) => {
  if (props.role === "user") {
    return (
      <div className="fixed flex flex-row w-screen h-screen  bg-gray-100 overflow-auto">
        <div className="flex  bg-primary">
          <div className="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
            <div className="w-full lg:w-24 bg-primary rounded-lg relative">
              <a className="hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center w-14 h-14 rounded-xl hover:bg-white hover:bg-opacity-50"></a>
              <AssistantNavbar />
            </div>
          </div>
        </div>
        <div className="">{props.children}</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row h-screen bg-primary-light overflow-hidden">
        <Navbar />
        <div className="flex flex-col w-screen">
          <Header term={props.term} searchKeyword={props.searchKeyword} />
          <div className="relative flex flex-col rounded-t-2xl overflow-auto">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
