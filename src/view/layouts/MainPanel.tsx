import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Bottom } from '@/view/layouts/Bottom';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function MainPanel() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathArr = ['/process', '/', '/about'];

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
      <div className="h-full w-full bg-red-200">
        <div
          className="group fixed left-0 top-[30%] z-50 flex h-96 w-32 cursor-pointer items-center justify-start"
          onClick={handlePrevClick}
        >
          {!isFirst && (
            <Button
              className="pointer-events-none ml-6 opacity-30 transition-opacity group-hover:opacity-100"
              variant="outline"
              size="icon"
            >
              <ChevronLeft />
            </Button>
          )}
        </div>
        <Outlet />
        <div
          className="group fixed right-0 top-[30%] z-50 flex h-96 w-32 cursor-pointer items-center justify-end"
          onClick={handleNextClick}
        >
          {!isLast && (
            <Button
              className="pointer-events-none mr-6 opacity-30 transition-opacity group-hover:opacity-100"
              variant="outline"
              size="icon"
            >
              <ChevronRight />
            </Button>
          )}
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export { MainPanel };
