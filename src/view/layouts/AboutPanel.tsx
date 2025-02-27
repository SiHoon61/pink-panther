import React, { useRef, useEffect } from 'react';
import { TextGradientScroll } from '@/components/ui/TextGradientScroll';

function AboutPanel() {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = Math.min(entry.intersectionRatio / 0.4, 1);
        if (targetRef.current) {
          const width = 90 + progress * 10; // 90%에서 100%로
          const borderRadius = 56 - progress * 56; // 56px에서 0px로
          targetRef.current.style.width = `${width}%`;
          targetRef.current.style.borderRadius = `${borderRadius}px`;
        }
      },
      {
        threshold: Array.from({ length: 200 }, (_, i) => i * 0.002),
      },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center bg-white">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center text-7xl font-bold">
          Hello world
        </div>
        <div
          ref={targetRef}
          className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 bg-red-200 text-xl font-bold transition-all duration-500 ease-out"
        >
          <div className="w-[900px]">
            나오다 내려다보다 비 긁는 얻다 생활이 불가피하다. 주게 2023년
            지우게, 보아요 살다 크어 하다. 것 멥쌀이요 호족은 반응에 똥이
            의식이다, 저 없다 무장을 가난한 하얗다. 발전 다른 수없이 위와
            신체를, 된다. 아닐지 어린이날이 굳어진다 말의 때다 이번이 하다. 받게
            이제는 한기의 너머 마는, 무력해진다. 범퍼가 당이 네 교문은 천석꾼의
            기울이다. 이야기를 측 모시면 탁월한 여성을 난다 하여요. 정도를
            학교까지 왜 놓은, 여러분에 있습니까.
          </div>
          <div className="w-[900px]">
            갖고 금속을 종교의 잃어버리다, 오 강화하면 되는지. 일부터 자본주의가
            오래 아름답습니다 법입니다 너희와, 방향이다 보지 장난스럽다 중앙당은
            가다. 그렇으려고 간절하지요 거 명령을 살다. 삶이라 벼룩시장은 것
            방출은 오히려 방출되는 전제를 보복이나 느끼다. 모으다 작가에
            지옥이는 지금 그때로 집필자만 덜다.
          </div>
          <div className="w-[900px]">
            침해다 모르고 사이에서 비하는 쌀으로 계획의 임신도 저기와 가능하다.
            드릴 일쑤한테 칸이 잠을 없이 것 의하다. 정신권은 아저씨를 다 23일,
            부전공에 일단 조리를 믿음이라, 애정에 는다. 우르르 말부터 대체, 옆이
            태어난지. 사실이니 회사가 헌금이라고, 본 간단히, 같다.
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-white text-7xl font-bold">
        <TextGradientScroll text="bye" />
      </div>
    </>
  );
}

export { AboutPanel };
