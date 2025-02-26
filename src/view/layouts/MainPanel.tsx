import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Bottom } from "@/view/layouts/Bottom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

function MainPanel() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathArr = ["/process", "/", "/about"];

  const currentIndex = pathArr.indexOf(pathname);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === pathArr.length - 1;

  const handlePrevClick = () => {
    if (!isFirst) {
      navigate(pathArr[currentIndex - 1]);
    }
  };

  const handleNextClick = () => {
    if (!isLast) {
      navigate(pathArr[currentIndex + 1]);
    }
  };

  return (
    <div>
      <div className="w-full h-screen  bg-red-700">
        {/* <div
          className="absolute top-[30%] left-0 w-32 h-96 flex items-center justify-start group cursor-pointer"
          onClick={handlePrevClick}
        >
          <Button
            className="ml-6 opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none"
            variant="outline"
            size="icon"
            hidden={isFirst}
          >
            <ChevronLeft />
          </Button>
        </div> */}
        <Outlet />
        {/* <div
          className="absolute top-[30%] right-0 w-32 h-96 flex items-center justify-end group cursor-pointer"
          onClick={handleNextClick}
        >
          <Button
            className="mr-6 opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none "
            variant="outline"
            size="icon"
            hidden={isLast}
          >
            <ChevronRight />
          </Button>
        </div> */}
      </div>
      {/* <Bottom /> */}
    </div>
  );
}

export { MainPanel };
